import React from 'react';
import { _cs } from 'common/utils';
import styles from './styles.scss';
import { FilterType, FilterStates } from 'common/types';

interface PropTypes {
  className?: string;
  filters: FilterType[];
  filterStates: FilterStates;
}

const getPre = (tag: string) => {
  if (tag === '') {
    return '';
  }
  else {
    return '\n  ';
  }
};

export default function CodeBin(props: PropTypes) {
  const { filterStates, filters, className } = props;

  const selectedFilters = filters.filter(filter => filterStates[filter.id]);

  let headTags = selectedFilters
    .filter(filter => filter.location === 'head')
    .map(filter => filter.content)
    .join('\n  ');

  let bodyTags = selectedFilters
    .filter(filter => filter.location === 'body')
    .map(filter => filter.content)
    .join('\n  ');

  const preHead = getPre(headTags);
  const preBody = getPre(bodyTags);

  headTags = `${preHead}${headTags}`;
  bodyTags = `${preBody}${bodyTags}`;

  const htmlText = `
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>${headTags}
</head>
<body>${bodyTags}
</body>
</html>`;

  const classNames = [styles.codeBin, className];

  return (
    <div className={_cs(classNames)}>
      {htmlText}
    </div>
  );
}
