import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SEARCH_INPUT
} from '../actions/search';

const initialState = {
  searchTerm: '',
  songs: [],
  selectedSong: 0,
  loadingSongs: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return { ...state, loadingSongs: true };
    case SEARCH_SUCCESS:
      return { ...state, songs: action.songs, loadingSongs: false };
    case SEARCH_ERROR:
      return { ...state, error: action.error, loadingSongs: false };
    case SEARCH_INPUT:
      return { ...state, searchTerm: action.searchTerm }
    default:
      return state;
  }
};
