import {View, Text, Image, TextInput, ScrollView, Alert} from 'react-native';
import React, {useEffect} from 'react';
import styles from './login.style';
import {BackBtn, Button} from '../components/buttons';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/action';

//const phoneRegExp = "^(+91[-s]?)?[0]?(91)?[789]d{9}$";

const loginSchema = Yup.object().shape({
  phoneNumber: Yup.string().min(8, 'Phone is not valid').required('Required'),
  password: Yup.string()
    .min(8, 'Minimum length is 8')
    .max(16, 'Maximum length is 16')
    .required('Required'),
});

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const error = useSelector(state => state.auth.error);
  const message = useSelector(state => state.auth.user);
  const loader = useSelector(state => state.auth.loading);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const loginHandler = values => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (error) {
      Alert.alert('error', error, [
        {
          text: 'cancel',
          onPress: () => {},
        },
        {
          text: 'Continue',
          onPress: () => {},
        },
      ]);
      dispatch({type: 'auth/clearError'});
    }
    if (isAuthenticated) {
      navigation.navigate('bottom-navigation');
    }
  }, [error, dispatch, message, loader]);

  //for invalid submit
  const invalidSubmit = () => {
    Alert.alert('Invalid Form', 'Please Provide all required fields', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Continue',
        onPress: () => {},
      },
    ]);
  };

  return (
    <ScrollView>
      <SafeAreaView style={{marginHorizontal: 5}}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <Image
            source={require('../assets/images/login.jpg')}
            style={styles.cover}
          />
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>Login Now</Text>
          </View>
          <Formik
            initialValues={{phoneNumber: '', password: ''}}
            validationSchema={loginSchema}
            onSubmit={values => loginHandler(values)}>
            {({
              handleChange,
              touched,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldTouched,
            }) => (
              <View style={{marginHorizontal: 20}}>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Mobile Number</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.phoneNumber ? COLORS.secondary : COLORS.offwhite,
                    )}>
                    <Icons
                      name="cellphone-check"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      key="phoneNumber"
                      placeholder="Enter Mobile Number"
                      value={values.phoneNumber}
                      onChangeText={handleChange('phoneNumber')}
                      onFocus={() => {
                        setFieldTouched('phoneNumber');
                      }}
                      onBlur={() => setFieldTouched('phoneNumber', '')}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{flex: 1}}
                    />
                  </View>
                  {touched.phoneNumber && errors.phoneNumber && (
                    <Text style={styles.errorMessage}>
                      {errors.phoneNumber}
                    </Text>
                  )}
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Password</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.password ? COLORS.secondary : COLORS.offwhite,
                    )}>
                    <Icons
                      name="cellphone-check"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      key="password"
                      placeholder="Enter Password"
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onFocus={() => {
                        setFieldTouched('password');
                      }}
                      onBlur={() => setFieldTouched('password', '')}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{flex: 1}}
                    />
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  )}
                </View>
                <Button
                  onPress={isValid ? handleSubmit : invalidSubmit}
                  isValid={isValid}
                  title="Login"
                  loader={loader}
                />
                <Text
                  style={styles.registration}
                  onPress={() => {
                    navigation.navigate('register');
                  }}>
                  Register
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
