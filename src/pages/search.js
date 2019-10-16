import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Search from '../atoms/search';

class SearchPage extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <Search />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

export default SearchPage