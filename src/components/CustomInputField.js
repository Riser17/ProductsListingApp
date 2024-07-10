import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const CustomInputField = props => {
  //const [secure, setSecure] = React.useState(props.secureTextEntry);

  //   const toggleSecure = () => {
  //     setSecure(!secure);
  //   };
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        ref={props.inputRef}
        style={[styles.inputField, props.inputFieldStyle]}
        placeholder={props.placeholderText}
        placeholderTextColor={'#5E5E5E'}
        keyboardType={props.keyboardType}
        // secureTextEntry={secure}
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmitEditing}
        returnKeyType={props.returnKeyType}
        value={props.value}
        readOnly={props.readOnly ? props.readOnly : false}
        multiline={props.multiline ? props.multiline : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 42,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
    marginTop: 16,
  },
  inputField: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    color: '#2B2B2B',
    fontWeight: '400',
    fontSize: 14,
  },
});

export default CustomInputField;
