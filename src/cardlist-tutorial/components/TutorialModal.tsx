import React, {
  FC,
  useState,
  PropsWithChildren,
  ReactElement,
  useRef,
} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import NativeModal from 'react-native-modal';

type RenderContentType = {
  children: ReactElement;
  position: {top: number; left: number; width: number; height: number};
};

interface Props {
  children: ReactElement;
  renderContent: (props: RenderContentType) => ReactElement;
  isVisible: boolean;
}

const TutorialModal: FC<PropsWithChildren<Props>> = ({
  children,
  renderContent,
  isVisible,
}): JSX.Element => {
  const elementRef = useRef<View>(null);

  const [visible, setVisible] = useState<boolean>(isVisible);
  const [position, setPosition] = useState<null | {
    top: number;
    left: number;
    width: number;
    height: number;
  }>(null);

  const handleOnLayout = () => {
    if (isVisible) {
      elementRef.current?.measureInWindow((x, y, width, height) => {
        const data = {
          top: y,
          left: x,
          width,
          height,
        };
        // console.log('>>>>position', data);
        setPosition(data);
      });
    }
  };

  const handleModalClose = () => {
    setVisible(false);
  };

  return (
    <>
      <View ref={elementRef} onLayout={handleOnLayout} collapsable={false}>
        {children}
      </View>
      <NativeModal
        backdropTransitionOutTiming={0}
        // onModalHide={onTutorialClose}
        // onModalShow={onModalShow}
        onBackdropPress={handleModalClose}
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={visible}>
        <View style={styles.container}>
          {/* PK "Pressable" added to handle backdrop inside container */}
          <Pressable
            onPress={handleModalClose}
            style={styles.absoluteContainer}
          />
          {position && renderContent?.({children, position})}
        </View>
      </NativeModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absoluteContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default TutorialModal;
