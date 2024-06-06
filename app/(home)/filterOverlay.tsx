import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface FilterOverlayProps {
  onCancel: {
    current: {
      close: () => void;
    };
  };
}

const FilterOverlay: React.FC<FilterOverlayProps> = ({ onCancel }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    "Received",
    "Putaway",
    "Delivered",
    "Canceled",
    "Rejected",
    "Lost",
    "On Hold",
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prevSelectedFilters) =>
      prevSelectedFilters.includes(filter)
        ? prevSelectedFilters.filter((f) => f !== filter)
        : [...prevSelectedFilters, filter]
    );
  };

  return (
    <View className="flex items-left pt-3 w-[100%] h-[100%]">
      <View className="flex flex-row justify-between border-b-[1px] border-[#EAE7F2] px-5 pb-4">
        <TouchableOpacity onPress={() => onCancel.current.close()}>
          <Text className="text-base color-[#4561DB]">Cancel</Text>
        </TouchableOpacity>
        <Text className="font-medium text-lg">Filters</Text>
        <TouchableOpacity onPress={() => onCancel.current.close()}>
          <Text className="text-base color-[#4561DB]">Done</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View className="p-5">
          <Text className="color-[#58536E] mb-4">SHIPMENT STATUS</Text>
          <View className="flex flex-row flex-wrap gap-3">
            {filters.map((filter) => (
              <TouchableOpacity
                key={filter}
                className={`rounded-xl py-3 px-4 ${
                  selectedFilters.includes(filter)
                    ? "border-[#6E91EC] border-2 bg-[#F4F2F8]"
                    : "bg-[#F4F2F8]"
                }`}
                onPress={() => toggleFilter(filter)}
              >
                <Text
                  className={`${
                    selectedFilters.includes(filter)
                      ? "color-[#2F50C1]"
                      : "color-[#58536E]"
                  }`}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default FilterOverlay;
