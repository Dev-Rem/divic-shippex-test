import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';


interface BottomOverlayProps {
  visible: boolean;
  onCancel: () => void;
  children: React.ReactNode;
}

const BottomOverlay: React.FC<BottomOverlayProps> = ({ visible, onCancel, children }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onCancel}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}><View style={styles.overlay}>
        
              <View style={styles.content}>
                  <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
          {children}
        </View>
      </View></TouchableWithoutFeedback>
      
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cancelButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  cancelButtonText: {
    color: '#2F50C1',
    fontSize: 18,
  },
  content: {
    width: '100%',
      padding: 20,
    height:"90%",
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});

export default BottomOverlay;