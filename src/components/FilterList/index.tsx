import React, { useCallback } from 'react';
import { _cs } from 'common/utils';
import styles from './styles.scss';
import Filter from 'components/Filter';

import { FilterType, FilterStates, SettingsStates, GlobalSettingsStates } from 'common/types';

interface PropTypes {
  className?: string;
  filterStates: FilterStates;
  filters: FilterType[];
  settingsStates: GlobalSettingsStates;
  onChange: (v: FilterStates) => void;
  onSettingsChange: (v: GlobalSettingsStates) => void;
}

export default function FilterList(props: PropTypes) {
  const { filterStates, onChange, settingsStates, onSettingsChange } = props;

  const handleToggle = useCallback(
    (filterId: string) => {
      const newFilterStates = {
        ...filterStates,
        [filterId]: !filterStates[filterId]
      }
      onChange(newFilterStates);
    }, [filterStates, onChange]
  );

  const handleChange = useCallback(
    (filterId: string, value: SettingsStates) => {
      const newSettingsStates = {
        ...settingsStates,
        [filterId]: value
      }
      onSettingsChange(newSettingsStates);
    }, [settingsStates, onSettingsChange]
  );

  const classNames = [styles.filterList, props.className];

  const filterElements = props.filters.map(f =>
    <Filter
      key={f.id}
      filterName={f.name}
      filterId={f.id}
      filterSettings={f.settings}
      onToggle={handleToggle}
      onChange={handleChange}
      checked={!!props.filterStates[f.id]}
      settingsStates={settingsStates[f.id] || {}}
    />
  );

  return (
    <div className={_cs(classNames)}>
      {filterElements}
    </div>
  );
}
