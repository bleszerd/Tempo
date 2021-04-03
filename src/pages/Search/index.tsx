import React, { useEffect, useState } from 'react'
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native"

import API, { key } from '../../services/API'
import { validateKey } from '../../utils/keys'
import SearchBackButtonHeader from '../../components/SearchBackButtonHeader';
import SearchSearchBox from '../../components/SearchSearchBox';
import SearchForecastCard from '../../components/SearchForecastCard';
import ErrorLabel from '../../components/ErrorLabel';
import { SearchWrapper } from '../../components/AppWrapper'

export default function Search() {
    const navigation = useNavigation()
    const [input, setInput] = useState('')
    const [city, setCity] = useState<string>('')
    const [error, setError] = useState<string>('')

    useEffect(() => {
        setError('')
        setInput('')
        setCity('')
    }, [])

    async function handleSearch() {
        const response = await API.get(`/weather?key=${key}&city_name=${input}`)

        const isValidKey = validateKey(response, setError, "Chave inválida para a API. Inclua-a ao final do \"app.json\" se você for um desenvolvedor.")

        if(!isValidKey){
            setError('Falha de autênticação, contacte o desenvolvedor!')
            setInput('')
            setCity('')
            Keyboard.dismiss()
            return
        }

        if (response.data.by === 'default') {
            setError('Cidade não encontrada!')
            setInput('')
            setCity('')
            Keyboard.dismiss()
            return
        }

        setCity(response.data)
        setInput('')
        Keyboard.dismiss()
    }

    function handleBackAction(){
        navigation.navigate('Home')
        Keyboard.dismiss()
    }

    return (
        <SearchWrapper>
            <SearchBackButtonHeader
                onPress={handleBackAction}
            />

            <SearchSearchBox
                inputValue={input}
                dispatch={setInput}
                onPress={handleSearch}
            />

            {!!city &&
                <SearchForecastCard
                    cityData={city}
                />
            }

            {!!error &&
                <ErrorLabel
                    text={error}
                />
            }
        </SearchWrapper>
    )
}