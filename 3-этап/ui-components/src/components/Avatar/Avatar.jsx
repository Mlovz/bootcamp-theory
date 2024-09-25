import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({ src, alt, size = 'medium' }) => {
  return <img className={`${styles.avatar} ${styles[size]}`} src={src} alt={alt} />;
};


export default Avatar;
