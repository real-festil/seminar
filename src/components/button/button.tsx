import React from 'react';
import styles from './button.module.scss';

interface IButton {
  onClick: () => void;
  label: string;
}

const Button = ({ onClick, label }: IButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
