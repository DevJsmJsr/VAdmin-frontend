import { HistoryIcon } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import NoDataWrapper from "~components/custom/NoDataWrapper/NoDataWrapper";
import { Button } from "~components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~components/ui/dialog";
import { Input } from "~components/ui/input";
import { Label } from "~components/ui/label";

const BasicDialog = () => {
  const { t } = useTranslation();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <HistoryIcon />
          {t("labels.history")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Historico de productos</DialogTitle>
          <DialogDescription>
            Aca visualizara el listado de productos/componentes instalados en el auto
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <NoDataWrapper/>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BasicDialog;
