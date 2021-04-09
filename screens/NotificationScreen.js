import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class NotificationScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Notification Screen</Text>
            </View>
        )
    }
}