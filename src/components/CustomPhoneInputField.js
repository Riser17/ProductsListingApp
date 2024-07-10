import React from 'react';
import {View, StyleSheet} from 'react-native';
import PhoneInput from 'react-native-phone-input';

const CustomPhoneInputField = props => {
  return (
    <View style={styles.container}>
      <PhoneInput
        ref={props.inputRef}
        style={styles.inputField}
        autoFormat={true}
        textProps={{
          keyboardType: 'phone-pad',
          maxLength: 18,
          fontWeight: '500',
          fontSize: 14,
        }}
        onChangePhoneNumber={props.onChangePhoneNumber}
        initialCountry="in"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 42,
    //marginLeft: '10%',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 16,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
  },
  inputField: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,

    color: '#5E5E5E',
    fontWeight: '400',
    fontSize: 12,
  },
});

export default CustomPhoneInputField;
