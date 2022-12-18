import React, {FC, useRef, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Card} from './components';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface Props {}

const data = Array.from({length: 50}, (_, index) => index + 1);

const ScrollToTopView2: FC<Props> = (): JSX.Element => {
  const scrollViewRef = useRef<Animated.ScrollView>(null);
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
    scrollViewRef.current?.scrollTo({y: 0, animated: true});
  }, []);

  const handleOnScroll = useAnimatedScrollHandler({
    onScroll(event) {
      contentYoffset.value =
        event.contentOffset.y >= event.layoutMeasurement.height ? 1 : 0;
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ScrollView (Scroll To Top 2)</Text>
      </View>
      <Animated.ScrollView
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
      </Animated.ScrollView>
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
  card: {
    width: '100%',
    marginBottom: 5,
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

export default ScrollToTopView2;
