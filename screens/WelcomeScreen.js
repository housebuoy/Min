import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../assets/images/logo.png';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

const WelcomeScreen = () => {

    const [fontsLoaded, fontError] = useFonts({
        'GrandHotel-Regular': require('../assets/fonts/GrandHotel-Regular.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'), 
    });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.logoText}>mingle</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subText}>Powered by</Text>
        <Text style={styles.subLogoText}>mingle.inc</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  contentContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoText: {
    fontSize: 64,
    fontFamily: 'GrandHotel-Regular',
    color: '#000'
  },
  subLogoText: {
    fontSize: 24,
    fontFamily: 'GrandHotel-Regular',
    color: '#690002'
  },
  subText: {
    fontSize: 16,
    marginBotto : 10,
    fontFamily: 'Poppins-Medium',
    color: '#7D7D7B'
  },
});