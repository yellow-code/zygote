import React, { useCallback } from 'react';
import { _cs } from 'common/utils';
import styles from './styles.scss';
import Filter from 'components/Filter';

import { FilterType, FilterStates } from 'common/types';

interface PropTypes {
  className?: string;
  filterStates: FilterStates;
  filters: FilterType[];
  onChange: (v: FilterStates) => void;
}

export default function FilterList(props: PropTypes) {
  const { filterStates, onChange } = props;

  const handleToggle = useCallback(
    (filterId: string) => {
      const newFilterStates = {
        ...filterStates,
        [filterId]: !filterStates[filterId]
      }
      onChange(newFilterStates);
    }, [filterStates, onChange]
  );


  const classNames = [styles.filterList, props.className];

  const filterElements = props.filters.map(f =>
    <Filter
      filterName={f.name}
      filterId={f.id}
      onToggle={handleToggle}
      checked={!!props.filterStates[f.id]}
    />
  );

  return (
    <div className={_cs(classNames)}>
      {filterElements}
    </div>
  );
}
