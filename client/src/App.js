import React, {useState} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ActiveTab from './components/ActiveTab.js'
import Navbar from './components/Navbars/Navbar';
import MainFriends from './components/friendsTab/mainFriends';
import Dashboard from './components/dashboardTab/Dashboard'
import MainEvents from './components/eventsTab/mainEvents';
import MainGroups from './components/groupsTab/mainGroups';
import GroupList from './components/groupsTab/groupList';
import Footer from './components/Footer';
import Login from './components/landingPage/loginPage';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

/* App.js
    Parent component of app body and navbar (everything).
    Has a unique state for each "tab" in the application.
*/
function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Routes>
        <Route path="/friends" element={<MainFriends />}/>
        <Route path="/groups" element={<MainGroups />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/events" element={<MainEvents />}/>
      </Routes>
    </ApolloProvider>
  );
}

export default App;
