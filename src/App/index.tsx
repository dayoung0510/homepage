import React from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import Cover from 'pages/Cover';
import Layout from 'components/organisms/Layout';
import Home from 'pages/Home';

const App: React.FC = () => {
  console.log('App');
  const history = useHistory();

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
