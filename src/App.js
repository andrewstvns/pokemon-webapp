import React, { Suspense } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from 'graphql/client';
import AppRoutes from 'config/routes';
import { PokemonContextProvider } from 'context/PokemonContext';
import { PokemonImageContextProvider } from 'context/PokemonImageContext';
import { Header, Loader } from 'components';

const App = () => {
  console.log('client', client)
  return (
    <PokemonContextProvider>
      <PokemonImageContextProvider>
        <ApolloProvider client={client}>
          <Router>
            <Header />
            <Suspense fallback={<div><Loader /></div>}>
              <Routes>
                {AppRoutes.map((route) => (
                  <Route key={route.id} {...route} />
                ))}
              </Routes>
            </Suspense>
          </Router>
        </ApolloProvider>
      </PokemonImageContextProvider>
    </PokemonContextProvider>
  )
};

export default App;