import React, {useRef, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import CustomPhoneInputField from '../components/CustomPhoneInputField';
import CustomInputField from '../components/CustomInputField';

const LoginScreen = ({navigation}) => {
  const phoneRef = useRef(null);
  const otpRef = useRef(null);

  const [confirmation, setConfirmation] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      // Reset state when screen is focused
      setConfirmation(null);
      if (phoneRef.current) {
        phoneRef.current.value = '';
      }
      if (otpRef.current) {
        otpRef.current.value = '';
      }
    }, []),
  );

  const sendOtp = async () => {
    console.log('mobile', phoneRef?.current?.getCountryCode());
    const confirmation = await auth().signInWithPhoneNumber(
      `+${phoneRef?.current?.getCountryCode()}${phoneRef.current.value}`,
    );
    setConfirmation(confirmation);
  };

  const verifyOtp = async () => {
    try {
      await confirmation.confirm(otpRef.current.value);
      navigation.navigate('Products');
      otpRef.current.value = '';
      phoneRef.current.value = '';
    } catch (error) {
      console.log('Invalid OTP');
    }
  };

  return (
    <View style={{flex: 1, padding: 16}}>
      <CustomPhoneInputField
        inputRef={phoneRef}
        onChangePhoneNumber={val => {
          let dialCode = `+${phoneRef?.current?.getCountryCode()}`;
          let phoneNumber =
            phoneRef?.current?.getValue()?.replace(dialCode, '') || '';
          phoneRef.current.value = phoneNumber;
          //checkFieldAreEmpty();
        }}
      />

      {confirmation ? (
        <View>
          <CustomInputField
            inputRef={otpRef}
            placeholderText={'Enter OTP'}
            keyboardType={'number-pad'}
            secureTextEntry={false}
            onChangeText={value => {
              otpRef.current.value = value;
              //checkFieldAreEmpty();
            }}
            //   onSubmitEditing={() => {
            //     otpRef.current.focus();
            //   }}
            //   returnKeyType={'next'}
          />
          <Button title="Verify OTP" onPress={verifyOtp} />
        </View>
      ) : (
        <Button title="Send OTP" onPress={sendOtp} />
      )}
    </View>
  );
};

export default LoginScreen;
