import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Button
} from "react-native";

import { globalStyles } from "../datas/style";
import { CHOICES } from "../datas/data";
import CustomButton from "../components/CustomButton";
import ChoiceContainer from "../components/ChoiceContainer";
import Header from "../components/Header";

export default function Home({navigation}) {
  const [gameResult, setGameResult] = useState("Tie Game");
  const [userChoose, setUserChoose] = useState(CHOICES[0]);
  const [compChoose, setCompChoose] = useState(CHOICES[0]);
  const [gameCount, setGameCount] = useState(0);
  const [gameWin, setGameWin] = useState(0)
  const [gameTie, setGameTie] = useState(0)

  const onPressHandler = (userChoice) => {
    let newUserChoice = CHOICES.find(
      (choice) => choice.name === userChoice.name
    );

    let num = Math.floor(Math.random() * 3);
    let newCompChoice = CHOICES[num];
    let result="Tie Game";
    let newCount=gameCount+1;
    let newWin=gameWin;
    let newTie=gameTie;
    setUserChoose(newUserChoice);
    setCompChoose(newCompChoice);

    
    if (newCompChoice.name === userChoice.name) {
      result = "Tie game!";
      newTie++;
    } else {
      if (userChoice.name === "rock") {
        result = newCompChoice.name === "paper" ? "You lose!" : "You win!";
        newWin =newCompChoice.name === "paper" ? newWin : newWin+1;
      } else if (userChoice.name === "paper") {
        result = newCompChoice.name === "scissors" ? "You lose!" : "You win!";
        newWin =newCompChoice.name === "scissors" ? newWin : newWin+1;
      } else if (userChoice.name === "scissors") {
        result = newCompChoice.name === "rock" ? "You lose!" : "You win!";
        newWin =newCompChoice.name === "rock" ? newWin: newWin+1;
      }
    }
    setGameResult(result);
    setGameCount(newCount);
    setGameWin(newWin);
    setGameTie(newTie);
    ;
  };
  const passToDetail = ()=>{
    navigation.navigate('Detail',{
        gameTotal:gameCount,
        gameWin:gameWin,
        gameTie:gameTie
        
   })
  }
  const getResultColor=()=>{
    if(gameResult=== "You lose!"){
      return 'red'
    }else if(gameResult==="You win!"){
      return 'green'
    }else{
      return null
    }
  }

  return (
    <View
      style={[
        globalStyles.container,
      ]}
    >
      
      <Text style={[globalStyles.title,{color:getResultColor()}]}>{gameResult}</Text>
      <View style={globalStyles.choicesContainer}>
        <ChoiceContainer player="User" choice={userChoose} />
        <Text style={{ color: "#250902" }}>vs</Text>
        <ChoiceContainer player="Comp" choice={compChoose} />
      </View>

      {CHOICES.map((choice) => {
        return (
          <CustomButton
            key={choice.name}
            name={choice.name}
            onPress={() => onPressHandler(choice)}
          />
        );
      })}
      <Button style={{height:25}} onPress={passToDetail} title='Detail'/>
    </View>
  );
}
