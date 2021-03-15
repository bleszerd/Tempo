import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './pages/Home'
import Search from './pages/Search'

const DrawerNavigator = createDrawerNavigator()

export default function Routes() {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen
                name="Home"
                component={Home}
                options={{title: 'Minha cidade'}}
            />
            <DrawerNavigator.Screen
                name="Search"
                component={Search}
                options={{title: 'Procurar'}}
            />
        </DrawerNavigator.Navigator>
    )
}