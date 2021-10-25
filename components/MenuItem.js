import {TouchableOpacity,TouchableWithoutFeedback, View, Text} from "react-native";
import React from "react";
import {styles, simpleStyles} from "../styles";

export default function MenuItem(props) {
    return (
        <TouchableWithoutFeedback onPress={props.press}>
            <View  style={styles.menuItemView}>
                <Text style={{height: '100%', paddingTop: '30px'}}>
                    {props.content}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}