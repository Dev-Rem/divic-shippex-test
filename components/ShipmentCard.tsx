import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Checkbox from "./Checkbox";
import Icon from "react-native-vector-icons/FontAwesome";

type ShipmentStatus =
  | "error"
  | "received"
  | "delivered"
  | "cancelled"
  | "returned";
interface ShipmentCardProps {
  markAll: boolean;
}
const statusColors: Record<ShipmentStatus, string[]> = {
  received: ["bg-[#D9E6FD]", "color-[#2F50C1]"],
  error: ["bg-[#FEE3D4]", "color-[#D12030]"],
  delivered: ["bg-[#E3FAD6]", "color-[#208D28]"],
  cancelled: ["bg-[#F4F2F8]", "color-[#58536E]"],
  returned: ["bg-[#FFF3D5]", "color-[#DB7E21]"],
};

const ShipmentCard: React.FC<ShipmentCardProps> = ({ markAll }) => {
  const [expand, setExpand] = useState(false);
  const [checked, setChecked] = useState(markAll);
  const [shipmentStatus, setShipmentStatus] =
    useState<ShipmentStatus>("delivered");
  const handleCheck = () => {
    setChecked(!checked);
  };
  useEffect(() => {
    // Update the checked state when markAll prop changes
    setChecked(markAll);
  }, [markAll]);
  return (
    <TouchableWithoutFeedback>
      <View
        className={`flex flex-col w-[100%] my-1  divide-y-4 divide-white ${
          checked ? "border-2 border-[#] rounded-xl border-[#6E91EC]" : ""
        }`}
      >
        <View
          className={`flex flex-row bg-[#F4F2F8] h-[90px] rounded-t-xl ${
            !expand ? "rounded-b-xl" : ""
          } px-3 items-center justify-between`}
        >
          <Checkbox onChange={handleCheck} checked={checked} />
          <Image
            source={require("../assets/images/shipmentBox.png")}
            className="w-10 h-10"
          />
          <View className="flex flex-col">
            <Text className="text-sm font-light">AWB</Text>
            <Text className="font-bold text-[16px]">41785691423</Text>
            <Text className="color-[#757281]">
              Cairo <Icon name="arrow-right" size={10} color="#2F50C1" />{" "}
              Alexanria
            </Text>
          </View>
          <View
            className={`border-[1.5px] border-white ${statusColors[shipmentStatus][0]} p-2 h-8 rounded-lg`}
          >
            <Text
              className={`${statusColors[shipmentStatus][1]} font-semibold text-[12px]`}
            >
              {shipmentStatus.toUpperCase()}
            </Text>
          </View>

          <TouchableOpacity onPress={() => setExpand(!expand)}>
            <View
              className={`rounded-[50%] ${
                !expand
                  ? "bg-white"
                  : "bg-[#6E91EC] border-[1.5px] border-[#a3b6e2]"
              } w-7 h-7 items-center justify-center`}
            >
              <Icon
                name="expand"
                size={15}
                color={!expand ? "#2F50C1" : "#fff"}
              />
            </View>
          </TouchableOpacity>
        </View>
        {expand ? (
          <View className="flex flex-col h-40 bg-gray-50 rounded-b-xl bg-blue justify-between p-3">
            <View className="flex flex-row justify-between">
              <View className="flex flex-col">
                <Text className="color-[#2F50C1]">Origin</Text>
                <Text className="font-normal text-[20px]">Cairo</Text>
                <Text className="color-[#58536E]">Dokki, 22 Nile St.</Text>
              </View>
              <Image
                source={require("../assets/images/arrowRight.png")}
                className="w-7 h-6 mr-2 mt-3"
              />
              <View className="flex flex-col">
                <Text className="color-[#2F50C1]">Destination</Text>
                <Text className="font-normal text-[20px]">Alexandria</Text>
                <Text className="color-[#58536E]">Smoha, 22 max St.</Text>
              </View>
            </View>
            <View className="flex justify-end flex-row gap-4">
              <TouchableOpacity className="bg-[#6E91EC] px-4 py-3 rounded-xl flex-row items-center">
                <Image
                  source={require("../assets/images/callIcon.png")}
                  className="w-6 h-6 mr-2"
                />
                <Text className="color-white text-lg">Call</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#25D366] px-5 py-3 rounded-xl flex-row items-center">
                <Image
                  source={require("../assets/images/whatsAppLogo.png")}
                  className="w-5 h-5 mr-2"
                />
                <Text className="color-white text-lg">WhatsApp</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <></>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ShipmentCard;
