import {View, Text} from "react-native";
import React, {useContext} from "react";
import {styles, simpleStyles} from "../styles";
import MenuItem from "./MenuItem";

export const storage = {};

export default function Home({navigation}) {

    const groups = ['A1', 'A2', 'B1', 'B2'];


    return (
        <View style={{height: '100%', gap: '5px'}}>
            {groups.map((group, index) =>
                <MenuItem key={index} press={(e) => {
                    storage.group = e.target.innerHTML.toLowerCase();
                    navigation.navigate('Texts');
                }} content={group} />
            )}

        </View>
    );
}
