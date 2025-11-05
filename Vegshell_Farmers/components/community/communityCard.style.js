import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 350,
    marginEnd: 22,
    borderRadius: SIZES.large,
    elevation: 4,
    backgroundColor: COLORS.offwhite,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    width: 220,
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
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.large,
    marginBottom: 2,
    color: COLORS.secondary,
  },
  price: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.medium,
    marginVertical: 2,
    color: COLORS.secondary,
  },
  contactButton: {
    backgroundColor: COLORS.tertiary,
    width: 150,
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  contactText: {
    color: COLORS.lightWhite,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
});

export default styles;
