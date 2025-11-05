import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.offwhite,
    height: SIZES.height - 80,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 60,
    marginBottom: 40,
  },
  userDetails: {
    marginLeft: 10,
    marginTop: 3,
  },
  text: {
    marginLeft: 10,
    fontFamily: "medium",
    color: COLORS.black,
  },
  email: {
    marginLeft: 10,
    fontFamily: "regular",
    color: COLORS.gray,
  },
  sectionContainer: {
    height: 140,
    backgroundColor: COLORS.lightWhite,
    margin: 10,
    borderRadius: 12,
  },
});

export default styles;
