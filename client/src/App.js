import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
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
import { setContext } from '@apollo/client/link/context';
const httplink = createHttpLink({uri:'/graphql'})
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  link: authLink.concat(httplink),
  cache: new InMemoryCache(),
  uri:'/graphql'
});
function App() {
  const loggedIn = AuthService.loggedIn()
  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          {loggedIn && <Route exact path="/profile" element={<Profile/>} />  }
          {loggedIn && <Route exact path="/summary" element={<Summary/>} />  }
          <Route element={<NoMatch/>} />
        </Routes>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}
export default App;