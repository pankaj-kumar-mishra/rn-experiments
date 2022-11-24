import React from 'react';
// import React, {type PropsWithChildren} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

// const CustomTable: React.FC<PropsWithChildren<{title: 'Pankaj'}>> = ({
//   children,
//   title,
// }) => {
//   return (
//     <View>
//       <Text>Custom Table {title}</Text>
//     </View>
//   );
// };

type BenefitType = {
  id: number;
  benefit: string;
  member: boolean;
  plus: boolean;
};

const data = [
  {
    id: 1,
    benefit: 'Welcome offer: 10% off your first purchase',
    member: false,
    plus: true,
  },
  {
    id: 2,
    benefit: 'Points on every purchase: AED 1 = 1 point',
    member: false,
    plus: true,
  },
  {id: 3, benefit: 'Exclusive offers & discounts', member: false, plus: true},
  {id: 4, benefit: 'Flexible payment options', member: false, plus: true},
  {id: 5, benefit: 'A birthday treat', member: false, plus: true},
  {id: 6, benefit: 'Invite to shopping events', member: false, plus: true},
  {id: 7, benefit: 'Digital receipts', member: false, plus: true},
  {id: 8, benefit: 'Free shipping over AED 25', member: false, plus: true},
  {id: 9, benefit: 'Unique experiences', member: false, plus: true},
  {id: 10, benefit: 'Surprise offers', member: false, plus: true},
  {
    id: 11,
    benefit: 'Special access to limited collections',
    member: false,
    plus: true,
  },
];

const TableHead: React.FC = () => {
  return (
    <View style={styles.row}>
      <View style={styles.firstCol}>
        <Text style={styles.tableHeadTitle}>Benefit</Text>
      </View>
      <View style={styles.secondCol}>
        <View style={styles.cellWrapper}>
          <Text style={styles.tableHeadTitle}>Member</Text>
          <Text style={styles.tableHeadSubtitle}>0-499p</Text>
        </View>
      </View>
      <View style={styles.thirdCol}>
        <View style={styles.cellWrapper}>
          <Text style={styles.tableHeadTitle}>Plus</Text>
          <Text style={styles.tableHeadSubtitle}>500p</Text>
        </View>
      </View>
    </View>
  );
};

const RenderBody: React.FC<{item: BenefitType}> = ({item}) => {
  return (
    <View style={[styles.row, styles.bodyRow]}>
      <View style={styles.firstCol}>
        <Text style={styles.renderBodyTitle}>{item.benefit}</Text>
      </View>
      <View style={styles.secondCol}>
        <View style={styles.cellWrapper}>
          <View style={[styles.dot, item.member && styles.activeDot]} />
        </View>
      </View>
      <View style={styles.thirdCol}>
        <View style={styles.cellWrapper}>
          <View style={[styles.dot, item.plus && styles.activeDot]} />
        </View>
      </View>
    </View>
  );
};

const TableBody: React.FC = () => {
  return (
    <FlatList
      data={data as BenefitType[]}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <RenderBody item={item} />}
    />
  );
};

const CustomTable: React.FC = () => {
  return (
    <>
      <Text style={styles.title}>Custom Table</Text>
      <View style={styles.table}>
        <TableHead />
        <TableBody />
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstCol: {
    flex: 6,
  },
  secondCol: {
    flex: 1.5,
  },
  thirdCol: {
    flex: 1,
  },
  tableHeadTitle: {
    fontWeight: '600',
    fontSize: 15,
    color: '#333',
  },
  tableHeadSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  cellWrapper: {
    alignItems: 'center',
  },
  renderBodyTitle: {
    fontWeight: '500',
    fontSize: 13,
    color: '#333',
  },
  bodyRow: {
    height: 35,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'grey',
  },
  activeDot: {
    backgroundColor: 'red',
  },
});

export default CustomTable;
