import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "./form";
import { type Control } from "react-hook-form";
import { Input } from "./input";
import { useTranslation } from "react-i18next";
import InputDropzone from "~components/custom/Inputs/InputDropzone/InputDropzone";
import { FileWithPath } from "react-dropzone";
import InputSelect from "~components/custom/Inputs/InputSelect/InputSelect";
import { SelectData } from "~types/CommonTypes";

export type InputTypeOptions =
  | "text"
  | "number"
  | "date"
  | "datetime-local"
  | "password"
  | "checkbox"
  | "text-area"
  | "select"
  | "dropzone"
  | "switch";

export interface InputHandlerProps {
  className?: string;
  control?: Control;
  descriptionInput: string;
  design?: string;
  disabled?: boolean;
  extensions?: { string: []; };
  isMulti?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  label?: string;
  name: string;
  options?: SelectData[];
  placeholder?: string;
  type: InputTypeOptions;
  onInputChange?: (value: string | boolean | FileWithPath | null) => void;
  onEventChange?: (value: SelectData | SelectData[]) => void;
}

const InputHandler = ({
  className = "",
  control,
  descriptionInput,
  design,
  disabled = false,
  extensions,
  isMulti,
  isSearchable,
  isLoading,
  isClearable,
  label,
  name,
  options = [],
  placeholder,
  type,
  onInputChange = () => {},
  onEventChange = () => {},
}: InputHandlerProps) => {

  const { t } = useTranslation();
  return (
    <FormField
      control={control}
      name={name}
      render={(fieldObj) => {
        const { field, fieldState} = fieldObj
        let InputDisplayed: React.ReactNode;
        switch (type) {
          case "text":
            InputDisplayed = (
              <Input
                {...field}
                className={className}
                type={type}
                placeholder={t(placeholder!)}
                disabled={disabled}
              />
            );
            break;
          case "password":
            InputDisplayed = (
              <Input
                {...field}
                className={className}
                type={type}
                placeholder={t(placeholder!)}
                disabled={disabled}
              />
            );
            break;
          case "number":
          case "date":
            InputDisplayed = (
              <Input
                {...field}
                className={className}
                type={type}
                placeholder={t(placeholder!)}
                disabled={disabled}
              />
            );
            break;
          case "dropzone":
            InputDisplayed = (
              <InputDropzone
                name={name}
                extensions={extensions}
                disabled={disabled}
                design={design}
                hookOnChange={field.onChange}
                hookError={fieldState.error}
                onInputChange={onInputChange}
              />
            );
            break;
          case "select":
            InputDisplayed = (
              <InputSelect
                {...field}
                disabled={disabled}
                className={className}
                isClearable={isClearable}
                isLoading={isLoading}
                isMulti={isMulti}
                isSearchable={isSearchable}
                name={name}
                options={options}
                placeholder={placeholder}
                hookOnChange={field.onChange}
                onInputChange={onInputChange}
                onEventChange={onEventChange}
              />
            );
            break;
            /* case "datetime-local":
          case "checkbox":
            InputDisplayed = (
              <InputCheckbox
                name={name}
                label={label}
                placeholder={placeholder}
                labelHelper={labelHelper}
                defaultValue={defaultValue as boolean}
                disabled={disabled}
                required={rules?.required?.value ?? false}
                design={design}
                link={link}
                hookError={error}
                hookOnChange={onChange}
                onInputChange={onInputChange}
              />
            );
            break;
          case "text-area":
            InputDisplayed = (
              <InputTextArea
                name={name}
                label={label}
                placeholder={placeholder}
                labelHelper={labelHelper}
                defaultValue={defaultValue as InputTextDefaultValue}
                disabled={disabled}
                required={rules?.required?.value ?? false}
                design={design}
                hookError={error}
                hookOnChange={onChange}
                onInputChange={onInputChange}
              />
            );
            break;
          case "switch":
            InputDisplayed = (
              <InputSwitch
                name={name}
                label={label}
                disabled={disabled}
                defaultValue={defaultValue as boolean}
                required={rules?.required?.value ?? false}
                design={design}
                hookError={error}
                hookOnChange={onChange}
                onInputChange={onInputChange}
              />
            );
            break; */
          default:
            return (InputDisplayed = <></>);
        }
        return (
          <FormItem>
            {label && <FormLabel>{t(label)}</FormLabel>}
            <FormControl>{InputDisplayed}</FormControl>
            <FormDescription>{descriptionInput}</FormDescription>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default InputHandler;
