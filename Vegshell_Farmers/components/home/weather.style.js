import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  imageMain: {
    flex: 1,
    height: 150,
  },
  mainText: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 30,
    color: COLORS.lightWhite,
  },
  infoText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: COLORS.lightWhite,
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 15,
  },
  individualIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  iconText: {
    fontFamily: 'Poppins-Large',
    color: COLORS.lightWhite,
  },
  daily: {
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    opacity: 0.4,
    marginHorizontal: 12,
    width: 100,
    alignItems: 'center',
    marginVertical: 15,
    paddingVertical: 20,
    borderRadius: 15,
  },
  day: {
    fontFamily: 'Poppins-Medium',
    marginVertical: 5,
    color: COLORS.lightWhite,
    opacity: 1.5,
  },
  dayTemp: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.lightWhite,
    opacity: 1.5,
  },
});

export default styles;
