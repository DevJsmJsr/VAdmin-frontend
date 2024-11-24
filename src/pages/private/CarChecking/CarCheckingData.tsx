import * as z from "zod";

export const StartCheckingSchema = z.object({
  propertyCard: z
    .custom<File>((value) => value instanceof File, {
      message: "Debe ser un archivo válido.",
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "El archivo debe ser menor a 5MB.",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "El archivo debe ser un JPEG o PNG.",
    }),
});

export const startCheckingFormInputs = () => [
  {
    id: "propertyCard",
    label: "labels.property_card",
    name: "property_card",
    type: "dropzone",
    extensions: {
      "image/*": []
    }
  },
];
