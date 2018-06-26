import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';



export class SettingAddressBuyerPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Edit Address'
    }

    render() {
        return (

            <View >


                <View style={styles.containerMainAddress}>


                    <View style={{
                        width: '100%',
                        height: 50,
                        // backgroundColor: 'red',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 5
                    }}>

                        <View style={{
                            width: '45%',
                            height: 50,
                            // backgroundColor: 'yellow'
                        }}>

                            <View style={{
                                paddingTop: 10
                            }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}> Home 1</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 13.5, paddingTop: 3 }}> Penerima : Judy </Text>
                            </View>


                        </View>

                        <View style={{
                            width: '35%',
                            height: 35,
                            // backgroundColor: 'skyblue'
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}>
                            <View style={{
                                paddingTop: 7
                            }}>
                                <TouchableWithoutFeedback>
                                    <Image style={{ height: 20, width: 20, borderRadius: 0, }}
                                        source={require('./../assets/images/pen_address.png')}
                                    />

                                </TouchableWithoutFeedback>
                            </View>

                            <View style={{
                                paddingLeft: 8, paddingTop: 7
                            }}>
                                <TouchableWithoutFeedback>
                                    <Image style={{ height: 20, width: 15, borderRadius: 0 }}
                                        source={require('./../assets/images/trash_address.png')}
                                    />
                                </TouchableWithoutFeedback>
                            </View>



                        </View>
                    </View>


                    <View style={{
                        width: '78%',
                        height: 50,
                        // backgroundColor: 'red',
                        alignSelf: 'center',
                        marginTop: 5
                    }}>

                        <View>
                            <Text style={{ fontSize: 12 }}>(+62)<Text> 84485300 </Text></Text>


                            <Text style={{ fontSize: 12 }}>Jl. Duri Kepa 4 No 5 </Text>

                            <Text style={{ fontSize: 12 }} >Kebon Jeruk, Jakarta Barat </Text>
                        </View>


                    </View>


                     <View style={{
                        width: '78%',
                        height: 20,
                        // backgroundColor: 'skyblue',
                        alignSelf: 'center',
                        marginTop: 5
                        
                    }}>
                        <View>
                            <Text style={{ fontSize: 12, color: 'red' }}>Alamat Utama </Text>
                        </View>

                    </View>




                </View>












            </View>




        )
    }

}

const styles = StyleSheet.create({

    containerMainAddress: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'column',
        marginTop: 5,
        height: 150,
        width: '90%',
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },

    containerSecondAddress: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        marginTop: 5,
        height: 70,
        width: '90%',
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    containerIcon: {
        height: 155,
        width: 155,
        borderRadius: 100,
        // zIndex: 5
        borderColor: 'white',
        borderWidth: 3
    },


});

export default SettingAddressBuyerPage
