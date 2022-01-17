import React, {useState} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import ActiveTab from './components/ActiveTab.js'
import Navbar from './components/Navbars/Navbar';
import GroupList from './components/groupsTab/groupList';
import Footer from './components/Footer';

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
  //The appearance of the app's body and navbar depend on this state.
  //setTab is passed to the navbar so that the navbar can change this state.
  const [currentTab, setTab] = useState("Dashboard");

  return (
    <ApolloProvider client={client}>
      <div >
        <Navbar tabStateSetter = {setTab} currTab = {currentTab}/>
        <ActiveTab currTab = {currentTab}/>
      </div>
    </ApolloProvider>
  );
}

export default App;
