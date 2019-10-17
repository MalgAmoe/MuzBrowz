import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import Search from '../atoms/search';
import SongListElement from '../molecules/songListElement';

class SearchPage extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <Search />
        <div style={{width: '100%'}}>
          {this.props.songs.map(song => {
            return <SongListElement key={`${song.trackId}_${song.collectionId}`} songInfo={song} />
          })}
        </div>
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
