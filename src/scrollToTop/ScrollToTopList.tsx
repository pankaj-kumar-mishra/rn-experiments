import React, {FC, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItem,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
} from 'react-native';
import {Card, BottomBtn} from './components';
const {height} = Dimensions.get('screen');

interface Props {}

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

const ScrollToTopList: FC<Props> = (): JSX.Element => {
  const flatListRef = useRef<FlatList>(null);
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const CONTENT_OFFSET_THRESHOLD = 0;

  const handleScrollToTop = () => {
    flatListRef.current?.scrollToOffset({offset: 0});
  };

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    // to avoid extra rerender
    if (offsetY > height) {
      return;
    }
    setContentVerticalOffset(offsetY);
  };

  // console.log('Height', height);
  // console.log('Vertical Offset', contentVerticalOffset);

  const renderItem: ListRenderItem<number> = ({item}) => (
    <Card text={item.toString()} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FlatList (Scroll To Top)</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          ref={flatListRef}
          onScroll={handleOnScroll}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => console.log('Clicked')}
        style={styles.footer}>
        <Text style={styles.footerText}>Bottom Tab</Text>
      </TouchableOpacity>
      <BottomBtn
        onPress={handleScrollToTop}
        show={contentVerticalOffset > CONTENT_OFFSET_THRESHOLD}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 40,
    backgroundColor: 'goldenrod',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
  },
  footer: {
    height: 50,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: 6,
  },
});

export default ScrollToTopList;
