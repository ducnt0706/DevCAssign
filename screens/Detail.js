import React from 'react'
import { View, Text } from 'react-native'

import {globalStyles} from '../style/style'

export default function Detail({route}) {
    const {item}=route.params;
    return (
        <View style={globalStyles.alignContainer}>
            <Text style={globalStyles.textTitle}>{item.title}</Text>
            <Text>{item.active?'Active: Work is Done':"Not Active: Work isn't done"}</Text>
        </View>
    )
}
