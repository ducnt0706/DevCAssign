import React from 'react'
import { View, Text } from 'react-native'

import {globalStyles} from '../style/style'

export default function Card(props) {
    return (
        <View style={globalStyles.card}>
            <View style={globalStyles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}
