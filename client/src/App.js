import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, useMutation } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Summary from './pages/summary';
import AuthService from './utils/auth';


const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: 'http://localhost:3001/graphql'
});

function App() {
  const loggedIn = AuthService.loggedIn()
  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {loggedIn && <Route exact path="/profile" component={Profile} />  }
          {loggedIn && <Route exact path="/summary" component={Summary} />  }
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
