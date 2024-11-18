import { FormControl, FormField, FormItem, FormLabel,
  FormDescription, FormMessage } from "./form";
import { type Control } from 'react-hook-form';
import { Input } from "./input";
import { useTranslation } from "react-i18next";

export type InputTypeOptions =
  | 'text'
  | 'number'
  | 'date'
  | 'datetime-local'
  | 'password'
  | 'checkbox'
  | 'text-area'
  | 'select'
  | 'dropzone'
  | 'switch';

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
  design?: string;
  isHidden?: boolean;
}

const InputHandler = ({
  type,
  name,
  label,
  placeholder,
  disabled = false,
  isMulti = false,
  design,
  descriptionInput,
  control,
}: InputHandlerProps) => {
  const {t}= useTranslation()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        let InputDisplayed: React.ReactNode;
        switch (type) {
          case "text":
            InputDisplayed = (
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
              />
            );
            break;
          case "number":
          case "date":
          /* case "datetime-local":
          case "password":
            InputDisplayed = (
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                isMulti={isMulti}
                required={rules?.required?.value ?? false}
              />
            );
            break;
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
          case "dropzone":
            InputDisplayed = (
              <InputDropzone
                name={name}
                label={label}
                extensions={extensions}
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
            <FormLabel>{t(label)}</FormLabel>
            <FormControl>{InputDisplayed}</FormControl>
            <FormDescription>
              {descriptionInput}
            </FormDescription>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default InputHandler;
