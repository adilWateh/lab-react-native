import React, { useState ,useEffect} from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Forecast from "./Forecast";
import { Text } from "react-native";

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=582a1a611051b6787caeec716cb367e2`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
    });
 })
 .catch((error) => {
    console.warn(error);
 });
 }
    }, [props.zipCode])
    
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