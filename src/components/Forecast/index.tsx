import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { ForecastComponentProps } from '../../typescript/types';
import { condition } from '../../utils/condition'

export default function Forecast({ data }: ForecastComponentProps) {
    const conditionData = condition(data.condition)

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>
            <conditionData.component
                name={conditionData.name}
                color={conditionData.color}
                size={25}
            />
            <View style={styles.temp}>
                <Text style={styles.min}>{data.min}°</Text>
                <Text style={styles.max}>{data.max}°</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginLeft: 12,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 12,
        paddingLeft: 14,
        paddingRight: 14,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    date: {
        fontSize: 14
    },
    min: {
        color: "#0d0c3f"
    },
    max: {
        color: "#222163",
        fontSize: 18,
        fontWeight: 'bold'
    },
    temp: {
        alignItems: 'center'
    }
})