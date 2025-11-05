import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: "2.5%",
    paddingHorizontal: "5%",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    height: "100%",
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.large,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: SIZES.width - 44,
    top: 20,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.large,
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: "semibold",
    fontSize: SIZES.large,
  },
  ratingRow: {
    paddingBottom: SIZES.large,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: SIZES.width - 10,
    top: 5,
  },
  rating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: "medium",
    paddingHorizontal: SIZES.small,
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  description: {
    fontFamily: "medium",
    fontSize: SIZES.large - 2,
  },
  descText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
  cartContainer: {
    marginHorizontal: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginTop: 20,
  },
  buyBtn: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    height: 50,
    borderRadius: 10,
  },
  buyBtnText: {
    fontFamily: "medium",
    fontSize: 20,
    color: COLORS.lightWhite,
  },
  cartBtn: {
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
  },
});

export default styles;
