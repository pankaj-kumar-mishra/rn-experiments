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

const data = Array.from({length: 50}, (_, index) => index + 1);

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
