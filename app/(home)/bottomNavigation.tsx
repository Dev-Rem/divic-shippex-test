import React from "react";
import { View, Pressable } from "react-native";
import NavigationIcon from "./navigationIcon";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

type TabBarProps = BottomTabBarProps;

export const TabBar: React.FC<TabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#ffff",
        borderTopColor: "#EAE7F2",
        borderWidth: 0.5,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View
            key={index}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#ffff",
            }}
          >
            <Pressable onPress={onPress} style={{ marginBottom: 30 }}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  padding: 10,
                }}
              >
                <NavigationIcon route={label} isFocused={isFocused} />
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default TabBar;
