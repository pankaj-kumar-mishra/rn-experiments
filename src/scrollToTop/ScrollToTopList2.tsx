import React, {FC, useRef, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Pressable,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Card} from './components';

interface Props {}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const data = Array.from({length: 50}, (_, index) => index + 1);

const ScrollToTopList2: FC<Props> = (): JSX.Element => {
  const flatListRef = useRef<FlatList>(null);
  const contentYoffset = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(contentYoffset.value, {
            duration: 250,
            easing: Easing.circle,
          }),
        },
      ],
    };
  });

  const handleScrollToTop = useCallback(() => {
    flatListRef.current?.scrollToOffset({offset: 0});
  }, []);

  const handleOnScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      contentYoffset.value =
        event.nativeEvent.contentOffset.y >=
        event.nativeEvent.layoutMeasurement.height
          ? 1
          : 0;
    },
    [contentYoffset],
  );

  const renderItem: ListRenderItem<number> = ({item}) => (
    <Card text={item.toString()} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FlatList (Scroll To Top) 2</Text>
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
      <AnimatedPressable
        onPress={handleScrollToTop}
        style={[styles.topBtn, animatedStyle]}>
        <Text style={styles.topText}>Top</Text>
      </AnimatedPressable>
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
  topBtn: {
    backgroundColor: 'goldenrod',
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  topText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ScrollToTopList2;
