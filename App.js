import React, {useState, useContext} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import Button from "react-native-web/src/exports/Button";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TextsPage from "./components/TextsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuItem from "./components/MenuItem";
import Home from "./components/Home";
import {styles, simpleStyles} from "./styles";
import LogoTitle from "./components/LogoTitle";
import TextReaderPage from "./components/TextReaderPage";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
            <NavigationContainer>
                <View style={{height: '100%'}}>
                    {/*<Header/>*/}
                    <Stack.Navigator>
                        <Stack.Screen
                            name={'Home'}
                            component={Home}
                            options={{
                                headerTitle: (props) => <LogoTitle {...props} />
                            }}/>
                        <Stack.Screen
                            name={'Texts'}
                            component={TextsPage}
                            options={{title: 'Texts'}}/>
                        <Stack.Screen
                            name={'TextReader'}
                            component={TextReaderPage}
                            options={{title: 'TextReader'}}/>
                    </Stack.Navigator>
                    {/*<Footer/>*/}
                </View>
            </NavigationContainer>

    );
}

