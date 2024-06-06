import React, { useState, useRef } from "react";
import { View, StatusBar, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "@/components/CustomButton";
import FullScreenOverlay from "@/components/FullScreenOverlay";
import LoginOverlay from "./loginOverLay";
import RBSheet from "react-native-raw-bottom-sheet";

const LandingScreen: React.FC = () => {
  const navigation = useNavigation();
  const [overlayVisible, setOverlayVisible] = useState(false);
  const refRBSheet = useRef();

  const handleOpenOverlay = () => {
    setOverlayVisible(true);
  };

  const handleCancelOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <View className="flex items-center justify-between pt-10 bg-[#2F50C1] h-screen flex-col ">
      <StatusBar barStyle="light-content" />
      <View></View>
      <Image
        source={require("../../assets/images/image.png")}
        className="w-[60%] h-[5%]"
      />
      <CustomButton
        title="Login"
        style=" mb-10 w-[90%]  bg-white"
        titleStyle="color-[#2F50C1] font-bold text-lg"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        draggable={true}
        customStyles={{
          container: {
            borderRadius: 20,
            height: "93%",
            paddingHorizontal: 20,
            paddingBottom: 20,
          },
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#A7A3B3",
          },
        }}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <LoginOverlay onCancel={refRBSheet} />
      </RBSheet>
    </View>
  );
};

export default LandingScreen;
