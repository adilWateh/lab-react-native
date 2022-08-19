import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
    const [zipCodeList, SetZipCodeList] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/rathpanyowat/Thai-zip-code-latitude-and-longitude/master/data.json')
            .then((response) => response.json())
        .then((data)=> SetZipCodeList(data))
    })
    const [zipCode, setZipCode] = useState('')
    const navigation = useNavigation();
    const goToWeather = () => {
        if (zipCode.length == 0){
            alert("Zip code is empty\nPlease type zip code")
        }
        else if (zipCode.length != 5) {
            alert("Invalid Zip Code\nPlease type valid zip code")
        }
        else {
            
            if (zipCodeList.some(zip => zip.zip == zipCode)) {
                navigation.navigate("Weather", {zipCode: zipCode})
            }
            else {
                alert("Zip code does not exist")
                
            }   
        }
    }
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <SafeAreaView>
                <Text style={styles.labelText}>Type Thailand zip code</Text>
                <TextInput
                    style={styles.input} 
                    onChangeText={ (text) => setZipCode(text)}
                    keyboardType='number-pad'
                    placeholder='Zip Code'
                    onSubmitEditing={goToWeather}
                />
                <View style={styles.container}>
                    <Button title="search" onPress={goToWeather}/>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%'
        
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      color: '#fff',
        borderColor: '#fff',
    },
    labelText: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '20%',
        color: '#fff'
    },
    container: {
        marginHorizontal: '25%',
        width: '50%',
    }
  });