import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../../typescript/types'

export default function Menu() {
    const navigation = useNavigation<HomeScreenNavigationProp>()

    return (
        <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.container}
        >
            <Feather
                name="menu"
                size={36}
                color="#373737"
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 9,
        width: 70,
        height: 70,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        left: 15,
        top: 25,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: .2,
        textShadowOffset: {
            width: 1,
            height: 3,
        }
    }
})