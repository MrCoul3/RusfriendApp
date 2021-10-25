import {View} from "react-native";
import React from "react";
import {styles, simpleStyles} from "../styles";

export default function Header() {
    return (
        <View style={{...simpleStyles.header}}>
            <h2>rusfriend.com</h2>
        </View>
    );
}