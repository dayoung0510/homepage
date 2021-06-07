import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cover from 'pages/Cover';
import Layout from 'components/organisms/Layout';
import Home from 'pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Cover} />
        <Layout>
          <Route path="/home" exact component={Home} />
        </Layout>
      </Switch>
    </>
  );
};

export default App;
