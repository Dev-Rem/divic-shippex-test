import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Animated, StyleSheet, TextInputProps } from 'react-native';

interface FloatingPlaceholderInputProps extends TextInputProps {
  placeholder: string;
  isPassword?: boolean;
  name: string;
  onInputChange: (name: string, value: string) => void;
}

const FormInput: React.FC<FloatingPlaceholderInputProps> = ({
  placeholder,
  isPassword = false,
  name,
  onInputChange,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const animatedIsFocused = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChangeText = (text: string) => {
    setValue(text);
    onInputChange(name, text);
  };

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 2],
      outputRange: [18, -6],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 14],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#58536E'],
    }),
  };

  const inputStyle = {
    borderColor: isFocused ? '#2F50C1' : '#aaa',
    borderWidth: isFocused ? 1 : 0,
  };

  return (
    <View style={[styles.container, inputStyle]}>
      <Animated.Text style={[styles.label, labelStyle]}>
        {placeholder}
      </Animated.Text>
      <TextInput
        style={[styles.input]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        secureTextEntry={isPassword}
        value={value}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginVertical: 16,
    backgroundColor: "#F4F2F8",
    borderRadius: 10


  },
  label: {
    position: 'absolute',
    left: 10,
    color: '#aaa',
  },
  input: {
    width:"90%",
    height: 40,
    fontSize: 15,
    color: '#2F50C1',
    paddingLeft: 10,
  },
});

export default FormInput;
