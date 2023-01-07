import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {DataType} from '../CardList';

const {width} = Dimensions.get('window');

export interface CardProps {
  item: DataType;
  containerCard?: StyleProp<ViewStyle>;
}

const Card: FC<CardProps> = ({item, containerCard}): JSX.Element => {
  return (
    <View style={[styles.card, containerCard]}>
      <Text style={styles.headerText}>Header {item.text}</Text>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Body {item.text}</Text>
      </View>
      <Text style={styles.footerText}>Footer {item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 15, // 15 = 5(space between cards) + 10(paddingHorizontal)
    height: 200,
    borderRadius: 10,
    backgroundColor: '#0aa',
  },
  body: {
    flex: 1,
    backgroundColor: '#a08',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 5,
  },
  footerText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 5,
  },
  bodyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Card;
