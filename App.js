import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers'; // make sure the path is correct
import Home from './components/Home';
import RatingPage from './components/RatingPage';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rate' component={RatingPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));