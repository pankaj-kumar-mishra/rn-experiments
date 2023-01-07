import React, {FC} from 'react';
import {StyleSheet, View, Text, FlatList, ListRenderItem} from 'react-native';
import {Card, TutorialCard, TutorialModal} from './components';

interface Props {}

export type DataType = {
  text: string;
};

const data: DataType[] = [
  {text: 'One'},
  {text: 'Two'},
  {text: 'Three'},
  {text: 'Four'},
  {text: 'Five'},
  {text: 'Six'},
  {text: 'Seven'},
  {text: 'Eight'},
  {text: 'Nine'},
  {text: 'Ten'},
];

const CardList: FC<Props> = (): JSX.Element => {
  const renderItem: ListRenderItem<DataType> = ({item, index}) => {
    if (index < 6) {
      return (
        <TutorialModal
          isVisible={index === 3}
          renderContent={tutorialProps => (
            <TutorialCard {...tutorialProps} itemIndex={index} />
          )}>
          <Card item={item} />
        </TutorialModal>
      );
    }
    return <Card item={item} />;
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>CardList With Tutorial</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    backgroundColor: 'goldenrod',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    zIndex: -1,
  },
  headerText: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default CardList;
