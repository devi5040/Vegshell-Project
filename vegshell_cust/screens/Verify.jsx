import { View, Text, Image, TextInput, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./login.style";
import { BackBtn, Button } from "../components/buttons";
import * as Yup from "yup";
import { Formik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

const loginSchema = Yup.object().shape({
  otp: Yup.string().min(4, "Enter correct otp").required("Required"),
});

const Verify = ({ navigation, data }) => {
  const route = useRoute();
  //console.log(route.params.data);
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);

  //for invalid submit
  const invalidSubmit = () => {
    Alert.alert("Invalid Form", "Please Provide all required fields", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Continue",
        onPress: () => {},
      },
    ]);
  };

  //login function on submit
  const login = async (values) => {
    setLoader(true);
    try {
      //const endpoint = "http://192.168.1.1:3000/api/login";
      //const data = values;
      //console.log(data);
      console.log("====================================");
      console.log(values);
      console.log("====================================");
      const response = await axios.post(
        "http://192.168.1.5:5050/api/auth/verifyOtp",
        values
      );

      if (response.status === 200)
        // setLoader(false);
        // //console.log(response.data);
        // setResponseData(response.data);
        // //console.log(`user${responseData._id}`);
        // await AsyncStorage.setItem(
        //   `user${responseData._id}`,
        //   JSON.stringify(responseData)
        // );
        // await AsyncStorage.setItem("id", JSON.stringify(responseData._id));
        // console.log(newUser);

        navigation.replace("bottom-navigation");
      setLoader(false);
    } catch (error) {
      Alert.alert("Error", "Error occured", [
        {
          text: "Cancel",
          onPress: () => {},
        },
        {
          text: "Continue",
          onPress: () => {},
        },
      ]);
    } finally {
      setLoader(false);
    }
  };
  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 5 }}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <Image
            source={require("../assets/images/login.jpg")}
            style={styles.cover}
          />
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>Login Now</Text>
          </View>
          <Formik
            initialValues={{ phoneNumber: route.params.data, otp: "" }}
            validationSchema={loginSchema}
            onSubmit={(values) => login(values)}
          >
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
              <View style={{ marginHorizontal: 20 }}>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Mobile Number</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.phoneNumber ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="cellphone-check"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      key="phoneNumber"
                      placeholder={route.params.data}
                      style={{ flex: 1 }}
                      editable={false}
                    />
                  </View>
                  {touched.phoneNumber && errors.phoneNumber && (
                    <Text style={styles.errorMessage}>
                      {errors.phoneNumber}
                    </Text>
                  )}
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Otp</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.otp ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="cellphone-check"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      key="OTP"
                      placeholder="Enter OTP"
                      value={values.otp}
                      onChangeText={handleChange("otp")}
                      onFocus={() => {
                        setFieldTouched("otp");
                      }}
                      onBlur={() => setFieldTouched("otp", "")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.otp && errors.otp && (
                    <Text style={styles.errorMessage}>{errors.otp}</Text>
                  )}
                </View>
                <Button
                  onPress={isValid ? handleSubmit : invalidSubmit}
                  isValid={isValid}
                  title="VERIFY OTP"
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

export default Verify;
