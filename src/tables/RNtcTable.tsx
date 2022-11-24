import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
const tableData = [
  ['1', '2', '3', '4'],
  ['a', 'b', 'c', 'd'],
  ['1', '2', '3', '456\n789'],
  ['a', 'b', 'c', 'd'],
];

const RNtcTable: React.FC = () => {
  return (
    <>
      <Text style={styles.title}>RNtc Table</Text>
      <View style={styles.table}>
        <Table borderStyle={styles.border}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'goldenrod',
    marginVertical: 10,
  },
  table: {
    padding: 15,
  },
  border: {borderWidth: 2, borderColor: '#c8e1ff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {padding: 6},
});

export default RNtcTable;
