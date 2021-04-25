import React from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import NavBar from 'components/organisms/NavBar';
import Home from 'pages/Home';
import Profile from 'pages/Profile';

const Layout: React.FC = () => {
  console.log('layout');
  const history = useHistory();
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </div>
    </div>
  );
};

export default Layout;
