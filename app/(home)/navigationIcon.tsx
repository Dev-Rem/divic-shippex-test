import React from "react";
import { View, Text } from "react-native";
import {
  ShipmentsIcon,
  ShipmentsIconColored,
  ScanIcon,
  ScanIconColored,
  WalletIconColored,
  WalletIcon,
  ProfileIcon,
  ProfileIconColored,
} from "@/components/BottomNavIcons";

const NavigationIcon = ({ route, isFocused }) => {
  // Map route names to corresponding icons
  const iconMap = {
    Shipments: isFocused ? ShipmentsIcon : ShipmentsIconColored,
    Scan: isFocused ? ScanIconColored : ScanIcon,
    Wallet: isFocused ? WalletIconColored : WalletIcon,
    Profile: isFocused ? ProfileIconColored : ProfileIcon,
  };

  const IconComponent = iconMap[route] || null; // Use a default icon if no mapping is found

  return (
    <View>
      {IconComponent && <IconComponent />}
      <Text
        style={{
          marginTop: 5,
          color: isFocused ? "#5B4CCC" : "#A7A3B3",
          fontSize: 12,
          textAlign: "center",
        }}
      >
        {route}
      </Text>
    </View>
  );
};

export default NavigationIcon;
