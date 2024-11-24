import { FieldError } from "react-hook-form";

export interface CommonInputProps {
  name: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  design?: string;
  hookError?: FieldError;
}