import React, { useEffect, useState } from 'react'
import { ForecastConditionData, Weather } from '../../typescript/types'
import * as Location from 'expo-location'

import API, { key } from '../../services/API'
import { condition } from "../../utils/condition";
import { validateKey } from '../../utils/keys';

import { AppWrapper } from '../../components/AppWrapper'
import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Loading from '../../components/Loading'
import ScrollableForecasts from '../../components/ScrollableForecasts'

export default function Home() {
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [weather, setWeather] = useState<Weather>({} as Weather)
    const [icon, setIcon] = useState<ForecastConditionData>({} as ForecastConditionData)
    const [background, setBackground] = useState(['#1ed6ff', '#97c1ff'])

    /**Get all needed forecast info and start the app*/
    async function initApp() {

        /**Handle location request API*/
        async function requestLocation() {
            const { status } = await Location.requestPermissionsAsync()

            if (status !== 'granted') {
                setErrorMsg('Você precisa permitir o uso da localização para utilizar todas as funcionalidades do aplicativo.')
                setLoading(false)
                return
            }
        }

        /**Get location data from external API*/
        async function requestLocationData() {
            const locationData = await Location.getCurrentPositionAsync({})
            const coords = locationData?.coords

            const response = await API.get(`/weather?key=${key}&lat=${coords?.latitude}&lon=${coords?.longitude}`)

            /**If API is invalid trhow new exception */
            if(validateKey(response, setErrorMsg, "Chave inválida para a API. Inclua-a ao final do \"app.json\" se você for um desenvolvedor."))

            return response
        }

        /**Change UI info based on API response */
        async function handleUiInfo() {
            setWeather(response?.data)

            const { condition_slug, currently } = response?.data.results

            if (currently === 'noite') {
                setBackground(['#0c3741', '#0f2f61'])
            }

            const uiIcon = condition(condition_slug)

            setIcon(uiIcon)
            setLoading(false)
        }

        await requestLocation();
        const response = await requestLocationData();
        await handleUiInfo();
    }

    useEffect(() => {
        initApp();
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <AppWrapper>
            <Menu />

            <Header
                background={background}
                weather={weather}
                Icon={icon}
            />

            <Conditions
                weather={weather}
            />

            <ScrollableForecasts
                weatherData={weather.results.forecast}
            />

        </AppWrapper>
    )
}