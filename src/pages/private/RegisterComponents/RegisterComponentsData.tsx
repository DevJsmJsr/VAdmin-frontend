import * as z from "zod";
import { createOptions } from "~lib/utils";

const accessoriesList = [
  "reverse_cam",
  "sunroof",
  "power_mirrors",
  "power_seats",
  "voice_control",
  "driven_assistance",
  "bluetooth",
  "air_conditioning",
  "cruise_control",
  "parking_sensors",
  "anti_theft_system",
  "alarm_system",
  "remote_start",
];
const transmissionsTypes = ["AUTOMATIC", "MANUAL"];
const engineTypes = [
  "4_cylinders",
  "6_cylinders",
  "8_cylinders",
  "V2",
  "V6",
  "V8",
];
const brakeSystem = ["DISC_BRAKE", "DRUM_BRAKE", "REGENERATIVE_BRAKE"];

export const RegisterComponentsSchema = z.object({
  issue_date: z.string(),
  enrollment_date: z.string(),
  transit_authority: z.string(),
  doors_number: z.string(),
  kilometric: z.string(),
  accessories: z
    .string()
    .min(1, "You must select at least one option.")
    .refine((values) => values.length > 0, {
      message: "At least one option should be selected",
    }),
  transmission_type: z.enum(["", "AUTOMATIC", "MANUAL"]),
  engine_type: z.enum([
    "",
    "4_cylinders",
    "6_cylinders",
    "8_cylinders",
    "V2",
    "V6",
    "V8",
  ]),
  horse_power: z.string(),
  brake_system: z.enum(["", "DISC_BRAKE", "DRUM_BRAKE", "REGENERATIVE_BRAKE"]),
});

export const registerComponentsInputs = () => [
  {
    id: "issue_date",
    label: "labels.issue_date",
    name: "issue_date",
    type: "date",
    block: "propertyCard",
  },
  {
    id: "enrollment_date",
    label: "labels.enrollment_date",
    name: "enrollment_date",
    type: "date",
    block: "propertyCard",
  },
  {
    id: "transit_authority",
    label: "labels.transit_authority",
    placeholder: "labels.transit_authority",
    name: "transit_authority",
    type: "text",
    className: "w-64",
    block: "propertyCard",
  },
  {
    id: "accessories",
    label: "labels.accessories",
    name: "accessories",
    type: "select",
    isMulti: true,
    placeholder: "labels.accessories",
    options: createOptions(accessoriesList),
    className: "w-full",
    block: "accessories",
  },
  {
    id: "doors_number",
    label: "labels.doors_number",
    name: "doors_number",
    placeholder: "labels.doors_number",
    type: "number",
    className: "w-64",
    block: "accessories",
  },
  {
    id: "kilometric",
    label: "labels.kilometric",
    name: "kilometric",
    type: "number",
    className: "w-64",
    placeholder: "labels.kilometric",
    block: "accessories",
  },
  {
    id: "transmission_type",
    label: "labels.transmission_type",
    placeholder: "labels.transmission_type",
    name: "transmission_type",
    options: createOptions(transmissionsTypes),
    type: "select",
    className: "w-64",
    block: "engine",
  },
  {
    id: "engine_type",
    label: "labels.engine_type",
    name: "engine_type",
    placeholder: "labels.engine_type",
    options: createOptions(engineTypes),
    type: "select",
    className: "w-64",
    block: "engine",
  },
  {
    id: "brake_system",
    label: "labels.brake_system",
    name: "brake_system",
    placeholder: "labels.brake_system",
    options: createOptions(brakeSystem),
    type: "select",
    className: "w-64",
    block: "engine",
  },
  {
    id: "horse_power",
    label: "labels.horse_power",
    name: "horse_power",
    type: "number",
    placeholder: "labels.horse_power",
    block: "engine",
  },
];
