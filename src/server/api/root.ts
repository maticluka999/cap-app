import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { env } from "~/env.mjs";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { companies } from "~/utils/s&p-500-aug-27-2023";

const apiLimitNote =
  "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 100 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency.";

const CalculateInputSchema = z.object({
  company: z.string(),
  amount: z.number(),
  buyDate: z.string(),
  sellDate: z.string(),
});

type AlphaVantageResponseBody = {
  Note?: string;
  "Meta Data"?: Record<string, string>;
  "Time Series (Daily)"?: Record<string, Record<string, string>>;
};

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  calculate: publicProcedure
    .input(CalculateInputSchema)
    .mutation(async ({ input }) => {
      const { company, amount, buyDate, sellDate } = input;

      if (new Date(buyDate).getTime() > new Date(sellDate).getTime()) {
        throw new TRPCError({ message: "Invalid dates", code: "BAD_REQUEST" });
      }

      if (!companies.find((c) => c.code === company)) {
        throw new TRPCError({
          message: `Non S&P 500 index company '${company}'.`,
          code: "BAD_REQUEST",
        });
      }

      const apiKey = env.ALPHA_VANTAGE_API_KEY;

      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&apikey=${apiKey}&outputsize=full`,
      );

      const json = (await response.json()) as AlphaVantageResponseBody;

      if (json.Note === apiLimitNote) {
        throw new TRPCError({
          message: "API limit reached.",
          code: "BAD_REQUEST",
        });
      }

      const buyPricesOnDate = json["Time Series (Daily)"]![buyDate];

      if (!buyPricesOnDate) {
        throw new TRPCError({
          message: `No buy prices available for company '${company}' on ${buyDate}.`,
          code: "BAD_REQUEST",
        });
      }

      const buyPrice = parseFloat(buyPricesOnDate["1. open"]!);

      const sellPricesOnDate = json["Time Series (Daily)"]![sellDate];

      if (!sellPricesOnDate) {
        throw new TRPCError({
          message: `No sell prices available for company '${company}' on ${sellDate}.`,
          code: "BAD_REQUEST",
        });
      }

      const sellPrice = parseFloat(sellPricesOnDate["1. open"]!);

      const sharesCount = amount / buyPrice;
      const profit = sellPrice * sharesCount - amount;

      return {
        profit,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
