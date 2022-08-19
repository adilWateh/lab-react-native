import React from "react";
import { View ,Text, StyleSheet} from "react-native";

export default function Forecast(props) {
    return (
        <View style={styles.layout}>
            <Text style={styles.mainStyle}>{props.main }</Text>
            <Text style={styles.descriptionStyle}>{props.description}</Text>
            <Text style={styles.celCiusStyle}>{props.temp} °C</Text>
            <Text></Text>
    </View>  
 )
}

const styles = StyleSheet.create({
    layout: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        // borderStyle: 'solid',
        // borderWidth: 5,
        color: '#fff',
    },
    mainStyle: {
        fontSize: 30,
        margin: 10,
        color: '#fff',
    },
    descriptionStyle: {
        fontSize: 20,
        margin: 20,
        color: '#fff',
    },
    celCiusStyle: {
        fontSize: 40,
        margin: 20,
        color: '#fff',
    }
});
