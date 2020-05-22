import React, { useCallback } from 'react';
import ToggleButton from 'components/ToggleButton';
import { _cs } from 'common/utils';
import { FilterSettings, SettingsStates } from 'common/types';
import styles from './styles.scss';

interface PropTypes {
  className?: string;
  filterName: string;
  filterId: string;
  filterSettings: FilterSettings[];
  settingsStates: SettingsStates;
  checked: boolean;
  onToggle: (v: string) => void;
  onChange: (id: string, value: SettingsStates) => void;
}

export default function Filter(props: PropTypes) {
  const { filterId, onToggle, onChange, filterName, filterSettings, checked, settingsStates } = props;

  const handleToggle = useCallback(
    () => {
      onToggle(filterId);
    }, [onToggle, filterId]
  );

  const update = useCallback(
    (id: string, value: string) => {
      const newSettingsStates = {
        ...settingsStates,
        [id]: value,
      };
      onChange(filterId, newSettingsStates);
    }, [onChange, filterId, settingsStates]
  );

  const classNames = [styles.filter, props.className];

  const classOptions = [styles.options];
  if (props.checked) {
    classOptions.push(styles.on);
  }

  const settingsElements = filterSettings.map(setting => {
    const val = settingsStates[setting.id];
    return (
        <div key={setting.id} className={styles.settings}>
          <p> {setting.name} </p>
          <input type="text" value={val || setting.default} onChange={(e) => {
              update(setting.id, e.target.value);
            }
          } />
      </div>
    );
  });


  return (
    <div className={_cs(classNames)}>
      <div className={styles.header}>
        <p> {filterName} </p>
        <ToggleButton checked={checked} onToggle={handleToggle}/>
      </div>
      <div className={_cs(classOptions)}>
        {settingsElements}
      </div>
    </div>
  );
}
