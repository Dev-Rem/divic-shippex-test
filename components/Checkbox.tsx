import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <TouchableOpacity onPress={() => onChange()} style={styles.container}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Icon name="check" size={12} color="#2F50C1" />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 19,
    height: 19,
    borderWidth: 1.5,
    borderColor: "#D0D5DD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  checked: {
    backgroundColor: "#D9E6FD",
    borderColor: "#2F50C1",
  },
});

export default Checkbox;
