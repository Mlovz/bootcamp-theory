import React from 'react';
import styles from './Badge.module.css';

const Badge = ({ text, variant = 'default' }) => {
  return <span className={`${styles.badge} ${styles[variant]}`}>{text}</span>;
};


export default Badge;
