import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  tileWrapper: {
    backgroundColor: "rgba(206,222,189,0.5)",
    borderRadius: 10,
    marginBottom: 20,
  },
  wrapper: {
    margin: 10,
  },
  image: {
    aspectRatio: 2,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontFamily: "semibold",
    fontSize: 20,
  },
  desc: {
    fontFamily: "regular",
    fontSize: 15,
  },
  priceWrapper: {
    marginVertical: 15,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: COLORS.lightWhite,
    width: "auto",
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },
  priceText: {
    fontFamily: "bold",
    fontSize: 14,
  },
});
export default styles;
