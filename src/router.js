import React from 'react';
import { Router, Route,Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CounterPage from "./routes/CounterPage"

function RouterConfig({ history }) {
  console.log('history',history)
  return (
    <Router history={history}>
      <div>
        <Route children={()=>{
            return (
              <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/count">count</Link></li>
              </ul>
            )
          }}/>
        <Route path="/" exact component={IndexPage} />
        <Route path="/count" exact component={CounterPage} />

      </div>
      {/* <Switch> */}    
      {/* </Switch> */}
    </Router>
  );
}

export default RouterConfig;
