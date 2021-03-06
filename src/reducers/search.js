import { orderBy } from 'lodash';

import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SEARCH_INPUT,
  CHANGE_ORDERING,
  CHANGE_SELECTED_SONG,
  CHANGE_PLAYING
} from '../actions/search';

const initialState = {
  searchTerm: '',
  ordering: 'genre',
  songs: [],
  selectedSong: 0,
  loadingSongs: false,
  error: null,
  audio: new Audio(),
  isPlaying: false
};

const orderSongs = (ordering, songs) => {
  if (ordering === 'genre') {
    return orderBy(songs, ['primaryGenreName'], ['asc'])
  } else if (ordering === 'year') {
    return orderBy(songs, ['releaseDate'], ['desc'])
  }
  return orderBy(songs, ['trackPrice'], ['asc'])
};

export default (state = initialState, action) => {
  let songs = [];
  switch (action.type) {
    case SEARCH_REQUEST:
      return { ...state, loadingSongs: true };
    case SEARCH_SUCCESS:
      songs = orderSongs(state.ordering, action.songs);
      return { ...state, songs, loadingSongs: false };
    case SEARCH_ERROR:
      return { ...state, error: action.error, loadingSongs: false };
    case SEARCH_INPUT:
      return { ...state, searchTerm: action.searchTerm };
    case CHANGE_ORDERING:
      songs = orderSongs(action.ordering, state.songs);
      return { ...state, ordering: action.ordering, songs };
    case CHANGE_SELECTED_SONG:
      return { ...state, selectedSong: action.selectedSong };
    case CHANGE_PLAYING: {
      return { ...state, isPlaying: action.isPlaying };
    }
    default:
      return state;
  }
};
