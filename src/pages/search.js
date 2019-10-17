import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Search from '../atoms/search';
import SongList from '../organisms/songList';

class SearchPage extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <Search />
        <SongList />
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

export default SearchPage;
