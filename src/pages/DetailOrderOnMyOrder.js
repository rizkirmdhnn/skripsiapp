import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';



export class DetailOrderPage extends React.Component {

    render() {
        return (
            <View style={{
                flex: 1
            }}>

                <Text style={{alignSelf:'center'}}> This Is Detail Order Page</Text>


            </View>
        )
    }

}

const styles = StyleSheet.create({


});

export default DetailOrderPage

