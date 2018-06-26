import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';



export class ProfileBuyerPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (


            <ImageBackground
                source={require('./../assets/images/background_profile.jpeg')}
                style={styles.backgroundStyle}
            >
                <StatusBar
                    backgroundColor={COLOR.headerBar}
                    barStyle="dark-content"
                />

                <View
                // style={{ flex: 1 }}
                >

                    <View style={styles.containerImage}>
                        <Image style={styles.containerPhoto}
                            source={require('./../assets/images/profile.png')}
                        />
                    </View>

                    <View style={styles.containerMainForm}>

                        <View style={{ flexDirection: 'row', height: 60, width: '85%', alignItems: 'center', }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Gal Gadot
                            </Text>
                            <View>
                                <TouchableWithoutFeedback>
                                    <Image style={{ height: 18, width: 18, borderRadius: 0, marginLeft: 165 }}
                                        source={require('./../assets/images/pen_mainprof.png')}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                        <View style={{ width: '85%', borderColor: 'rgba(226, 226, 226, 0.2)', borderWidth: 1, marginTop: -5 }} />


                        <View style={{ flexDirection: 'row', height: 35, width: '85%', alignItems: 'center', }}>

                            <View style={{
                                flexDirection: 'row',
                                //  backgroundColor: 'blue',
                                height: '100%', width: '15%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                                    source={require('./../assets/images/envelope.png')}
                                />
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                // backgroundColor: 'skyblue', 
                                height: '100%', width: '85%',
                                alignItems: 'center',
                            }}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', paddingLeft: 10 }}>
                                    galgadot@gmail.com
                            </Text>
                            </View>

                        </View>


                        <View style={{ flexDirection: 'row', height: 35, width: '85%', alignItems: 'center', }}>

                            <View style={{
                                flexDirection: 'row',
                                //  backgroundColor: 'blue',
                                height: '100%', width: '15%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                                    source={require('./../assets/images/telp_mainprof.png')}
                                />
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                // backgroundColor: 'skyblue', 
                                height: '100%', width: '85%',
                                alignItems: 'center',
                            }}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', paddingLeft: 10 }}>
                                    081284485300
                            </Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', height: 35, width: '85%', alignItems: 'center', }}>

                            <View style={{
                                flexDirection: 'row',
                                //  backgroundColor: 'blue',
                                height: '100%', width: '15%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                                    source={require('./../assets/images/birthday_cake.png')}
                                />
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                // backgroundColor: 'skyblue', 
                                height: '100%', width: '85%',
                                alignItems: 'center',
                            }}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', paddingLeft: 10 }}>
                                    30 Januari 1995
                                    </Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', height: 70, width: '85%', marginTop: 5 }}>

                            <View style={{
                                flexDirection: 'row',
                                //  backgroundColor: 'blue',
                                height: '100%', width: '15%',
                                // alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                                    source={require('./../assets/images/black_loc_mainprof.png')}
                                />
                            </View>

                            <View style={{
                                flexDirection: 'column',
                                // backgroundColor: 'skyblue', 
                                height: '100%', width: '85%',
                                // alignItems: 'center',
                            }}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', paddingLeft: 10, textAlign: 'left' }}>
                                    Banten, Kabupaten Tangerang, Kelapa Dua
                                    </Text>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', paddingLeft: 10, paddingTop: 10, textAlign: 'left' }}>
                                    Jalan Komodo
                                    </Text>
                            </View>

                        </View>
                    </View>



                    <View style={styles.containerSecondForm}>


                        <View style={{ flexDirection: 'row', height: 70, width: '85%', }}>

                            <View style={{
                                flexDirection: 'row',
                                //  backgroundColor: 'blue',
                                height: '100%', width: '15%',
                                alignItems: 'center',
                                // justifyContent: 'center'
                            }}>
                                <Image style={{ height: 40, width: 40, borderRadius: 0, }}
                                    source={require('./../assets/images/ic_wallet.png')}
                                />
                            </View>

                            <View style={{
                                flexDirection: 'column',
                                // backgroundColor: 'skyblue',
                                height: '100%', width: '85%',
                                // alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 13, paddingLeft: 10, textAlign: 'left' }}>
                                    Total Apresiasi Design Anda
                                     </Text>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', paddingLeft: 10, textAlign: 'left' }}>
                                    Rp.120.000
                                     </Text>
                            </View>

                        </View>

                    </View>



                    <View style={styles.containerThirdForm}>

                        <View style={{
                            flexDirection: 'row',
                            //  backgroundColor: 'yellow', 
                            height: 70, width: '85%',
                        }}>

                            <View style={{
                                flexDirection: 'row',
                                //  backgroundColor: 'blue',
                                height: '100%', width: '15%',
                                alignItems: 'center',
                                // justifyContent: 'center'
                            }}>
                                <Image style={{ height: 40, width: 40, borderRadius: 0, }}
                                    source={require('./../assets/images/ic_design.png')}
                                />
                            </View>

                            <View style={{
                                // flexDirection: 'column',
                                // backgroundColor: 'skyblue',
                                height: '100%', width: '85%',
                                // alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 13, paddingLeft: 10, textAlign: 'left' }}>
                                    Total Design Anda
                                    </Text>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', paddingLeft: 10, textAlign: 'left' }}>
                                    3 Design
                                    </Text>
                            </View>

                        </View>

                    </View>










                </View>




            </ImageBackground >



        );
    }


















}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: '100%',
        height: '53%',
        // backgroundColor: 'grey'
    },
    containerImage: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        // zIndex: 2,
        // backgroundColor: 'yellow'

    },
    containerPhoto: {
        height: 155,
        width: 155,
        borderRadius: 100,
        // zIndex: 5
        borderColor: 'white',
        borderWidth: 3
    },
    containerMainForm: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'column',
        marginTop: 15,
        height: 230,
        width: '90%',
        alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    containerSecondForm: {
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
    containerThirdForm: {
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
    icons: {
        height: 30,
        width: 30,
        borderRadius: 100,
    },
});

export default ProfileBuyerPage
