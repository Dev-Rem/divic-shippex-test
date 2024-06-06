import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
} from "react-native";

interface CustomButtonProps {
  title: string;
  titleStyle: string;
  style: string;
  iconName?: string;
  disable?: boolean;
  loading?: boolean;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  titleStyle,
  style,
  iconName,
  disable,
  loading,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className={`flex flex-row align-center justify-center p-3 rounded-lg  ${style}`}
      onPress={onPress}
      disabled={disable}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <View className="flex flex-row align-center">
          {iconName === "filter" ? (
            <Image
              source={require("../assets/images/filterIcon.png")}
              className="w-4 h-3 mr-2 mt-1"
            />
          ) : (
            <></>
          )}
          {iconName === "add-scan" ? (
            <Image
              source={require("../assets/images/scanIcon.png")}
              className="w-5 h-5 mr-2"
            />
          ) : (
            <></>
          )}
          <Text className={titleStyle}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
});

export default CustomButton;
