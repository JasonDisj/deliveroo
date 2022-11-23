import { View, Text, ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Ionicons name="arrow-forward-outline" color="#00CCBB" size={20} />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCard */}
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese"
          address="1 main st"
          shortDescription="Yummy"
          dishes={[]}
          longitude={10}
          latitude={0}
        />

        <RestaurantCard
          id={2}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese"
          address="1 main st"
          shortDescription="Yummy"
          dishes={[]}
          longitude={10}
          latitude={0}
        />

        <RestaurantCard
          id={3}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese"
          address="1 main st"
          shortDescription="Yummy"
          dishes={[]}
          longitude={10}
          latitude={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
