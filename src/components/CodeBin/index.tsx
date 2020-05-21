import React from 'react';
import { _cs, getPre } from 'common/utils';
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

  let headTags = selectedFilters
    .filter(filter => filter.location === 'head')
    .map(filter => filter.content)
    .join('\n  ');

  let bodyTags = selectedFilters
    .filter(filter => filter.location === 'body')
    .map(filter => filter.content)
    .join('\n  ');

  const jsFilterOn = filterStates['js'];
  let jsTag;
  if (!!jsFilterOn) {
    const jsFilter = filters.filter(filter => filter.id === 'js')[0].content.link;
    jsTag = `${jsFilter.pre}${jsFilter.filename}${jsFilter.post}`;
    if (!!jsTag && jsFilter.location === 'head') {
      headTags = `${headTags}${jsTag}`;
    }
    else if (!!jsTag && jsFilter.location === 'body') {
      bodyTags = `${bodyTags}${jsTag}`;
    }
  }

  const cssFilterOn = filterStates['css'];
  let cssTag;
  if (!!cssFilterOn) {
    const cssFilter = filters.filter(filter => filter.id === 'css')[0].content.link;
    cssTag = `${cssFilter.pre}${cssFilter.filename}${cssFilter.post}`;
    if (!!cssTag && cssFilter.location === 'head') {
      headTags = `${headTags}${cssTag}`;
    }
    else if (!!cssTag && cssFilter.location === 'body') {
      bodyTags = `${bodyTags}${cssTag}`;
    }
  }

  const faviconFilterOn = filterStates['favicon'];
  let faviconTag;
  if (!!faviconFilterOn) {
    const faviconFilter = filters.filter(filter => filter.id === 'favicon')[0].content.png;
    faviconTag = `${faviconFilter.pre}${faviconFilter.filename}${faviconFilter.post}`;
    if (!!faviconTag && faviconFilter.location === 'head') {
      headTags = `${headTags}${faviconTag}`;
    }
    else if (!!faviconTag && faviconFilter.location === 'body') {
      bodyTags = `${bodyTags}${faviconTag}`;
    }
  }

  const googlefontsFilterOn = filterStates['googlefonts'];
  let googlefontsTag;
  if (!!googlefontsFilterOn) {
    const googlefontsFilter = filters.filter(filter => filter.id === 'googlefonts')[0].content;
    googlefontsTag = `${googlefontsFilter.pre}${googlefontsFilter.filename}${googlefontsFilter.post}`;
    if (!!googlefontsTag && googlefontsFilter.location === 'head') {
      headTags = `${headTags}${googlefontsTag}`;
    }
    else if (!!googlefontsTag && googlefontsFilter.location === 'body') {
      bodyTags = `${bodyTags}${googlefontsTag}`;
    }
  }

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
