import React, { useCallback } from 'react';
import ToggleButton from 'components/ToggleButton';
import { _cs } from 'common/utils';
import styles from './styles.scss';

interface PropTypes {
  className?: string;
  filterName: string;
  filterId: string;
  checked: boolean;
  onToggle: (v: string) => void;
}

export default function Filter(props: PropTypes) {
  const { filterId, onToggle } = props;

  const handleToggle = useCallback(
    () => {
      onToggle(filterId);
    }, [onToggle, filterId]
  );

  const classNames = [styles.filter, props.className];

  const classOptions = [styles.options];
  if (props.checked) {
    classOptions.push(styles.on);
  }

  return (
    <div className={_cs(classNames)}>
      <div className={styles.header}>
        <p> {props.filterName} </p>
        <ToggleButton checked={props.checked} onToggle={handleToggle}/>
      </div>
      <div className={_cs(classOptions)}>
        <p> We have options here </p>
      </div>
    </div>
  );
}
