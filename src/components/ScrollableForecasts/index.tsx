import React from 'react'
import { StyleSheet } from 'react-native'
import { Forecast as ForecastType, ScrollableForecastsProps } from '../../typescript/types'
import { FlatList } from 'react-native-gesture-handler'

import Forecast from '../../components/Forecast'

export default function ScrollableForecasts({weatherData} : ScrollableForecastsProps) {
    return (
        <FlatList
            horizontal={true}
            style={styles.list}
            data={weatherData}
            keyExtractor={forecast => forecast.date}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <Forecast data={item as ForecastType} />
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        marginTop: 10,
        marginRight: 10,
    }
})