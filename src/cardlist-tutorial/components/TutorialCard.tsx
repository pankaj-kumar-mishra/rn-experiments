import React, {FC, cloneElement} from 'react';
import {StyleSheet} from 'react-native';
import {CardProps} from './Card';

interface Props {
  children: React.ReactElement<CardProps>;
  position: {top: number; left: number; width: number; height: number};
  itemIndex: number;
}

const TutorialCard: FC<Props> = ({
  children,
  position,
  // itemIndex,
}): JSX.Element => {
  return (
    <>
      {cloneElement(children, {
        ...children.props,
        containerCard: [
          {
            ...styles.tutorialCard,
            top: position.top - 20,
            left: position.left - 20,
          },
        ],
      })}
    </>
  );
};

const styles = StyleSheet.create({
  tutorialCard: {
    elevation: 5,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'goldenrod',
    shadowRadius: 2,
    shadowOpacity: 0.3,
  },
});

export default TutorialCard;
