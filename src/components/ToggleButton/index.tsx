import React, { useState, useCallback } from 'react';
import { _cs } from 'common/utils';
import styles from './styles.scss';

export default function ToggleButton() {
  const [checked, setChecked] = useState(false);

  const onClick = useCallback(
    () => {
      setChecked(!checked);
    }, [setChecked, checked]
  );

  const classNames = [styles.toggleButton];
  if (checked) {
    classNames.push(styles.on);
  }

  return (
    <button className={_cs(classNames)} onClick={onClick}>
      <div className={styles.knob} />
    </button>
  );
}
