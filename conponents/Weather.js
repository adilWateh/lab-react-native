import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Forecast from "./Forecast";
import { Text } from "react-native";

export default function Weather(props) {
    const [ForecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0

    })

    
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text style={styles.zipCodeStyle}>Zip Code</Text>
                <Text style={styles.codeStyle}>{props.zipCode}</Text>
            <Forecast {...ForecastInfo} />
        </ImageBackground>
        
    )

}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems:'center',
        width: '100%',
        height:'100%'
    },
    zipCodeStyle: {
        marginTop: 50,
        fontSize: 50,
        color: '#fff',
    },
    codeStyle: {
        marginTop: 20,
        fontSize: 30,
        color: '#fff',
    }
})