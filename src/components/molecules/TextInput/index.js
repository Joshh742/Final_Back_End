import { Text, View, TextInput as Input } from "react-native";
import React from "react";
import styles from "./TextInput.styles";

const TextInput = ({ label, placeholder, onChangeText, ...rest }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default TextInput;
