import React, {
  FC,
  useState,
  useEffect,
  PropsWithChildren,
  ReactElement,
} from 'react';
import {StyleSheet, Modal, View, Pressable, SafeAreaView} from 'react-native';

type RenderContentType = {
  children: ReactElement;
  position: {top: number; left: number; width: number; height: number};
};

interface Props {
  children: ReactElement;
  renderContent: (props: RenderContentType) => ReactElement;
}

const TutorialModal: FC<PropsWithChildren<Props>> = ({
  children,
  renderContent,
}): JSX.Element => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleModalClose = () => {
    setVisible(false);
  };

  const tempPosition = {
    top: 100,
    left: 100,
    width: 200,
    height: 2000,
  };

  return (
    <Modal animationType="fade" visible={visible} transparent>
      {/* <View collapsable={false}>{children}</View> */}
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.content}>
          {renderContent?.({children, position: tempPosition})}
        </View>
        <Pressable onPress={handleModalClose} style={styles.container} />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    // zIndex: 1,
    backgroundColor: 'red',
  },
});

export default TutorialModal;
