import React from 'react'
import { View, Text } from 'react-native'

import {globalStyles} from '../style/style'

export default function About() {
    return (
        <View style={globalStyles.alignContainer}>
            <Text style={globalStyles.textTitle}>About</Text>
        </View>
    )
}
