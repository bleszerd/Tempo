import { LinearGradient } from 'expo-linear-gradient'

import styled from 'styled-components/native'

export const SearchForecastCardContainer = styled(LinearGradient).attrs(({theme}) => ({
    colors: [theme.colors.lightBlue, theme.colors.white]
}))`
    margin-top: 5%;
    width: 90%;
    padding-top: 3%;
    padding-bottom: 3%;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
`

export const TextDate = styled.Text`
    color: ${({theme}) => `${theme.colors.white}`};
`

export const TextCity = styled.Text`
    color: ${({theme}) => `${theme.colors.white}`};
    font-weight: bold;
    font-size: 20px;
`

export const TextTemperature = styled.Text`
    color: ${({theme}) => `${theme.colors.white}`};
    font-weight: bold;
    font-size: 90px;
`