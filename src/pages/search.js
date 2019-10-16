import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import Search from '../atoms/search';

class SearchPage extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <Search />
        <ul>
          {this.props.songs.map(song => {
            return <li key={song.trackId}>{song.trackName}</li>
          })}
        </ul>
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

const mapStateToProps = ({ search }) => ({
  songs: search.songs
})

export default connect(mapStateToProps)(SearchPage);
