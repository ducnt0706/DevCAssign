import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Button,
  Keyboard,
  Alert,
} from 'react-native';
import {
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ItemList from '../components/ItemList';
import {globalStyles} from '../style/style';
export default function Home({navigation}) {
  const [todos, setTodos] = useState([
    {id: 1, title: 'Do assignment',active:false},
    {id: 2, title: 'Cooking',active:true},
    {id: 3, title: 'Coding',active:false},
    {id: 4, title: 'Do houseworks',active:false},
  ]);
  const [modal, setModal] = useState(false);
  const [addText, setAddText] = useState('');

  const handlerAddToDo=()=>{
    setTodos((prevTodos)=>{
      return [
        ...prevTodos,
        {id:Math.random(),title:addText,active:false},
      ]
    })
    Alert.alert('Info','Adding Successfully');
  }
  const handlerDeleteToDo=(key)=>{
    setTodos((prevTodos)=>{return prevTodos.filter(todo=>todo.id!=key)})
  }
  const onPressToDetail=(item)=>{
      navigation.navigate('Detail',{
        item:item
      })
  }
  const handlerActivePress=(key)=>{
    const todoIndex=todos.findIndex(todo =>todo.id===key);
    let newAray=[...todos];
    newAray[todoIndex]={...newAray[todoIndex],active:!newAray[todoIndex].active};
    setTodos(newAray);
  }
  return (
    <>
      <StatusBar />
      <SafeAreaView style={globalStyles.screenContainer}>
        {/* body */}

        <Modal visible={modal} animationType="slide">
          <View style={globalStyles.alignContainer}>
            <TouchableOpacity
              style={globalStyles.modalButton}
              onPress={() => setModal(false)}>
              <Ionicons name="close" size={28} color="red" />
            </TouchableOpacity>
            <TextInput
              placeholder="e.g. Dating!"
              style={globalStyles.textInput}
              autoFocus={true}
              onChangeText={(val)=>setAddText(val)}
            />
            <Text>{addText}</Text>
            <Button title="Add" onPress={handlerAddToDo}/>
          </View>
        </Modal>

        <TouchableOpacity
          style={globalStyles.modalButton}
          onPress={() => setModal(true)}>
          <Ionicons name="add" size={28} color="black" />
        </TouchableOpacity>

        <View style={globalStyles.bodyContainer}>
          <FlatList
            data={todos}
            renderItem={({item}) => <ItemList item={item} onActivePress={handlerActivePress} onPressDetail={onPressToDetail} onDeletePress={handlerDeleteToDo}/>}
            keyExtractor={(item) => `${item.id}`}           
          />
        </View>
      </SafeAreaView>
    </>
  );
}
