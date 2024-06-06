import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

export const HeadTitle = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={require("../assets/images/shippexBlue.png")}
        style={{ width: 100, height: 15 }}
      />
    </View>
  );
};

export const HeaderLeft = () => {
  return (
    <TouchableOpacity onPress={() => console.log("Avatar pressed")}>
      <Image
        source={require("../assets/images/headerAvatar.png")}
        style={{ width: 40, height: 40, marginLeft: 20 }}
      />
    </TouchableOpacity>
  );
};

export const HeaderRight = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log("Bell pressed")}
      className="bg-[#F4F2F8] p-2 mr-5 rounded-[50%] flex align-center"
    >
      <Image
        source={require("../assets/images/notificationBell.png")}
        style={{ width: 20, height: 22 }}
      />
    </TouchableOpacity>
  );
};
