import React, {FC} from 'react';
import {StyleSheet, View, Text, StyleProp, ViewStyle} from 'react-native';

interface Props {
  text: string;
  itemIndex: number;
  positionStyle?: StyleProp<ViewStyle>;
}

const TutorialInfo: FC<Props> = ({
  text,
  itemIndex,
  positionStyle,
}): JSX.Element => {
  const isEvenIndex = itemIndex % 2 === 0;
  const flexDirection = isEvenIndex ? 'row-reverse' : 'row';

  return (
    <View style={[styles.position, positionStyle]}>
      <View style={[styles.view, {flexDirection}]}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.dashLine} />
        <View style={styles.circle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    width: '44%',
  },
  view: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 14,
    marginHorizontal: 5,
  },
  dashLine: {
    // borderRadius: 1,
    // height: 0,
    borderWidth: 1.5,
    borderStyle: 'dotted',
    borderColor: '#fff',
    flexGrow: 1,
  },
  circle: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
});

export default TutorialInfo;
