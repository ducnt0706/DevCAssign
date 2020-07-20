import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';
import {globalStyles} from '../style/style';

export default function ItemList({item, onDeletePress, onPressDetail,onActivePress}) {
  return (
    <TouchableOpacity onPress={()=>onPressDetail(item)} >
      <Card>
        <View style={globalStyles.horizontalContainer}>
          <View >
            <Text style={globalStyles.textTitle}>{item.title}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => onActivePress(item.id)}>
              <Ionicons name={item.active?"checkmark-done-circle":"checkmark-done-circle-outline"} size={30} color={item.active?'green':'black'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDeletePress(item.id)}>
              <MaterialIcons name="delete" size={25} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
