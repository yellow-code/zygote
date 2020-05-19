import React from 'react';
import { _cs } from 'common/utils';
import styles from './styles.scss';

interface PropTypes {
  className?: string;
}

export default function Logo(props: PropTypes) {

  const classNames = [styles.logo, props.className];

  return (
    <div className={_cs(classNames)}>
      zyg<span className={styles.o}></span>te
    </div>
  );
}
