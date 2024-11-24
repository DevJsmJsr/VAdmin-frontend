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
  id?: string | number;
  type: InputTypeOptions;
  descriptionInput: string;
  name: string;
  label?: string;
  placeholder?: string;
  control?: Control;
  isSearchable?: boolean;
  isMulti?: boolean;
  disabled?: boolean;
  link?: string;
  extensions?: { string: []; };
  design?: string;
  isHidden?: boolean;
  onInputChange?: (value: string | boolean | FileWithPath | null) => void;
}

const InputHandler = ({
  type,
  name,
  label,
  placeholder,
  disabled = false,
  design,
  extensions,
  descriptionInput,
  control,
  onInputChange = () => {},
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
                {...fieldObj}
                type={type}
                placeholder={t(placeholder!)}
                disabled={disabled}
              />
            );
            break;
          case "password":
            InputDisplayed = (
              <Input
                {...fieldObj}
                type={type}
                placeholder={t(placeholder!)}
                disabled={disabled}
              />
            );
            break;
          case "number":
          case "date":
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
          case "select":
            InputDisplayed = (
              <InputSelect
                name={name}
                label={label}
                placeholder={placeholder}
                labelHelper={labelHelper}
                options={options}
                isMulti={isMulti}
                defaultValue={defaultValue as SelectData | SelectData[]}
                iconName={iconName}
                isSearchable={isSearchable}
                disabled={disabled}
                required={rules?.required?.value ?? false}
                design={design}
                hookError={error}
                hookOnChange={onChange}
                onInputChange={onInputChange}
                onEventChange={onEventChange}
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
