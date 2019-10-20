import * as actions from './search';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action for searching a term', async () => {
    const store = mockStore();
    const searchTerm = 'AFX';
    const expectedAction = {
      type: actions.SEARCH_INPUT,
      searchTerm
    };
    await store.dispatch(actions.searchInput(searchTerm))
    const createdActions = store.getActions();
    expect(createdActions[0]).toEqual(expectedAction)
  });

  it('should create an action for ordering tracks', async() => {
    const store = mockStore();
    const ordering = 'genre';
    const expectedAction = {
      type: actions.CHANGE_ORDERING,
      ordering
    };
    await store.dispatch(actions.changeOrdering(ordering));
    const createdActions = store.getActions();
    expect(createdActions[0]).toEqual(expectedAction)
  });

  it('should create an action for selecting a song', async() => {
    const store = mockStore();
    const selectedSong = 7;
    const expectedAction = {
      type: actions.CHANGE_SELECTED_SONG,
      selectedSong
    };
    await store.dispatch(actions.changeSelectedSong(selectedSong));
    const createdActions = store.getActions();
    expect(createdActions[0]).toEqual(expectedAction)
  });

  it('should create an action for changing isPlaying', async() => {
    const store = mockStore();
    const isPlaying = true;
    const expectedAction = {
      type: actions.CHANGE_PLAYING,
      isPlaying
    };
    await store.dispatch(actions.changePlaying(isPlaying));
    const createdActions = store.getActions();
    expect(createdActions[0]).toEqual(expectedAction)
  })
});

describe('async actions', () => {
  beforeEach(() => {
    moxios.install()
  });

  afterEach(() => {
    moxios.uninstall()
  });

  it('should create actions for searching terms', async() => {
    const term = 'focker';
    const results = [
      { trackId: 699797085, artistName: 'Late of the Pier', trackName: 'Focker', kind: 'song' }
    ]

    moxios.stubRequest(`https://itunes.apple.com/search?term=${term}`, {
      status: 200,
      response: { results }
    })

    const store = mockStore();
    const expectedAction1 = {
      type: actions.SEARCH_REQUEST
    };
    const expectedAction2 = {
      type: actions.SEARCH_SUCCESS,
      songs: results
    }
    await store.dispatch(actions.searchSongs(term));
    const createdActions = store.getActions();
    expect(createdActions[0]).toEqual(expectedAction1)
    expect(createdActions[1]).toEqual(expectedAction2)
  });
})
