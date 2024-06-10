import React from 'react'
import { View, Text, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

const MobileLogin = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.textHeading}>
                My mobile
            </Text>
            <Text style={styles.textBody}>
            Please enter your valid phone number. We will send you a 4-digit code to verify your account. 
            </Text>
        </View>
    </SafeAreaView>

)
}

export default MobileLogin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    textHeading: {
        fontSize: 44,
        fontFamily: 'Poppins-Bold',
        color: '#000'
    },
    textBody: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: '#4D4D4D'
    },
})