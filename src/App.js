import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import Navbar from './components/shared/navbar/Navbar';
import Missions from './pages/Missions';
import List from './pages/List';
import Rockets from './pages/Rockets';
import NoMatch from './pages/NoMatch';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <div className="main">
          <Switch>
            <Route path="/missions">
              <Missions />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route exact path="/">
              <Rockets />
            </Route>
            // <Route path="*">
             // <NoMatch />
            // </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
