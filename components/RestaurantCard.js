import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation;

  return (
    <View>
      <Text>RestaurantCard</Text>
    </View>
  );
};

export default RestaurantCard;
