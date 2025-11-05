import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./productCardView.style";

const CategoryCardView = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.cTitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCardView;
