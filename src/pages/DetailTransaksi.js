import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
import axios from 'axios';
import { IPSERVER } from '../shared/config';
import numeral from 'numeral';
import { COLOR } from '../shared/config';
import { CheckBox } from 'react-native-elements';

export class DetailTransaksiPage extends React.Component {

    static navigationOptions = {
        header: null
    }


    constructor(props) {
        super(props);
        this.state = {
            dataHighLight: ''
        };
    }

    componentDidMount() {
        // console.log(this.props.navi.state.params.crafter_Id, 'Props Bank Inform');
        AsyncStorage.getItem('VMDDEVELOPER').then((value) => {
            console.log(JSON.parse(value), 'Json Parse');
            const dataLogin = JSON.parse(value);
            if (value) {
                console.log(this.state.dataAkun, 'Data Bank');
                axios.post(`${IPSERVER}/ApapunUsers/getHighlightUser`, {
                    userId: dataLogin.userId
                })
                    .then(response => {
                        this.setState({ dataHighLight: response.data }, () => {
                            console.log(this.state.dataHighLight, 'Data High Light');
                        });
                    }).catch(error => {
                        console.log(error, 'Error Get Data High Light');
                        return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                    });
            }
        });
    }

    render() {
        return (
            <ScrollView
                style={{ flex: 1, backgroundColor: '#eaeaea' }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >
                <View style={{ flex: 1, height: 110, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', height: 50, width: '100%', alignItems: 'center', flex: 1, paddingLeft: 40 }}>
                        <Image style={{ height: 35, width: 35, borderRadius: 0, }}
                            source={require('./../assets/images/ic_wallet.png')}
                        />
                        <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Quicksand-Bold', paddingLeft: 10, alignItems: 'center' }}>
                            Total Apresiasi Desain Anda
                        </Text>
                    </View>

                    <Text style={{ fontSize: 27, margintop: 20, marginBottom: 20, textAlign: 'center', color: 'black', fontFamily: 'Quicksand-Bold' }}>
                        Rp. {this.state.dataHighLight.length === 0 ? '-' : numeral(this.state.dataHighLight[0].user_total_apresiasi).format('0,0')}
                    </Text>
                </View>

                <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black', paddingTop: 30, paddingLeft: 30 }}>
                    April 2018
                </Text>

                <View style={{
                    flex: 1,
                    height: 70,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    marginTop: 5,
                    marginLeft: 30,
                    marginRight: 30
                }}>
                    <View style={{
                        width: '35%',
                        flexDirection: 'column',
                        alignContent: 'center',
                        justifyContent: 'center',
                        // alignItems: 'center',
                        height: '100%',
                        // backgroundColor: 'red'
                    }}>
                        <Text style={{ color: 'black', fontFamily: 'Quicksand-Bold', fontSize: 13, paddingTop: 5, paddingLeft: 15 }}>28 April 2015</Text>
                        <Text style={{
                            color: 'black', fontFamily: 'Quicksand-Regular', fontSize: 13, paddingLeft: 15
                        }}  >12:30 PM</Text>

                    </View>


                    <View style={{ flexDirection: 'column', height: '50%', color: 'black', borderWidth: 1.5, borderColor: '#e5e5e5', marginLeft: 20, alignSelf: 'center' }} />


                    <View style={{
                        width: '65%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        padding: 5,
                        flex: 1,
                        // backgroundColor: 'red'
                    }}>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 13, fontFamily: 'Quicksand-Regular', textAlign: 'left', paddingLeft: 15 }}>Total apresiasi design anda bulan ini telah kami transfer</Text>
                        </View>
                    </View>
                </View>


                <View style={{
                    flex: 1,
                    height: 70,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    marginTop: 5,
                    marginLeft: 30,
                    marginRight: 30
                }}>
                    <View style={{
                        width: '35%',
                        flexDirection: 'column',
                        alignContent: 'center',
                        justifyContent: 'center',
                        // alignItems: 'center',
                        height: '100%',
                        backgroundColor: 'white'
                    }}>
                        <Text style={{ color: 'black', fontFamily: 'Quicksand-Bold', fontSize: 13, paddingTop: 5, paddingLeft: 15 }}>15 April 2015</Text>
                        <Text style={{
                            color: 'black', fontFamily: 'Quicksand-Regular', fontSize: 13, paddingLeft: 15
                        }}  >1:25 PM</Text>

                    </View>

                    <View style={{ flexDirection: 'column', height: '50%', color: 'black', borderWidth: 1.5, borderColor: '#e5e5e5', marginLeft: 20, alignSelf: 'center' }} />

                    <View style={{
                        width: '65%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        // height: '100%',
                        backgroundColor: 'white',
                        flex: 1,
                    }}>

                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <Text style={{ color: 'black', fontSize: 13, fontFamily: 'Quicksand-Regular', textAlign: 'left', paddingLeft: 15 }}>Anda mendapatkan Rp. 100.000 dari desain anda <Text style={{ color: 'red', fontSize: 13, fontFamily: 'Quicksand-Regular', textAlign: 'left' }}>1ASKJG9KLASB</Text></Text>
                        </View>
                    </View>
                </View>

                {/* <View style={{
                        width: '100%',
                        height: 100,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        marginTop: 5
                    }}>

                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            height: 100
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, paddingTop: 5, paddingLeft: 30 }}>28 April 2015</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 50, paddingLeft: 2, paddingTop: 2 }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 5, fontSize: 13, paddingLeft: 30
                                }}
                                >12:30 PM</Text>
                            </View>

                        </View>
                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            height: 100
                        }}>
                            <Text style={{ fontSize: 13, paddingTop: 5, paddingLeft: 30, fontFamily: 'Quicksand-Bold' }}>Total apresiasi design anda bulan ini telah kami transfer</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 50, paddingLeft: 2, paddingTop: 2 }}>
                            </View>
                        </View>


                    </View> */}

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    containerMainForm: {
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        flex: 1,
        height: 220,
        // width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#ef1c25'
    }


})

export default DetailTransaksiPage