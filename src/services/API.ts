import axios from 'axios'
import Constants from 'expo-constants'

if(!Constants.manifest.extra.APP_API_KEY){
    throw new Error('You need to include APP_API_KEY on your .env file.')
}
export const key = Constants.manifest.extra.APP_API_KEY

//https://api.hgbrasil.com/weather?key=3b84332f&lat=-23.682&lon=-46.875

const API = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default API