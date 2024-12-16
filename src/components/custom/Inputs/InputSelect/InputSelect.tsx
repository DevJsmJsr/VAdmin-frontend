import { debounce } from "lodash";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import { CommonInputProps } from "../InputTypes";
import { SelectData } from "~types/CommonTypes";
import makeAnimated from "react-select/animated";

interface Props extends CommonInputProps {
  options: SelectData[];
  defaultValue?: SelectData | SelectData[];
  isMulti?: boolean;
  isSearchable?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  hookOnChange?: (value: string | number | object | unknown) => void;
  onInputChange?: (value: string) => void;
  onEventChange?: (value: SelectData | SelectData[]) => void;
}

const InputSelect = ({
  className = "",
  defaultValue,
  disabled = false,
  isClearable = false,
  isLoading = false,
  isMulti = false,
  isSearchable = true,
  name,
  options = [],
  placeholder,
  hookOnChange = () => {},
  onInputChange = () => {},
  onEventChange = () => {},
}: Props) => {
  const { t } = useTranslation();
  const optionsTranslated = options.map((option: SelectData) => ({
    label: t(option.label),
    value: option.value,
  }));

  const animatedComponents = makeAnimated();
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
      borderRadius: "6px",
      borderWidth: "1px",
      borderColor: state.isFocused ? "#e5e7eb" : "#e5e7eb",
      boxShadow: state.isFocused ? "0 0 0 1px black" : "none",
      "&:hover": {
        borderColor: "#e5e7eb",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#aeafb1"
        : state.isFocused
        ? "#e5e7eb"
        : "white",
      color: state.isSelected ? "white" : "#000",
      padding: "8px 12px",
      cursor: "pointer",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#7b7e83",
      fontSize: "0.875rem",
    }),
  };
debugger
  return (
    <div className={className}>
      <Select
        className="w-full"
        styles={customStyles}
        closeMenuOnSelect={!isMulti}
        components={animatedComponents}
        defaultValue={defaultValue}
        isClearable={isClearable}
        isDisabled={disabled}
        isLoading={isLoading}
        isMulti={isMulti}
        isSearchable={isSearchable}
        menuPosition="fixed"
        name={name}
        options={optionsTranslated}
        placeholder={t(placeholder!)}
        noOptionsMessage={() => t("labels.not_find_conincedences")}
        onChange={(data) => {
          let inputValue;
          if (Array.isArray(data)) {
            inputValue = data.map((item: SelectData) => item.value).join(",");
            hookOnChange(inputValue);
            onEventChange(data);
          } else {
            const { value } = data as SelectData;
            hookOnChange(value);
            onEventChange(data as SelectData);
          }
        }}
        onInputChange={(value) => value && onInputChange(value)}
      />
    </div>
  );
};

export default InputSelect;
