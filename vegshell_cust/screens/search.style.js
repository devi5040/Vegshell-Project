import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
    marginHorizontal: SIZES.medium,
    borderColor: COLORS.tertiary,
    borderWidth: 1.5,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.secondary,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
  },
  searchBtn: {
    width: 50,
    backgroundColor: COLORS.offwhite,
    height: "100%",
    borderRadius: SIZES.medium,
    alignItems: "center",
    justifyContent: "center",
  },
  searchImage: {
    resizeMode: "contain",
    width: SIZES.width - 50,
    height: SIZES.height - 200,
    opacity: 0.9,
  },
});

export default styles;
