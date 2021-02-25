import React, { useEffect } from 'react';
import styles from './modal.module.scss';
import { CrossIcon } from 'icons';

interface IModal {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: IModal) => {
  useEffect(() => {
    document.body.style.overflow = `hidden`;
    return () => {
      document.body.style.overflow = `unset`;
    };
  }, []);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalInner}>
          <div className={styles.modalClose} onClick={onClose}>
            <CrossIcon />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
