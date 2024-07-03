import React from 'react';
import './DownloadLink.css';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const DownloadLink = () => {

  const { t } = useTranslation();
  return (
    <a href="/Maria_Xenaki_cv.pdf" download>
        <Button variant='secondary' className='button'>{t('here')}</Button>
    </a>
  )
}

export default DownloadLink