import React, { useCallback } from 'react';
import { _cs, getPre } from 'common/utils';
import styles from './styles.scss';
import { FilterType, FilterStates, GlobalSettingsStates } from 'common/types';
import Highlight from 'react-highlight.js';

interface PropTypes {
  className?: string;
  filters: FilterType[];
  filterStates: FilterStates;
  settingsStates: GlobalSettingsStates;
}

export default function CodeBin(props: PropTypes) {
  const { filterStates, filters, className, settingsStates } = props;

  const selectedFilters = filters.filter(filter => filterStates[filter.id]);

  let headTags = selectedFilters
    .filter(filter => filter.location === 'head')
    .map(filter => {
      return filter.content(settingsStates[filter.id] || {})
    })
    .join('\n  ');

  let bodyTags = selectedFilters
    .filter(filter => filter.location === 'body')
    .map(filter => filter.content({}))
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

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(htmlText);
  }, [htmlText]);

  const classNames = [styles.codeBin, className];

  return (
    <div className={_cs(classNames)}>
      <button className={styles.copy} title="Copy" onClick={handleCopy}>
        <span className="far fa-copy"></span>
      </button>
      <Highlight language='html'>
        {htmlText}
      </Highlight>
    </div>
  );
}
