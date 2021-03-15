import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast'
import { Forecast as ForecastType} from '../../typescript/types'

const myList = [
    {
        "date": "15/03",
        "weekday": "Seg",
        "max": 28,
        "min": 17,
        "description": "Tempestades",
        "condition": "fog"
    },
    {
        "date": "16/03",
        "weekday": "Ter",
        "max": 27,
        "min": 18,
        "description": "Tempestades",
        "condition": "storm"
    },
    {
        "date": "17/03",
        "weekday": "Qua",
        "max": 28,
        "min": 18,
        "description": "Tempestades",
        "condition": "clear_day"
    },
    {
        "date": "18/03",
        "weekday": "Qui",
        "max": 28,
        "min": 18,
        "description": "Tempestades",
        "condition": "storm"
    },
    {
        "date": "19/03",
        "weekday": "Sex",
        "max": 27,
        "min": 19,
        "description": "Tempestades isoladas",
        "condition": "storm"
    },
    {
        "date": "20/03",
        "weekday": "Sáb",
        "max": 27,
        "min": 18,
        "description": "Parcialmente nublado",
        "condition": "cloudly_day"
    },
    {
        "date": "21/03",
        "weekday": "Dom",
        "max": 28,
        "min": 19,
        "description": "Ensolarado com muitas nuvens",
        "condition": "cloudly_day"
    },
    {
        "date": "22/03",
        "weekday": "Seg",
        "max": 30,
        "min": 18,
        "description": "Parcialmente nublado",
        "condition": "cloudly_day"
    },
    {
        "date": "23/03",
        "weekday": "Ter",
        "max": 30,
        "min": 20,
        "description": "Tempo nublado",
        "condition": "cloud"
    },
    {
        "date": "24/03",
        "weekday": "Qua",
        "max": 28,
        "min": 20,
        "description": "Tempestades",
        "condition": "storm"
    }
]

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Menu />

            <Header />

            <Conditions />

            <FlatList
                horizontal={true}
                style={styles.list}
                data={myList}
                keyExtractor={forecast => forecast.date}
                renderItem={({ item }) => {
                    return (
                        <Forecast data={item as ForecastType} />
                    )
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%'
    },
    list: {
        marginTop: 10,
        marginRight: 10,
    }
})