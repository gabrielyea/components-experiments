import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import Navbar from './components/shared/navbar/Navbar';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="main">
          <Switch>
            <Route path="/missions">
              <Missions />
            </Route>
            <Route exact path="/">
              <Rockets />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
