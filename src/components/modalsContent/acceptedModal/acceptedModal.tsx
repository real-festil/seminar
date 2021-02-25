import React from 'react';
import Button from 'components/button';
import styles from './acceptedModal.module.scss';

const AcceptedModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.modal}>
      <h4 className={styles.modalTitle}>Заявка принята!</h4>
      <p className={styles.modalText}>
        В самое ближайшее время мы пришлем ссылку Mindmap в ваш мессенджер
      </p>
      <Button onClick={onClose} label="Хорошо" />
    </div>
  );
};

export default AcceptedModal;
