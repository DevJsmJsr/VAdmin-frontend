"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ListVehiclesResponse } from "./listCarsTypes";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~components/ui/dropdown-menu";
import { Button } from "~components/ui/button";
import { ROUTES } from "~constants/appRoutes";

export const listVehicleColumns = ({navigate}): ColumnDef<ListVehiclesResponse>[] => [
  {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => {
            navigate(ROUTES.CAR_MAINTENANCE, { state: row.original });
          }}>
            Iniciar revisión
          </DropdownMenuItem>
          {/* <DropdownMenuItem onClick={() =>{
            setRowSelected(row)
          }}>
            Historial
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    accessorKey: "number_plate",
    header: () => "Placa",
  },
  {
    accessorKey: "property_card.property_card_number",
    header: () => "# Tarjeta propiedad",
  },
  {
    accessorKey: "property_card.person.name",
    header: () => "Propietario",
  },
  {
    id: "identification",
    accessorFn: (row) =>
      `${row.property_card.person.document_type} ${row.property_card.person.document_number}`,
    header: () => "Identificación",
  },
  {
    accessorKey: "type_vehicle",
    header: () => "Tipo",
  },
  {
    accessorKey: "model",
    header: () => "Modelo",
  },
  {
    accessorKey: "color",
    header: () => "Color",
  },
];
