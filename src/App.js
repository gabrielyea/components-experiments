/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import MissionContainer from './components/missions/missionContainer/MissionContainer';
import Loader from './components/loader/Loader';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Loader />
      </div>
    </Provider>
  );
}

export default App;
