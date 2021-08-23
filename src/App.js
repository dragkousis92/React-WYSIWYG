import React from 'react';
import ModelProvider from './model-provider';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PageBuilder from 'components/page-builder';
import UISetup from './ui-setup';

const App = options => {
  return (
    <UISetup>
      <Router>
        <ModelProvider options={options}>
          <div className='mainContainer'>
            <Switch>
              <Route exact path='/'>
                <PageBuilder />
              </Route>
            </Switch>
          </div>
        </ModelProvider>
      </Router>
    </UISetup>
  );
};

export default App;

// export default App;
