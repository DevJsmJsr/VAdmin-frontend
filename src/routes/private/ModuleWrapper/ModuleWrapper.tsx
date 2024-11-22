import { useTranslation } from "react-i18next";

import type { Module } from "~types/CommonTypes";
import './moduleWrapper.css';


interface Props extends React.PropsWithChildren {
  data: Module;
}

const ModuleWrapper = ({ data, children }: Props) => {
  const { t } = useTranslation();
  const { title } = data;

  return (
    <div className="moduleWrapper">
      <div className="moduleWrapper_titleContainer">
        <h2 className="title">{t(title)}</h2>
      </div>
      <div className="moduleWrapper_childrenContainer">{children}</div>
    </div>
  );
};

export default ModuleWrapper;
