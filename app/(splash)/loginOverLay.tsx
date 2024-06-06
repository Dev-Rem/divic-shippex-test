import React, { useState } from "react";
import { View, StatusBar, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "@/components/CustomButton";
import FormInput from "@/components/FormInput";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginOverlay: React.FC = ({ onCancel }) => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    email_username: "",
    password: "",
    // website: "",
  });
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://shippex-demo.bc.brandimic.com/api/method/login",
        {
          usr: formData.email_username,
          pwd: formData.password,
        }
      );

      if (response.data) {
        // Handle successful login
        await AsyncStorage.setItem("userData", JSON.stringify(response.data));
        setLoading(false);
        onCancel.current.close();
        navigation.replace("(home)/bottomNavigation");
        setErrorMessage("");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setLoading(false);
        setErrorMessage(error.response?.data?.message || "Login failed");
      } else {
        // Non-Axios error
        setLoading(false);
        setErrorMessage("An unexpected error occurred");
      }
    }
  };

  return (
    <View className="flex items-left pt-5 justify-between w-[100%] h-[100%] ">
      <StatusBar barStyle="light-content" />

      <View>
        <TouchableOpacity
          className="flex flex-row"
          onPress={() => onCancel.current.close()}
        >
          <Image
            source={require("../../assets/images/backIcon.png")}
            className="w-3 h-5 mr-2 mt-1.5"
          />
          <Text className="color-[#2F50C1] text-lg">Cancel</Text>
        </TouchableOpacity>
        <Text className=" text-3xl font-semibold mt-5">Login</Text>
        <Text className="color-[#757281] text-base">
          Please enter your First, Last name and your phone number in order to
          register
        </Text>
        <View className="m-3"></View>

        {/* <FormInput
          placeholder="URL"
          keyboardType="url"
          name="website"
          onInputChange={handleInputChange}
        /> */}

        <FormInput
          placeholder="Username/Email"
          keyboardType="email-address"
          name="email_username"
          onInputChange={handleInputChange}
        />
        <FormInput
          placeholder="Password"
          isPassword
          onInputChange={handleInputChange}
          name="password"
        />
        {errorMessage ? (
          <Text className="mt-5 color-red">{errorMessage}</Text>
        ) : null}
      </View>

      <View></View>

      <CustomButton
        title="Login"
        style={
          formData.email_username === "" || formData.password === ""
            ? // || formData.website === ""
              `w-[100%]  bg-[#EAE7F2] mb-10`
            : ` w-[100%]  bg-[#2F50C1] mb-10`
        }
        titleStyle={
          formData.email_username === "" || formData.password === ""
            ? // || formData.website === ""
              `color-[#A7A3B3] font-bold text-lg`
            : `color-white font-bold text-lg`
        }
        disable={
          formData.email_username === "" || formData.password === ""
            ? // || formData.website === ""
              true
            : false
        }
        loading={loading}
        onPress={handleLogin}
      />
    </View>
  );
};

export default LoginOverlay;
