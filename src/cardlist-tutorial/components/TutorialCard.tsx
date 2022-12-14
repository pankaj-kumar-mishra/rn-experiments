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

const TutorialCard: FC<Props> = ({
  children,
  position,
  itemIndex,
}): JSX.Element => {
  const isEvenIndex = itemIndex % 2 === 0;
  const leftPosition = isEvenIndex
    ? position.width
    : position.left - position.width;

  const headerPositionStyle = {
    top: position.top + (isIOS ? 35 : -15),
    left: leftPosition,
  };
  const bodyPositionStyle = {
    top: position.top + position.height / (isIOS ? 1.7 : 2.7),
    left: leftPosition,
  };
  const footerPositionStyle = {
    top: position.top + position.height + (isIOS ? 5 : -45),
    left: leftPosition,
  };

  return (
    <>
      {cloneElement(children, {
        ...children.props,
        containerCard: [
          {
            ...styles.tutorialCard,
            top: position.top + (isIOS ? 25 : -22),
            left: position.left - 20,
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

export default TutorialCard;
