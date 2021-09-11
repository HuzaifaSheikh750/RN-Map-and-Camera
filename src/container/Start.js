import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Start = ({navigation}) => {
    return (
        <View style={styles.main}>
            <Text>Start Screen</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Camera')}>
                <Text>Go TO Map</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Start

const styles = StyleSheet.create({
    main:{
        backgroundColor:'red'
    }
})
