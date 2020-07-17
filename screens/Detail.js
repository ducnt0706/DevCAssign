import React from "react";
import { View, Text } from "react-native";

import { globalStyles } from "../datas/style";

export default function Detail({ navigation, route }) {
  const { gameTotal, gameWin, gameTie } = route.params;
  let total = parseInt(JSON.stringify(gameTotal));
  let win = parseInt(JSON.stringify(gameWin));
  let tie = parseInt(JSON.stringify(gameTie));
  let lose = total - win - tie;
  let winPersent = total >= 1 ? (win / total) * 100 : 0;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textContent}>Number of games: {total}</Text>
      <Text style={globalStyles.textContent}>
        Persent of win: {winPersent} %
      </Text>
      <Text style={globalStyles.textContent}>Vitory games: {win}</Text>
      <Text style={globalStyles.textContent}>Tie games: {tie}</Text>
      <Text style={globalStyles.textContent}>Lose games: {lose}</Text>
    </View>
  );
}
