import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.filler} style={{ width: `${progress}%` }}></div>
    </div>
  );
};


export default ProgressBar;
