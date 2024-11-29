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

export const listVehicleColumns: ColumnDef<ListVehiclesResponse>[] = [
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
          <DropdownMenuItem onClick={() => alert("hola")}>
            Iniciar revisión
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    accessorKey: "number_plate",
    header: () => "Placa",
  },
  {
    accessorKey: "type_vehicle",
    header: () => "Tipo",
  },
  {
    accessorKey: "model",
    header: () => "Modelo",
  },
];
