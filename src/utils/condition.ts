import { ForecastConditionData, ForecastConditionSlug } from "../typescript/types";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Fontisto, FontAwesome5 } from "@expo/vector-icons"

export function condition(condition: ForecastConditionSlug): ForecastConditionData{
    const availableConditions = {
        storm: {
            name: 'cloud-rain',
            color: '#1ec9ff',
            component: FontAwesome5
        },
        snow: {
            name: 'snowflake',
            color: '#1ec9ff',
            component: FontAwesome5,
        },
        hail: {
            name: 'snowflake',
            color: '#1ec9ff',
            component: FontAwesome5,
        },
        rain: {
            name: 'cloud-rain',
            color: '#1ec9ff',
            component: FontAwesome5,
        },
        fog: {
            name: 'smog',
            color: '#cccccc',
            component: FontAwesome5,

        },
        clear_day: {
            name: 'sunny',
            color: '#ffb300',
            component: Ionicons,
        },
        clear_night: {
            name: 'nightlight-round',
            color: '#163bb5',
            component: MaterialIcons,
        },
        cloud: {
            name: 'cloud',
            color: '#1ec9ff',
            component: Ionicons,
        },
        cloudly_day: {
            name: 'cloud-sun',
            color: '#ffb300',
            component: FontAwesome5,
        },
        cloudly_night: {
            name: 'cloud-moon',
            color: '#163bb5',
            component: FontAwesome5,
        },
        none_day: {
            name: 'day-sunny',
            color: '#ffb300',
            component: Fontisto,
        },
        none_night: {
            name: 'weather-night',
            color: '#163bb5',
            component: MaterialCommunityIcons,
        }
    }

    return availableConditions[condition]
}

