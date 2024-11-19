import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { MyStyles } from "@/constants/Styles";
import { TextInput } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";
const signup = () => {
  const [countryCode, setCountryCode] = useState("+256");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const { signUp } = useSignUp();
  //this function handles the creation of the user account and verification
  const onSignup = async () => {
    const fullPhoneNumber = "${countryCode}${phoneNumber}";

    try {
      await signUp!.create({
        phoneNumber: fullPhoneNumber,
      });
      signUp!.preparePhoneNumberVerification();
      router.push({
        pathname: "/verification/[phone]",
        params: { phone: fullPhoneNumber },
      });
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={80}
    >
      <View style={MyStyles.container}>
        <Text style={MyStyles.header}>Please, Let's Begin!</Text>
        <Text>
          Enter your phone number and choose the country your from. And a
          confirmation will be sent to you
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="country code"
            placeholderTextColor={"gray"}
            value={countryCode}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Mobile number"
            placeholderTextColor={"gray"}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <Link href={"/login"} replace asChild>
          <TouchableOpacity>
            <Text style={MyStyles.linkText}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </Link>
        <View style={{ flex: 1 }}></View>
        <TouchableOpacity
          style={[
            MyStyles.myButton,

            phoneNumber !== "" ? styles.enabled : styles.disabled,
            { backgroundColor: Colors.dark1, marginBottom: 20 },
          ]}
          onPress={onSignup}
        >
          <Text style={MyStyles.ButtonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lighterGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 25,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.lighterGray,
  },
});
export default signup;
