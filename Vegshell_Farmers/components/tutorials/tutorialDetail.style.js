import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  videoContainer: {
    borderWidth: 2,
    height: 220,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 40,
    color: COLORS.secondary,
  },
  videoDetail: {
    marginVertical: 15,
    marginHorizontal: 5,
    paddingVertical: 20,
  },
  desc: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'justify',
    marginBottom: 30,
    color: COLORS.gray,
  },
  flexContain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.secondary,
    fontSize: 14,
  },
});

export default styles;
