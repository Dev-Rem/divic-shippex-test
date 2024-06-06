import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
const SplashScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 20,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      // Navigate to the main screen after the animation is complete
      navigation.replace("(splash)/landingScreen");
    });
  }, [scaleAnim, navigation]);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale: scaleAnim }] }]}
    >
      <Svg width="146" height="144" viewBox="0 0 146 144" fill="none">
        <Path
          d="M145.231 0C145.231 13.2441 139.854 25.2413 131.161 33.9359C122.665 42.4283 110.97 47.7865 98.0422 47.9887H0.775635L48.9936 0H145.231Z"
          fill="#2F50C1"
        />
        <Path
          d="M145.374 95.6406L96.7835 144H2.9493V143.899L2.92065 143.882V143.714C2.92065 142.046 3.29304 130.385 10.2993 119.197C13.8731 113.502 19.0781 107.924 26.915 103.611C34.0931 99.6677 49.2295 95.9944 61.6917 96.0618L61.321 111.985L80.1374 94.0062L62.1501 75.1847L62.0928 77.7628L61.7777 91.2932C57.8516 91.1584 51.8092 91.2258 44.9327 92.5738L5.03701 52.8247H102.361L145.374 95.6406Z"
          fill="#2F50C1"
        />
      </Svg>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
