const axios = require('axios');

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

const searchRequest = () => ({ type: SEARCH_REQUEST });
const searchSuccess = results => ({ type: SEARCH_SUCCESS, results });
const searchError = error => ({ type: SEARCH_ERROR, error });

export const searchSongs = term => (dispatch) => {
  dispatch(searchRequest());
  return axios.get(`https://itunes.apple.com/search?term=${term}`) //&media=music&entity=song')
    .then(({ data }) => {
      const { results } = data;
      dispatch(searchSuccess(results));
    })
    .catch(error => {
      dispatch(searchError(error.message));
    })
};
