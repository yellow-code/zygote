import React from 'react';
import { _cs } from 'common/utils';
import styles from './styles.scss';

interface PropTypes {
  className?: string;
  checked?: boolean;
  onToggle?: () => void;
}

export default function ToggleButton(props: PropTypes) {

  const classNames = [styles.toggleButton, props.className];
  if (props.checked) {
    classNames.push(styles.on);
  }

  return (
    <button className={_cs(classNames)} onClick={props.onToggle}>
      <div className={styles.knob} />
    </button>
  );
}
