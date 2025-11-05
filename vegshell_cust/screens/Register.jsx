import {View, Text, TextInput, ScrollView, Alert} from 'react-native';
import React from 'react';
import styles from './login.style';
import {BackBtn, Button} from '../components/buttons';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const loginSchema = Yup.object().shape({
  username: Yup.string().min(3, 'minimum 3 letters').required('Required'),
  email: Yup.string().required('Required'),
  phoneNumber: Yup.string().min(8, 'Phone is not valid').required('Required'),
  password: Yup.string()
    .min(8, 'Minimum length is 8')
    .max(16, 'Maximum length is 16')
    .required('Required'),
});

const Register = () => {
  const navigation = useNavigation();
  const loader = useSelector(state => state.auth.loading);

  const registerHandler = async values => {
    try {
      console.log('Registering with values:', values); // Add this line to debug values
      const res = await axios.post(
        'http://3.1.249.239/api/auth/register',
        values,
      );
      console.log('Response:', res.data);
      navigation.navigate('login');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

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
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>Register Now</Text>
          </View>
          <Formik
            initialValues={{
              username: '',
              email: '',
              phoneNumber: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={values => registerHandler(values)}>
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
                  <Text style={styles.label}>Username</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.username ? COLORS.secondary : COLORS.offwhite,
                    )}>
                    <Icons
                      name="cellphone-check"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      key="username"
                      placeholder="Enter username"
                      value={values.username}
                      onChangeText={handleChange('username')}
                      onFocus={() => {
                        setFieldTouched('username');
                      }}
                      onBlur={() => setFieldTouched('username', '')}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{flex: 1}}
                    />
                  </View>
                  {touched.username && errors.username && (
                    <Text style={styles.errorMessage}>{errors.username}</Text>
                  )}
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.secondary : COLORS.offwhite,
                    )}>
                    <Icons
                      name="cellphone-check"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      key="email"
                      placeholder="Enter Email"
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onFocus={() => {
                        setFieldTouched('email');
                      }}
                      onBlur={() => setFieldTouched('email', '')}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{flex: 1}}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                  )}
                </View>
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
                  title="Signup"
                  loader={loader}
                />
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register;
