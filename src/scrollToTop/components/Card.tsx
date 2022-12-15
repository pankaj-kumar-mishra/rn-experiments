import React, {FC} from 'react';
import {StyleSheet, View, Text, ViewStyle} from 'react-native';

interface Props {
  text: string;
  cardStyle?: ViewStyle;
}

const Card: FC<Props> = ({text, cardStyle}): JSX.Element => {
  return (
    <View style={[styles.container, cardStyle]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1aa',
    width: '49%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Card;
