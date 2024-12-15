import React from "react";
import { useTranslation } from "react-i18next";
import { CommonInputProps } from "../InputTypes";
import { SelectData } from "~types/CommonTypes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~components/ui/select";

interface Props extends CommonInputProps {
  options: SelectData[];
  defaultValue?: SelectData | SelectData[];
  isMulti?: boolean;
  isSearchable?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  hookOnChange?: (value: string | number | object | unknown) => void;
  onInputChange?: (value: string) => void;
  onEventChange?: (value: SelectData | SelectData[]) => void;
}

const InputSelect = ({
  name,
  placeholder,
  field,
  options = [],
  value,

  isSearchable = true,
  isMulti = false,
  disabled = false,
  required = false,
  onInputChange = () => {},
  onChange = () => {},
}: Props) => {
  const { t } = useTranslation();
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((item) => (
          <SelectItem value={item.value as string}>{t(item.label)}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default InputSelect;
