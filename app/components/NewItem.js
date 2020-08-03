import React from 'react'
import { View, Text, Linking, Alert } from 'react-native'
import moment from 'moment';
import {Card,Button,Icon} from 'react-native-elements';

import {globalStyles} from '../styles/style';

export default function NewItem({item}) {
    const seeMore=url=>{
      Linking.canOpenURL(url).then(supported =>{
        if(supported){
          Linking.openURL(url);
        }else{
          Alert.alert(`Not Support for ${url} `)
        }
      })
    }
    return (
        <Card title={item.title} image={{uri: item.urlToImage}}>
          <View style={globalStyles.row}>
            <Text style={globalStyles.label}>Source</Text>
            <Text style={globalStyles.info}>{item.source.name}</Text>
          </View>
          <Text style={{marginBottom: 10}}>{item.content}</Text>
          <View style={globalStyles.row}>
            <Text style={globalStyles.label}>Published</Text>
            <Text style={globalStyles.info}>
              {moment(item.publishedAt).format('LLL')}
            </Text>
          </View>
          <Button onPress={()=>seeMore(item.url)} icon={<Icon />} title="Read more" backgroundColor="#03A9F4" />
        </Card>
    )
}
