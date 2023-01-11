import React, {
  FC,
  useState,
  useRef,
  PropsWithChildren,
  ReactElement,
} from 'react';
import {StyleSheet, Modal, View, Pressable} from 'react-native';

type RenderContentType = {
  children: ReactElement;
  position: {top: number; left: number; width: number; height: number};
};

interface Props {
  children: ReactElement;
  renderContent: (props: RenderContentType) => ReactElement;
  isVisible: boolean;
}

const TutorialModal2: FC<PropsWithChildren<Props>> = ({
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
      <Modal
        animationType="fade"
        onLayout={handleOnLayout}
        visible={visible}
        transparent>
        {/* PK "Pressable" added to handle backdrop inside container */}
        <Pressable
          onPress={handleModalClose}
          style={styles.absoluteContainer}
        />
        {position && renderContent?.({children, position})}
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  absoluteContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default TutorialModal2;
