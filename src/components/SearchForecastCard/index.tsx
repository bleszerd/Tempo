import React from 'react'
import { View } from 'react-native'
import * as S from './styles'
import { SearchForecastCardProps } from '../../typescript/types'
import Conditions from '../../components/Conditions'

export default function SearchForecastCard({ cityData }: SearchForecastCardProps) {
    return (
        <S.SearchForecastCardContainer>
            <S.TextDate>{cityData.results.date}</S.TextDate>
            <S.TextCity>{cityData.results.city_name}</S.TextCity>
            <View>
                <S.TextTemperature>{cityData.results.temp}°</S.TextTemperature>
            </View>

            <Conditions weather={cityData} />
        </S.SearchForecastCardContainer>
    )
}