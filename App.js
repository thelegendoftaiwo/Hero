/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
// import CovidMessage from './src/components/CovidMessage';
// import HomeMap from './src/components/HomeMap';
// import HomeSearch from './src/components/HomeSearch';
// import DestinationSearch from './src/screens/DestinationSearch';
// import SearchResults from './src/screens/SearchResults';
import HomeScreen from '../Hero/src/screens/HomeScreen';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      {/* <SearchResults /> */}
      {/* <DestinationSearch /> */}
      {/* <HomeMap />
      <CovidMessage />
      <HomeSearch /> */}
      <HomeScreen />
    </>
  );
};

export default App;
