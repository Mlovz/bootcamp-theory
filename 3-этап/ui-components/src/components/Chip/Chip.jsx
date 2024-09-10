import React from 'react';
import styles from './Chip.module.css';

const Chip = ({ label, onDelete }) => {
  return (
    <div className={styles.chip}>
      <span className={styles.label}>{label}</span>
      {onDelete && (
        <button className={styles.deleteButton} onClick={onDelete} aria-label="delete">
          &times;
        </button>
      )}
    </div>
  );
};

export default Chip;
