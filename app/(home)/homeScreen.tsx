import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  Keyboard,
  FlatList,
  TouchableWithoutFeedback,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import CustomButton from "@/components/CustomButton";
import ShipmentCard from "@/components/ShipmentCard";
import Checkbox from "@/components/Checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RBSheet from "react-native-raw-bottom-sheet";
import FilterOverlay from "./filterOverlay";

const HomeScreen: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [checked, setChecked] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [shipmentData, setShipmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [markAll, setMarkAll] = useState(false);
  const [filters, setFilters] = useState(false);

  const refRBSheet = useRef();

  const handleInputChange = (name: string, value: string) => {
    setSearchQuery(value);
  };

  const removeFocus = () => {
    Keyboard.dismiss();
    setChecked(false);
  };

  const handleMarkAll = () => {
    setChecked(!checked);
    setMarkAll(!markAll);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem("userData");
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  // I did not get any data from the api provided so i tried simulate a request as much as possible
  const renderItem = ({ item }) => <ShipmentCard markAll={markAll} />;

  return (
    <TouchableWithoutFeedback onPress={removeFocus}>
      <View className="flex p-5 flex-col w-[100%]  bg-white">
        {/* welcome greeting */}
        <View>
          <Text className="color-[#757281] text-base">Hello,</Text>
          <Text className="font-bold text-2xl">{userData.full_name}</Text>
        </View>
        {/* Search input */}
        <View
          className={`px-4 pb-1 my-5 bg-[#F4F2F8] rounded-xl flex-row flex ${
            isFocused ? "border-[#2F50C1] border-[1px]" : "border-0"
          } `}
        >
          {isFocused ? (
            <Image
              source={require("../../assets/images/searchIconColored.png")}
              className="w-4 h-4 mr-2 mt-3.5"
            />
          ) : (
            <Image
              source={require("../../assets/images/searchIcon.png")}
              className="w-5 h-5 mr-2 mt-3"
            />
          )}
          <TextInput
            placeholder="Search"
            className="w-[90%] h-10 text-base color-[#2F50C1]"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={handleInputChange}
          />
          <TouchableOpacity onPress={() => {}} className="w-20 mr-10">
            <Image
              source={require("../../assets/images/clearSearchIcon.png")}
              className="w-5 h-5 mt-3"
            />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-between">
          <CustomButton
            title="Filters"
            style="w-[48%] bg-[#F4F2F8]"
            titleStyle="color-[#58536E]"
            onPress={() => refRBSheet.current.open()}
            iconName="filter"
          />
          <CustomButton
            title="Add Scan"
            style="w-[48%] bg-[#2F50C1]"
            titleStyle="color-white"
            onPress={() => {}}
            iconName="add-scan"
          />
        </View>

        <View className="flex flex-row justify-between mt-10 mb-1">
          <Text className="font-semibold text-xl">Shipments</Text>
          <View className="flex flex-row">
            <Checkbox checked={checked} onChange={handleMarkAll} />
            <Text className="color-[#2F50C1] text-base ml-2">Mark All</Text>
          </View>
        </View>
        <FlatList
          data={[...Array(7).keys()]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{ paddingBottom: 20 }}
          style={{ marginBottom: 335 }}
          showsVerticalScrollIndicator={false}
        />
        <RBSheet
          ref={refRBSheet}
          useNativeDriver={false}
          draggable={true}
          customStyles={{
            container: {
              borderRadius: 20,
              height: "40%",
              paddingBottom: 20,
            },
            wrapper: {
              // backgroundColor: "transparent",
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
          <FilterOverlay onCancel={refRBSheet} />
        </RBSheet>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
