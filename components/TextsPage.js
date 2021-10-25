import React, {useEffect,useContext, useState} from "react";
import MenuItem from "./MenuItem";
import texts from '../texts.json';
import {Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./Home";
import {storage} from "./Home";

function TextsScreen(props) {
    return (
        <MenuItem content={<Text>Text1</Text>} heightMenuItem={'25%'}/>
    );
}

export default function TextsPage({navigation}) {
    const [data] = texts;
    const [group, setGroup] = useState(storage.group) ;

    useEffect(()=> {

        // if (group) {
        //     data[`${group}`].map(({id, name, body}) => {
        //
        //     })
        // }

    }, [group]);

    function textOpen() {
        console.log('open')
    }

    return (
        <>
            {data[`${group}`].map(({id, name, body}) =>
                <MenuItem
                    key={id}
                    press={()=> {
                        navigation.navigate('TextReader');
                        storage.id = id;
                    }}
                    content={<Text>{name}</Text>}
                    heightMenuItem={'25%'}/>
            )}
        </>

    );
}
