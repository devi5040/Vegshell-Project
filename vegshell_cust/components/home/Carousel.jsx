import { View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";
import styles from "./carousel.style";

const Carousel = () => {
  const slides = [
    require("../../assets/images/Carousel/v1.png"),
    require("../../assets/images/Carousel/v2.png"),
    require("../../assets/images/Carousel/v3.png"),
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.secondary}
        inactiveDotColor={COLORS.tertiary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: 20,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;
