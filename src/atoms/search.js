import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FaSearch } from 'react-icons/fa';

import colors from '../colors';

class Search extends Component {
    render() {
      return (
          <div className={css(styles.searchContainer)}>
            <input className={css(styles.searchInput)} />
            <FaSearch className={css(styles.searchIcon)} />
          </div>
      );
    }
  }

const styles = StyleSheet.create({
  searchInput: {
    height: 30,
    width: 200,
    border: '1px solid white',
    borderRadius: 20,
    background: colors.primary.dark,
    color: 'white',
    paddingLeft: 10,
    paddingRight: 36,
  },
  searchContainer: {
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    top: 8,
    left: 212,
    ':hover': {
      cursor: 'pointer'
    }
  }
});

export default Search