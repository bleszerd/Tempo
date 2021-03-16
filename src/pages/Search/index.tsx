import React, { useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TextInput, Keyboard } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"
import API, { key } from '../../services/API'
import { LinearGradient } from 'expo-linear-gradient'
import Conditions from '../../components/Conditions'

export default function Search() {
    const navigation = useNavigation()
    const [input, setInput] = useState('')
    const [city, setCity] = useState<null | any>(null)
    const [error, setError] = useState<null | string>(null)

    async function handleSearch() {
        const response = await API.get(`/weather?key=${key}&city_name=${input}`)

        if(response.data.valid_key === false){
            setError('Chave inválida para a API. Inclua-a ao final do "app.json" se você for um desenvolvedor.')
            return
        }

        if (response.data.by === 'default') {
            setError('Cidade não encontrada!')
            setInput('')
            setCity(null)
            Keyboard.dismiss()
            return
        }

        setCity(response.data)
        setInput('')
        Keyboard.dismiss()
    }

    if (city) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.backButtonContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                        <Feather
                            name="chevron-left"
                            size={32}
                            color="#000"
                        />
                        <Text style={{ fontSize: 22 }}>Voltar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.searchBox}>
                    <TextInput
                        value={input}
                        onChangeText={(value) => setInput(value)}
                        placeholder="Ex: Ribeirão Preto, SP"
                        style={styles.input}
                    />
                    <View style={styles.iconContainer}>
                        <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                            <Feather
                                name="search"
                                size={22}
                                color="#fff"
                            />

                        </TouchableOpacity>
                    </View>
                </View>


                <LinearGradient
                    style={styles.header}
                    colors={['#1ee6ff', '#97c1ff']}
                >
                    <Text style={styles.date}>{city.results.date}</Text>
                    <Text style={styles.city}>{city.results.city_name}</Text>
                    <View>
                        <Text style={styles.temp}>{city.results.temp}°</Text>
                    </View>

                    <Conditions weather={city}/>
                </LinearGradient>

            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                    <Feather
                        name="chevron-left"
                        size={32}
                        color="#000"
                    />
                    <Text style={{ fontSize: 22 }}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchBox}>
                <TextInput
                    value={input}
                    onChangeText={(value) => setInput(value)}
                    placeholder="Ex: Ribeirão Preto, SP"
                    style={styles.input}
                />
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                        <Feather
                            name="search"
                            size={22}
                            color="#fff"
                        />

                    </TouchableOpacity>
                </View>
            </View>

            {error && <Text style={{ marginTop: 25, fontSize: 18, paddingHorizontal: 20, textAlign: 'center' }}>{error}</Text>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%',
        backgroundColor: '#e8f0ff',
        alignItems: 'center'
    },
    backButtonContainer: {
        alignItems: 'flex-start',
        width: '100%',
        marginLeft: 15,
        marginBottom: 10,
    },
    backButton: {
        flexDirection: 'row',
    },
    searchBox: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "#ddd",
        width: '90%',
        height: 50,
        borderRadius: 8,
    },
    input: {
        width: '85%',
        height: 50,
        backgroundColor: '#fff',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        paddingHorizontal: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        width: '15%',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1ed6ff",
        height: 50,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    header: {
        marginTop: '5%',
        width: '90%',
        paddingTop: '3%',
        paddingBottom: '3%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
    },
    date: {
        color: "#fff",
        fontSize: 16,
    },
    city: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff",
    },
    temp: {
        color: "#fff",
        fontSize: 90,
        fontWeight: 'bold',
        
    }

})