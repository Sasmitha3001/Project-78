import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import firebase from 'firebase';
import db from '../config'

export default class ExchangeScreen extends Components{
    constructor(){
        super()
    }
    render(){
        return(
            <View>
                <Text>Exchange Screen</Text>
            </View>
        )
    }
}