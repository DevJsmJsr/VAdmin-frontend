import { Loader } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useAppStorage } from "~store/useStore";
import NoDataWrapper from "../NoDataWrapper/NoDataWrapper";

export interface Props extends React.PropsWithChildren {
  data: React.ReactNode[] | object[] | object;
  message?: string;
}

const LoaderWrapper = ({
  message = "labels.searching_info",
  data = [],
  children,
}: Props) => {
  const { t } = useTranslation();
  const { isDoingRequest } = useAppStorage.getState();

  const typeValidation = useMemo(() => {
    if (Array.isArray(data)) return data.length > 0;
    else return Object.keys(data).length > 0;
  }, [data]);
  return (
    <>
      {isDoingRequest ? (
        <div className="my-1 d-flex flex-column align-items-center justify-content-center">
          <Loader size={50} className="animate-spin m-auto" />
          <p className="mt-2 text-wrap text-center">{t(message)}</p>
        </div>
      ) : (
        <>{typeValidation ? children : <NoDataWrapper />}</>
      )}
    </>
  );
};

export default LoaderWrapper;
