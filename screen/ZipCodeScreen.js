import React from "react";
import { FlatList, View, Text, StyleSheet, TouchableHighlight, ImageBackground, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
 { place: 'Hatyai', code: '90110' },
 { place: 'Trang', code: '92000' },
 { place: 'Chiangmai', code: '50000' },
 { place: 'Khonkaen', code: '40000' },
 { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather',{zipCode: code})
    }}>
        <View style={styles.zipItem} >
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)
export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
        <FlatList
            data={availableZipItems}
            keyExtractor={item => item.code}
            renderItem={({ item }) => <ZipItem{...item} navigation={navigation} />}
            
            />
            <Button title="Search" onPress={() => {navigation.navigate('Search')}}/>
        </ImageBackground>
    ); 
}

const styles = StyleSheet.create({
    backdrop: {
        height: '100%',
        width: '100%',
    },
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    zipPlace: {
        flex: 1,
        color: '#fff',
    },
    zipCode: {
        color: '#fff',
    }
})
