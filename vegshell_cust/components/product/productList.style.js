import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: SIZES.xxLarge,
    paddingHorizontal: "5%",
  },
  seperator: {
    height: 16,
  },
  topContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: "2.5%",
    paddingHorizontal: "1.5%",
  },
  title: {
    fontFamily: "semibold",
    fontSize: 20,
    color: COLORS.secondary,
  },
});

export default styles;
