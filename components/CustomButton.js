import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { globalStyles } from "../datas/style";

export default function CustomButton({ name, onPress }) {
  return (
    <TouchableOpacity style={globalStyles.buttonStyle} onPress={onPress}>
      <View style={globalStyles.buttonContainer}>
        <Text style={globalStyles.buttonText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
