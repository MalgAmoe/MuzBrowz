import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import SongListElement from '../molecules/songListElement';
import OrderingSelector from '../molecules/orderingSelector';

class SongList extends Component {
  render() {
    const { songs } = this.props;
    return <div className={css(styles.container)}>
      <OrderingSelector />
      {songs.map((song, i) => {
        return <SongListElement
          key={`${song.trackId}_${song.collectionId}`}
          songInfo={song}
          position={i}
        />
      })}
    </div>
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20
  }
});

const mapStateToProps = ({ search }) => ({
  songs: search.songs
});

export default connect(mapStateToProps)(SongList)
