import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from '../actions/search';

const initialState = {
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
      return { ...state, songs: action.results, loadingSongs: false };
    case SEARCH_ERROR:
      return { ...state, error: action.error, loadingSongs: false };
    default:
      return state;
  }
};
