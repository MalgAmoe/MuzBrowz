const axios = require('axios');

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

const searchRequest = () => ({ type: SEARCH_REQUEST });
const searchSuccess = songs => ({ type: SEARCH_SUCCESS, songs });
const searchError = error => ({ type: SEARCH_ERROR, error });

export const searchSongs = term => (dispatch) => {
  dispatch(searchRequest());
  return axios.get(`https://itunes.apple.com/search?term=${term}`)
    .then(({ data }) => {
      const { results } = data;
      const songs = results.filter(result => result.kind === 'song');
      dispatch(searchSuccess(songs));
    })
    .catch(error => {
      dispatch(searchError(error.message));
    })
};

export const SEARCH_INPUT = 'SEARCH_INPUT';

export const searchInput = searchTerm => (dispatch) => {
  dispatch({ type: SEARCH_INPUT, searchTerm })
}

export const CHANGE_ORDERING = 'CHANGE_ORDERING';

export const changeOrdering = ordering => (dispatch) => {
  dispatch({ type: CHANGE_ORDERING, ordering })
}
