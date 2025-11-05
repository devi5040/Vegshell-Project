import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CheckoutItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>{item.cartItem.productName}</Text>
      <Text style={styles.textPrice}>
        {item.cartItem.productPrice * item.quantity}
      </Text>
    </View>
  );
};

export default CheckoutItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textName: {
    fontFamily: "semibold",
    fontSize: 16,
  },
  textPrice: {
    fontFamily: "bold",
    fontSize: 14,
  },
});
