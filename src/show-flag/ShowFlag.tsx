import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

const countries = ['AE', 'BH', 'SA', 'KW', 'OM', 'QA'];

const ShowFlag: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>Render Country Flags</Text>
      <View style={styles.alignCountryList}>
        {countries.map(item => (
          <Text key={item} style={[styles.text, styles.spacing]}>
            Country Code: {item}. Flag Emoji: {getFlagEmoji(item)}{' '}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default ShowFlag;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'goldenrod',
    marginVertical: 10,
  },
  alignCountryList: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  spacing: {
    marginTop: 10,
  },
});
