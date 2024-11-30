import * as z from "zod";

export interface CarSelected {
  brand: string;
  number_plate: string;
  model: string;
  type_vehicle: string;
  color: string;
  doors_number: string;
  fuel_type: string;
  kilometric: string;
  property_card_id: string;
  property_card: {
    property_card_number: string;
    person: {
      document_type: string;
      document_number: string;
      name: string;
    };
  };
}

interface Props {
  carSelected: CarSelected;
}

export const vehicleDataMapper = ({ carSelected }: Props) => [
  {
    label: "labels.name",
    value: carSelected.property_card.person.name,
  },
  {
    label: "labels.identification",
    value: `${carSelected.property_card.person.document_type} ${carSelected.property_card.person.document_number}`,
  },
  {
    label: "labels.number_plate",
    value: carSelected.number_plate,
  },
  {
    label: "labels.brand",
    value: carSelected.brand,
  },
  {
    label: "labels.color",
    value: carSelected.color,
  },
  {
    label: "labels.card_id",
    value: carSelected.property_card.property_card_number,
  },
];

export const StartMaintenanceSchema = z.object({
  maintenanceType: z.string().min(1, { message: "Este campo es obligatorio" }),
  productName: z.string().optional(),
  productExpirationDate: z
    .date()
    .refine((date) => date > new Date(), {
      message: "La fecha de caducidad debe ser en el futuro",
    })
    .optional(),
  productAddedImage: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Debe seleccionar una imagen" })
    .optional(),
  recommendation: z.string().optional(),
});

export const startMaintenanceFormInputs = () => [
  {
    id: "maintenanceType",
    label: "labels.maintenance_type",
    name: "maintenanceType",
    type: "text",
  },
  {
    id: "productName",
    label: "labels.product_name",
    name: "productName",
    type: "text",
  },
  {
    id: "productExpirationDate",
    label: "labels.product_expiration_date",
    name: "productExpirationDate",
    type: "date",
  },
  {
    id: "recommendation",
    label: "labels.recommendation",
    name: "recommendation",
    type: "text",
  },
  {
    id: "productAddedImage",
    label: "labels.product_added_image",
    name: "productAddedImage",
    type: "dropzone",
    extensions: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
  },
];
