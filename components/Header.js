import React from 'react'
import { View, Text } from 'react-native'

import {globalStyles} from '../style/style'

export default function Header(props) {
    return (
        <View style={globalStyles.header}>
            <Text style={globalStyles.textHeader}>{props.title}</Text>
        </View>
    )
}
