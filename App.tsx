/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

// import {PhotoView} from './src/photos-with-swatches';
// import {ShowFlag} from './src/show-flag';
// import {CustomTable, RNtcTable} from './src/tables';
import {CardList} from './src/cardlist-tutorial';
// import {
//   ScrollToTopView,
//   ScrollToTopList,
//   ShowHideOnScroll,
//   ScrollToTopView2,
//   ScrollToTopList2,
// } from './src/scrollToTop';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {/* <CustomTable />
      <RNtcTable /> */}
        {/* <ShowFlag /> */}
        {/* <PhotoView /> */}
        <CardList />
        {/* <ScrollToTopView /> */}
        {/* <ScrollToTopList /> */}
        {/* <ShowHideOnScroll /> */}
        {/* <ScrollToTopView2 /> */}
        {/* <ScrollToTopList2 /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
