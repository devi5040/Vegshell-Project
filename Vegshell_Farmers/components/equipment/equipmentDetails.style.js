import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    textAlign: 'center',
    color: COLORS.secondary,
  },
  container: {
    marginVertical: 15,
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  imageContainer: {
    width: '100%',
    height: 400,
    alignItems: 'center',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    borderColor: COLORS.secondary,
    borderWidth: 0.5,
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  desc: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    textAlign: 'justify',
    color: COLORS.gray,
  },
  price: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginVertical: 10,
    color: COLORS.secondary,
  },
  rentBtn: {
    width: '100%',
    backgroundColor: COLORS.tertiary,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 20,
  },
  rentText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: COLORS.lightWhite,
  },
});

export default styles;
