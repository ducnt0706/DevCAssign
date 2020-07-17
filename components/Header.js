import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

import {globalStyles} from '../datas/style'

export default function Header({title}) {
    return (
        <View style={globalStyles.header}>
            <Text style={globalStyles.textHeader}>{title}</Text>
        </View>
    )
}
