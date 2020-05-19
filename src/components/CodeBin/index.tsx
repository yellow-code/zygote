import React from 'react';
import { _cs } from 'common/utils';
import styles from './styles.scss';
import { FilterType, FilterStates } from 'common/types';

interface PropTypes {
  className?: string;
  filters: FilterType[];
  filterStates: FilterStates;
}

export default function CodeBin(props: PropTypes) {
  const { filterStates, filters, className } = props;

  const selectedFilters = filters.filter(filter => filterStates[filter.id]);

  const headTags = selectedFilters
    .filter(filter => filter.location === 'head')
    .map(filter => filter.content)
    .join('\n  ');

  const bodyTags = selectedFilters
    .filter(filter => filter.location === 'body')
    .map(filter => filter.content)
    .join('\n  ');

  const htmlText = `
<!DOCTYPE html>
<html>
<head>
  ${headTags}
</head>
<body>
  ${bodyTags}
</body>
</html>`;

  const classNames = [styles.codeBin, className];

  return (
    <div className={_cs(classNames)}>
      {htmlText}
    </div>
  );
}
