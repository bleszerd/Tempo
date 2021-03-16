import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Forecast as ForecastType, Weather } from '../../typescript/types'
import * as Location from 'expo-location'
import API, { key } from '../../services/API'

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast'

export default function Home() {
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [weather, setWeather] = useState<Weather>({} as Weather)
    const [icon, setIcon] = useState({ name: 'cloud', color: '#fff' })
    const [background, setBackground] = useState(['#1ed6ff', '#97c1ff'])

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestPermissionsAsync()

            if (status !== 'granted') {
                setErrorMsg('Você precisa permitir o uso da localização para utilizar todas as funcionalidades do aplicativo.')
                setLoading(false)
                return
            }

            const { coords } = await Location.getCurrentPositionAsync({})

            const response = await API.get(`/weather?key=${key}&lat=${coords.latitude}&lon=${coords.longitude}`)

            if(response.data.valid_key === false){
                throw new Error('Invalid API Key')
            }
            
            setWeather(response.data)

            if (response.data.results.currently === 'noite') {
                setBackground(['#0c3741', '#0f2f61'])
            }

            switch (response.data.results.condition_slug) {
                case 'clear_day':
                    setIcon({ name: 'partly-sunny', color: '#ffb300' })
                    break
                case 'rain':
                    setIcon({ name: 'rainy', color: '#fff' })
                    break
                default:
                    setIcon({ name: 'rainy', color: '#fff' })
                    break
            }

            setLoading(false)
        })()
    }, [])

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 17, fontStyle: 'italic' }}>Carregando Dados</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Menu />

            <Header background={background} weather={weather} icon={icon} />

            <Conditions weather={weather} />

            <FlatList
                horizontal={true}
                style={styles.list}
                data={weather.results.forecast}
                keyExtractor={forecast => forecast.date}
                showsHorizontalScrollIndicator={false}
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