import React, { useState }  from 'react';
import Logo from 'components/Logo';
import FilterList from 'components/FilterList';
import CodeBin from 'components/CodeBin';
import styles from './styles.scss';

import { filters } from 'common/filters';


function App() {
  const [filterStates, setFilterStates] = useState({});

  return (
    <div>
      <Logo className={styles.logo}/>
      <div className={styles.main}>
        <FilterList
          className={styles.filterList}
          filters={filters}
          filterStates={filterStates}
          onChange={setFilterStates}
        />
        <CodeBin className={styles.codeBin} filters={filters} filterStates={filterStates}/>
      </div>
    </div>
  );
}

export default App;
