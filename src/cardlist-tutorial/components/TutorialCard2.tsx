import React, {FC, cloneElement} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {CardProps} from './Card';
import TutorialInfo from './TutorialInfo';

const isIOS = Platform.OS === 'ios';

interface Props {
  children: React.ReactElement<CardProps>;
  position: {top: number; left: number; width: number; height: number};
  itemIndex: number;
}

const TutorialCard2: FC<Props> = ({
  children,
  position,
  itemIndex,
}): JSX.Element => {
  const isEvenIndex = itemIndex % 2 === 0;
  const leftPosition = isEvenIndex
    ? position.width + 15
    : position.left - position.width;

  const headerPositionStyle = {
    top: position.top + (isIOS ? 50 : 5),
    left: leftPosition,
  };
  const bodyPositionStyle = {
    top: position.top + position.height / (isIOS ? 1.4 : 2),
    left: leftPosition,
  };
  const footerPositionStyle = {
    top: position.top + position.height + (isIOS ? 25 : -25),
    left: leftPosition,
  };

  return (
    <>
      {cloneElement(children, {
        ...children.props,
        containerCard: [
          {
            ...styles.tutorialCard,
            top: position.top + (isIOS ? 45 : 0),
            left: position.left,
          },
        ],
      })}

      <TutorialInfo
        text="Card Header"
        itemIndex={itemIndex}
        positionStyle={headerPositionStyle}
      />
      <TutorialInfo
        text="Card Body"
        itemIndex={itemIndex}
        positionStyle={bodyPositionStyle}
      />
      <TutorialInfo
        text="Card Footer"
        itemIndex={itemIndex}
        positionStyle={footerPositionStyle}
      />
    </>
  );
};

const styles = StyleSheet.create({
  tutorialCard: {
    elevation: 3,
    shadowOffset: {width: 4, height: 4},
    shadowColor: '#fff',
    shadowRadius: 4,
    shadowOpacity: 0.3,
  },
});

export default TutorialCard2;
