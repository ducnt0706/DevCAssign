import React from "react";
import { View, Text,Image } from "react-native";

import { globalStyles } from "../datas/style";
import {CHOICES} from '../datas/data';

export default function ChoiceContainer({player,choice:{img,name}}) {
  const title=name && name.charAt(0).toUpperCase()+name.slice(1);
  return (
    <View style={globalStyles.choiceContainer}>
      <Text style={globalStyles.choiceDescription}>{player}</Text>
      <Image
        source={img}
        resizeMode="contain"
        style={globalStyles.choiceImage}
      />
      <Text style={globalStyles.choiceCardTitle}>{title}</Text>
    </View>
  );
}
