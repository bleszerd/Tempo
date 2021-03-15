import { StackNavigationProp } from '@react-navigation/stack';
import '@expo/vector-icons'

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