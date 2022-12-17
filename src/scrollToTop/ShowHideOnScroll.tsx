import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Animated, {
  Easing,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Card} from './components';

interface Props {}

const data = Array.from({length: 50}, (_, index) => index + 1);

const ShowHideOnScroll: FC<Props> = (): JSX.Element => {
  const translateY = useSharedValue(0);
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);

  const actionBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value, {
            duration: 500,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });

  const handleOnScroll = useAnimatedScrollHandler({
    onScroll: event => {
      if (
        lastContentOffset.value > event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 0;
        console.log('scrolling up');
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 100;
        console.log('scrolling down');
      }
      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: () => {
      isScrolling.value = true;
    },
    onEndDrag: () => {
      isScrolling.value = false;
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Show Hide on Scroll (Up/Down)</Text>
      </View>
      <Animated.ScrollView
        // ref={scrollViewRef}
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
      </Animated.ScrollView>
      <Animated.View style={[styles.action, actionBarStyle]}>
        <Text style={styles.actionItem}>Comment</Text>
        <Text style={styles.actionItem}>Like</Text>
        <Text style={styles.actionItem}>Dislike</Text>
      </Animated.View>
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
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  card: {
    width: '100%',
    marginBottom: 5,
  },
  action: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 25,
    padding: 15,
    position: 'absolute',
    bottom: 5,
    backgroundColor: '#000',
    width: '50%',
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  actionItem: {
    color: '#fff',
  },
});

export default ShowHideOnScroll;
