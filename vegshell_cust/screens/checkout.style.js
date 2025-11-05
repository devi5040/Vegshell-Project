import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 30,
    marginHorizontal: 10,
  },
  company: {
    fontFamily: "bold",
    fontSize: 24,
    color: COLORS.secondary,
  },
  checkout: {
    fontFamily: "semibold",
    fontSize: 16,
    color: COLORS.secondary,
  },
  topContainer: {
    height: 80,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 10,
    justifyContent: "center",
  },
  textName: {
    fontFamily: "medium",
    fontSize: 18,
    marginBottom: 2,
    marginHorizontal: 10,
  },
  textEmail: {
    fontFamily: "regular",
    fontSize: 16,
    marginHorizontal: 10,
  },
  mainContainer: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: 10,
    padding: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  totalText: {
    fontFamily: "semibold",
    fontSize: 18,
  },
  mainText: {
    fontFamily: "semibold",
    fontSize: 22,
    color: COLORS.secondary,
  },
  btn: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: "center",
  },
  btnText: {
    fontFamily: "semibold",
    color: COLORS.white,
    fontSize: 18,
  },
});

export default styles;
