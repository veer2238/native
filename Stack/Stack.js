import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages_Ecom/Home';
import Service from '../Pages_Ecom/Service';
import Contact from '../Pages_Ecom/Contact';
import About from '../Pages_Ecom/About';
import Main from '../Main';
import Splace from './Splace';
import Splace2 from './Splace2';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export class Stacks extends Component {
    render() {
        return (
            <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splace" component={Splace}   options={{headerShown:false}}/>
                <Stack.Screen name="Splace2" component={Splace2}  options={{headerShown:false}}/>
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Home" component={Home}  />
                <Stack.Screen name="Service" component={Service} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="About" component={About} />




            </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Stacks