import moxios from 'moxios';
import reducer from './search';
import * as actions from '../actions/search';

describe('reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual({
      searchTerm: '',
      ordering: 'genre',
      songs: [],
      selectedSong: 0,
      loadingSongs: false,
      error: null,
      audio: new Audio(),
      isPlaying: false
    })
  });

  it('should handle SEARCH_INPUT', () => {
    expect(reducer(undefined, {
      type: actions.SEARCH_INPUT,
      searchTerm: 'a'
    })).toEqual({
      searchTerm: 'a',
      ordering: 'genre',
      songs: [],
      selectedSong: 0,
      loadingSongs: false,
      error: null,
      audio: new Audio(),
      isPlaying: false
    })
  });

  it('should handle SEARCH_REQUEST', () => {
    expect(reducer(undefined, {
      type: actions.SEARCH_REQUEST,
      term: 'late of the pier'
    })).toEqual({
      searchTerm: '',
      ordering: 'genre',
      songs: [],
      selectedSong: 0,
      loadingSongs: true,
      error: null,
      audio: new Audio(),
      isPlaying: false
    })
  });
})
