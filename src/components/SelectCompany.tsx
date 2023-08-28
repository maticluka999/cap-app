import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Company } from "~/utils/types";
import { companies } from "~/utils/s&p-500-aug-27-2023";

type Props = {
  onChange: (value: Company | null) => void;
};
export default function CompanySelect(props: Props) {
  const { onChange } = props;

  return (
    <Autocomplete
      options={companies}
      onChange={(e, value) => onChange(value)}
      autoHighlight
      getOptionLabel={(option) => `${option.name} (${option.code})`}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {`${option.name} (${option.code})`}
        </Box>
      )}
      componentsProps={{
        popper: {
          modifiers: [
            {
              name: "flip",
              enabled: false,
            },
          ],
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Company"
          name=""
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
