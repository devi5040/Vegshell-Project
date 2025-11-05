import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  cartItem: {
    marginVertical: 12,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    zIndex: 999,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    margin: 5,
    borderRadius: SIZES.small,
  },
  details: {
    flex: 1,
    paddingHorizontal: "10%",
    paddingVertical: 25,
    justifyContent: "space-between",
  },
  name: {
    fontFamily: "semibold",
    fontSize: 16,
    color: COLORS.gray,
  },
  quantity: {
    fontFamily: "regular",
    fontSize: 16,
    color: COLORS.gray,
  },
  price: {
    fontFamily: "semibold",
    fontSize: 14,
    backgroundColor: COLORS.tertiary,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  rightEnd: {
    flex: 1,
    alignItems: "flex-end",
    marginHorizontal: 12,
    marginVertical: 10,
    justifyContent: "space-between",
  },
});

export default styles;
