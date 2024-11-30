import { ArchiveX } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NoDataWrapper = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-3 w-100">
      <div className="mb-2">
        <ArchiveX size={60} strokeWidth={1} className='m-auto text-muted-foreground'/>
      </div>
      <div className="text-center">
        <p className='text-muted-foreground'>{t('labels.no_data')}</p>
        <p className='text-muted-foreground'>{t('labels.no_data_description')}</p>
      </div>
    </div>
  );
};

export default NoDataWrapper;
