import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CartPage from './CartPage';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Other routes */}
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Router>
  );
};

export default App;
