import { StackNavigationProp } from '@react-navigation/stack';
import '@expo/vector-icons'
import React, { Component, ReactNode } from 'react';

/* ================ Routes ================*/
type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList
>

/* ================ Forecast ================*/
interface Forecast {
    date: string;
    weekday: string;
    max: number;
    min: number;
    description: string;
    condition: ForecastConditionSlug
}

interface ForecastComponentProps {
    data: Forecast
}

type ForecastConditionSlug =
    "storm" |
    "snow" |
    "hail" |
    "rain" |
    "fog" |
    "clear_day" |
    "clear_night" |
    "cloud" |
    "cloudly_day" |
    "cloudly_night" |
    "none_day" |
    "none_night"

interface ForecastConditionData {
    name: string
    color: string
    component: Icon
}

/* ================ C_Header ================*/
interface HeaderProps {
    background: string[]
    weather: Weather
    Icon: {
        name: Icon
        color: string
        component: any
    }
}

/* ================ C_Condition ================*/
interface ConditionProps {
    weather: Weather
}

/* ================ Weather ================*/
interface Weather {
    by: string
    execution_time: number
    from_cache: boolean
    results: {
        cid: string
        city: string
        city_name: string
        condition_code: string
        condition_slug: string
        currently: string
        date: string
        description: string
        forecast:
        {
            condition: string
            date: string
            description: string
            max: number
            min: number
            weekday: string
        }[]
        humidity: number
        img_id: string
        sunrise: string
        sunset: string
        temp: number
        time: string
        wind_speedy: string
    }
    valid_key: true,
}

/* ================ Styled Components ================*/
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            lightBlue: String
            gelo: String
            white: String
            darkBlue: String
            blueGreenDark: String
            sun: String
            concrete: String
        },
        radius: {

        },
        spacing: {
            margin: {

            },
            padding: {

            }
        }
    }
}

/* ================ Scrollable Forecasts ================*/
export interface ScrollableForecastsProps {
    weatherData: {
        condition: string
        date: string
        description: string
        max: number
        min: number
        weekday: string
    }[]
}

/* ================ Scrollable Forecasts ================*/
export interface AppWrapperProps {
    children: ReactNode
}

/* ================ Search Back Button Header ================*/
export interface SearchBackButtonHeaderProps {
    onPress: () => void;
}

/* ================ Search SearchBox ================*/
export interface SearchSearchBoxProps {
    inputValue: string
    dispatch: React.Dispatch<any>
    onPress: () => void;
}

/* ================ Search Forecast Card ================*/
export interface SearchForecastCardProps {
    cityData: any
}

/* ================ Error Label ================*/
export interface ErrorLabelProps {
    text: string
}