import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  outer: {
    height: 75,
    backgroundColor: COLORS.lightWhite,
    margin: 10,
    borderRadius: 12,
  },
  inner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  text: {
    marginLeft: 10,
    fontFamily: "medium",
    color: COLORS.black,
    fontSize: 14,
  },
  desc: {
    marginLeft: 10,
    fontFamily: "regular",
    color: COLORS.gray,
    fontSize: 10,
    marginTop: 3,
    width: SIZES.width * 0.56,
    textAlign: "justify",
  },
  registration: {
    width: 90,
    height: 30,
    borderRadius: 40,
    borderColor: COLORS.black,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionContainer: {
    height: 140,
    backgroundColor: COLORS.lightWhite,
    margin: 10,
    borderRadius: 12,
  },
});

export default styles;
