import React from "react";
import { useTranslation } from "react-i18next";
import { DataMapped } from "~types/CommonTypes";

interface Props {
  data: DataMapped[];
  columnsDesign?: string;
}
const DataMapper = ({ data }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="border border-gray-300 p-4 rounded-md">
      {data.map((item, index) => (
        <div
          key={index}
          role="data-mapper"
          className="flex flex-wrap items-start mb-2"
        >
          <p className="font-bold mr-2">{t(item.label)}:</p>
          <div className="font-normal">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default DataMapper;
