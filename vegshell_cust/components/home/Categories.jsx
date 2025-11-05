import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./newProducts.style";
import CategoryCardView from "../product/CategoryCardView";
import { SIZES } from "../../constants";

const category = [
  {
    id: 1,
    cTitle: "Fruits",
    image: require("../../assets/images/Vegetables/v1.jpg"),
  },
  {
    id: 2,
    cTitle: "Vegetables",
    image: require("../../assets/images/Vegetables/v2.jpg"),
  },
  {
    id: 3,
    cTitle: "Vegshell Special",
    image: require("../../assets/images/Vegetables/v3.jpg"),
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CategoryCardView item={item} />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default Categories;
