import React, {FC, useLayoutEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

interface Props {
  onPress: () => void;
  show: boolean;
}

const BottomBtn: FC<Props> = ({onPress, show}): JSX.Element => {
  let scale = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(scale.value, {
            duration: 300,
            easing: Easing.circle,
          }),
        },
      ],
    };
  });

  useLayoutEffect(() => {
    scale.value = show ? 1 : 0;
  }, [scale, show]);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Text style={styles.text}>Top</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default BottomBtn;
