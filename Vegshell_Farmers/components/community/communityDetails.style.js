import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  videoContainer: {
    height: 220,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
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
  mapContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    height: 200,
    width: '100%',
  },
  contactButton: {
    backgroundColor: COLORS.tertiary,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  contact: {
    color: COLORS.lightWhite,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default styles;
