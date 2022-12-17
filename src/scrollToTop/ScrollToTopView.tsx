import React, {FC, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
} from 'react-native';
import {Card, BottomBtn} from './components';
const {height} = Dimensions.get('screen');
interface Props {}

const data = Array.from({length: 50}, (_, index) => index + 1);

const ScrollToTopView: FC<Props> = (): JSX.Element => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const CONTENT_OFFSET_THRESHOLD = 0;

  const handleScrollToTop = () => {
    scrollViewRef.current?.scrollTo({y: 0});
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ScrollView (Scroll To Top)</Text>
      </View>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleOnScroll}
        scrollEventThrottle={16}
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <Card
              key={index.toString()}
              text={item.toString()}
              cardStyle={styles.card}
            />
          );
        })}
      </ScrollView>
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
  card: {
    width: '100%',
    marginBottom: 5,
  },
});

export default ScrollToTopView;
