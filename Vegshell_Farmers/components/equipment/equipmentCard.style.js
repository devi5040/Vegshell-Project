import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  cardContainer: {
    width: 155,
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.large,
    elevation: 4,
    backgroundColor: COLORS.offwhite,
  },
  imageContainer: {
    flex: 1,
    width: 144,
    marginHorizontal: SIZES.small / 4,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    marginBottom: 2,
    color: COLORS.black,
  },
  price: {
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
});

export default styles;
