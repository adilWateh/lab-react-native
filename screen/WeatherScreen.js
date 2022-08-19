import React from "react";
import Weather from "../conponents/Weather";
import { View } from "react-native";

export default function WeatherScreen({ route }) {
    return (
        <View>
            <Weather zipCode={route.params.zipCode}/>
        </View>
    )
}