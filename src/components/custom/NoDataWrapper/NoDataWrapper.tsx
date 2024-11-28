import { ArchiveX } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NoDataWrapper = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-3 w-100">
      <div className="mb-2">
        <ArchiveX size={60} />
      </div>
      <div className="text-center">
        <p className="fw-bold">{t('label.no_data')}</p>
        <p>{t('components.noData_desc')}</p>
      </div>
    </div>
  );
};

export default NoDataWrapper;
