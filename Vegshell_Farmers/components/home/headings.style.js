import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    height: 100,
    marginVertical: 15,
  },
  topHeading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: COLORS.gray2,
    textAlign: 'center',
  },
  secondHeading: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.secondary,
    fontSize: 40,
    textAlign: 'center',
  },
});

export default styles;
