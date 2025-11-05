import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.large,
    elevation: 4,
    backgroundColor: COLORS.offwhite,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    width: 355,
    marginHorizontal: SIZES.small / 4,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  iconOver: {
    position: 'absolute',
    top: 50,
    left: '25%',
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    opacity: 0.5,
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    marginBottom: 2,
    color: COLORS.secondary,
  },
  price: {
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    color: COLORS.secondary,
  },
});

export default styles;
