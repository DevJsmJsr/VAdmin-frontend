import { useMemo, useState } from "react";
import Dropzone, { type FileWithPath } from "react-dropzone";
import { useTranslation } from "react-i18next";

import { CommonInputProps } from "../InputTypes";
import "./inputDropzone.scss";
import { UploadCloudIcon } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FILE_EXTENSIONS = {
  csv: ".csv",
  jpg: ".jpg",
  pdf: ".pdf",
  png: ".png",
  rar: ".rar",
  txt: ".txt",
  xls: ".xls",
  xlsx: ".xlsx",
  zip: ".zip",
} as const;

export type FileExtensions =
  (typeof FILE_EXTENSIONS)[keyof typeof FILE_EXTENSIONS];

interface Props extends CommonInputProps {
  label?: string;
  extensions: { string: [] };
  placeholder?: string;
  hookOnChange?: (value: FileWithPath | null) => void;
  onInputChange?: (value: FileWithPath | null) => void;
}

const InputDropzone = ({
  extensions,
  disabled = false,
  design = "col-12",
  hookError,
  hookOnChange = () => {},
  onInputChange = () => {},
}: Props) => {
  const { t } = useTranslation();
  const [fileSelected, setFileSelected] = useState<FileWithPath | null>(null);

  const fileSize = useMemo(() => {
    if (fileSelected) {
      return Number((fileSelected.size / (1024 * 1024)).toFixed(2));
    } else return null;
  }, [fileSelected]);

  return (
    <>
      <div className={`customInput ${disabled ? "customInput_disabled" : ""}`}>
        <Dropzone
          disabled={disabled}
          accept={extensions}
          onDrop={(files) => {
            setFileSelected(files[0]);
            hookOnChange(files[0]);
            onInputChange(files[0]);
          }}
          noDrag
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className={`inputDropzone d-flex gap-2 ${
                disabled ? "inputDropzone_disabled" : ""
              }`}
            >
              <div
                className="inputDropzone_trigger items_row_centered"
                {...getRootProps()}
              >
                <UploadCloudIcon size={10} />
                <input {...getInputProps()} hidden />
              </div>
              <div className="d-flex flex-column justify-content-center">
                {!fileSelected ? (
                  <div>
                    {t("labels.dropzone_valid_file")}
                    <span className="ps-1 fw-bold">{'extensions'}</span>
                  </div>
                ) : (
                  t("labels.dropzone_file_loaded")
                )}

                {fileSelected && (
                  <div className="inputDropzone_thumb d-flex gap-2 align-items-center">
                    <p>
                      {fileSelected?.path} - {fileSize}MB
                    </p>
                    <button
                      type="button"
                      disabled={disabled}
                      className="inputDropzone_thumb_btn"
                      onClick={() => {
                        setFileSelected(null);
                        hookOnChange(null);
                        onInputChange(null);
                      }}
                    >
                      X
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </Dropzone>
        {hookError?.message && (
          <p className="customInput_error">{t(hookError?.message)}</p>
        )}
      </div>
    </>
  );
};

export default InputDropzone;
