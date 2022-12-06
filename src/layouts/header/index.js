import React, { useState } from 'react';
import classes from './header.module.scss';
import SearchIcon from '../../components/search-icon';
import MOCK_DATA from '../../mock';
import { localeTextCompare } from '../../utils';

function Header({ setSelectedRowData }) {
  const [inputValue, setInputValue] = useState('');

  const filteredMockData = MOCK_DATA.filter(({ nameSurname, policyNo }) => {
    return (
      !inputValue ||
      localeTextCompare(nameSurname, inputValue) ||
      localeTextCompare(policyNo, inputValue)
    );
  });

  const onRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setInputValue('');
  };

  return (
    <header className={classes.headerContainer}>
      <div className={classes.searchInputContainer}>
        <SearchIcon className={classes.searchIcon} />
        <input
          className={classes.searchInput}
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="SEARCH (Client Name / Policy Number)"
        />
      </div>
      {inputValue !== '' ? (
        <div className={classes.autocompleteContainer}>
          {filteredMockData.map((rowData, index) => (
            <div
              key={index}
              className={classes.autocompleteRow}
              onClick={() => onRowClick(rowData)}
            >
              <div className={classes.autocompleteRowHeaderText}>
                {rowData.nameSurname}
              </div>
              <div className={classes.autocompleteRowSubInfoContainer}>
                <div>📞 {rowData.phoneNumber}</div>
                <div>📨 {rowData.emailAddress}</div>
                <div>📝 {rowData.policyNo}</div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
}

export default Header;
