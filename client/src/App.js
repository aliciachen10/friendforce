import React, {useEffect, useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';

// universal components
import Navbar from './components/Navbars/Navbar';
import Footer from './components/Footer';

// page components
import MainFriends from './components/friendsTab/mainFriends';
import Dashboard from './components/dashboardTab/Dashboard'
import MainEvents from './components/eventsTab/mainEvents';
import MainGroups from './components/groupsTab/mainGroups';
import Login from './components/loginPage/loginPage';

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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Routes>
        {!user && (
          <Route 
            path="/login" 
            element={<Login authenticate={() => setUser(true)} />} 
          />
        )}
        {!user && (
          <>
            <Route 
              path="/dashboard" 
              element={
                <Dashboard /> }
            />
            <Route 
              path="/friends" 
              element={
                <MainFriends /> }
            />
            <Route 
              path="/groups" 
              element={
                <MainGroups /> }
            />
            <Route 
              path="/events" 
              element={
                <MainEvents /> }
            />
          </>
        )}
        <Route path="*" element={<Navigate to={ user ? "/dashboard" : "/login" } />} />
      </Routes>
    </ApolloProvider>
  );
};

export default App;
