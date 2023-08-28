import { ChangeEvent } from "react";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function DatePicker(props: Props) {
  const { onChange } = props;

  return (
    <input
      className="rounded bg-transparent p-[3px] ring-1 ring-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-60"
      type="date"
      onChange={onChange}
    />
  );
}

export default DatePicker;
