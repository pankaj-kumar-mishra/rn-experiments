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
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

// import {PhotoView} from './src/photos-with-swatches';
// import {ShowFlag} from './src/show-flag';
// import {CustomTable, RNtcTable} from './src/tables';
// import {CardList} from './src/cardlist-tutorial';
// import {CardList2} from './src/cardlist2-tutorial';
import {
  ScrollToTopView,
  ScrollToTopList,
  ShowHideOnScroll,
} from './src/scrollToTop';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <CustomTable />
      <RNtcTable /> */}
      {/* <ShowFlag /> */}
      {/* <PhotoView /> */}
      {/* <CardList /> */}
      {/* <CardList2 /> */}
      {/* <ScrollToTopView /> */}
      {/* <ScrollToTopList /> */}
      <ShowHideOnScroll />
    </SafeAreaView>
  );
};

export default App;
