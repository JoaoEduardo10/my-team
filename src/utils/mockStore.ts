import configureStore from 'redux-mock-store';


const mockStore = configureStore([]);

const store = mockStore({
  team: {
    country: 'brasil',
    season: '2022',
    league: '47',
    team: 'São paulo'
  }
});

export { store };
