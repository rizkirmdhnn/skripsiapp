import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import { InputSearch } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons';


export class HelpMenuPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Bantuan'
    });

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{
                        flex: 1,
                        height: 150,
                        width: '100%',
                    }}>
                        <ImageBackground
                            style={{ flex: 1 }}
                            source={require('./../assets/images/help_top_background.jpg')}
                            resizeMode='cover'
                        >


                            <View style={{
                                flex: 1,
                                width: '100%',
                                height: '100%',
                                flexDirection: 'column',
                                backgroundColor: 'rgba(0,0,0,0.8)',
                                justifyContent: 'flex-end'
                            }}>
                                <View style={{ marginBottom: 5, width: '95%', height: 40, justifyContent: 'center', alignSelf: 'center' }}>
                                    <Text style={{ color: 'white' }}> Hi! <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold', }}>Gal Gadot</Text></Text>
                                    <Text style={{ color: 'white', paddingTop: 2.5, fontSize: 15, fontFamily: 'Quicksand-Regular' }}> Apa yang bisa kami bantu ? </Text>
                                </View>
                                <View style={{ width: '95%', height: 50, alignSelf: 'center' }}>
                                    <InputSearch
                                        // onFocus={() => navigate('FilterBefore')}
                                        placeholder="    Cari Pertanyaan atau Kata Kunci"
                                        style={{ fontFamily: 'Quicksand-Regular' }}
                                        icon="ic_search"
                                    />
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={{
                        flex: 6,
                        flexDirection: 'column',
                        height: 325,
                        width: '100%',
                        backgroundColor: '#e5e5e5'
                    }}>
                        <View style={{ height: 20, marginLeft: 10, marginRight: 10, marginBottom: 10, marginTop: 10, justifyContent: 'center' }}>
                            <Text style={{ paddingLeft: 10, color: 'black', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>FAQ</Text>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'white', height: 10, marginLeft: 10, marginRight: 10, marginBottom: 10, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', paddingLeft: 30, paddingRight: 30 }}>Apa Itu Crafter ? </Text>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'white', height: 50, marginLeft: 10, marginRight: 10, marginBottom: 10, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', paddingLeft: 30, paddingRight: 30 }}>Tidak Ada Yang Mau Mengambil Pesanan Saya</Text>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'white', height: 50, marginLeft: 10, marginRight: 10, marginBottom: 10, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', paddingLeft: 30, paddingRight: 30 }}>Cara Menarik Hasil Jual Ide</Text>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'white', height: 50, marginLeft: 10, marginRight: 10, marginBottom: 10, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', paddingLeft: 30, paddingRight: 30 }}>Bagaimana Cara Menjual Desain Saya ? </Text>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'white', height: 50, marginLeft: 10, marginRight: 10, marginBottom: 10, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', paddingLeft: 30, paddingRight: 30 }}>Bagaimana Jika ID Saya Di Curi ? </Text>
                        </View>
                    </View>


                    <View style={{
                        flex: 2,
                        flexDirection: 'column',
                        height: 325,
                        backgroundColor: '#e5e5e5'
                    }}>

                        <View>
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', paddingLeft: 20, color: 'black' }}>Topik</Text>
                        </View>
                        <View style={{
                            flex: 2,
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            marginLeft: 10,
                            marginRight: 10,
                            marginTop: 10,
                        }}>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ height: 95, width: 95 }}
                                        source={require('./../assets/images/ic_help_one.jpg')}
                                    />
                                </TouchableOpacity>
                                <Text style={{ marginTop: 5, fontSize: 15, fontSize: 15, fontFamily: 'Quicksand-Regular', }}>Umum</Text>
                            </View>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ height: 95, width: 95 }}
                                        source={require('./../assets/images/ic_help_two.jpg')}
                                    />
                                </TouchableOpacity>
                                <Text style={{ marginTop: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', }}>Fitur</Text>
                            </View>
                        </View>

                        <View style={{
                            flex: 2,
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            marginLeft: 10,
                            marginRight: 10,
                        }}>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ height: 95, width: 95 }}
                                        source={require('./../assets/images/ic_help_three.jpg')}
                                    />
                                </TouchableOpacity>
                                <Text style={{ marginTop: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', }}>Crafter</Text>

                            </View>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ height: 95, width: 95 }}
                                        source={require('./../assets/images/ic_help_four.jpg')}
                                    />
                                </TouchableOpacity>
                                <Text style={{ marginTop: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', }}> Transaksi</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        height: 400,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 30
                    }} >

                        <View style={{ backgroundColor: 'white', height: 175, width: '80%', marginBottom: 10, marginTop: 10, marginBottom: 40, alignContent: 'center' }} >
                            <Text style={{ color: 'black', fontSize: 15, textAlign: 'center', fontFamily: 'Quicksand-Bold' }}>BANTUAN KOMUNITAS</Text>
                            <Text style={{ color: 'black', fontSize: 15, textAlign: 'center', marginTop: 10 }}>Punya pertanyaan dan ingin berdiskusi seputar aplikasi kami?
                             Ayo bergabung di Komunitas penggemar dan pengguna aplikasi kami di Indonesia dan dapatkan jawabannya. Punya
                             Jawaban? Bergabunglah dengan komunitas dan berikan bantuan</Text>
                        </View>

                        <View style={{ width: '80%', height: 60, borderTopWidth: 1.5, borderColor: '#e1e3e8', borderBottomWidth: 1.5, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Regular', }}>Pengguna</Text>
                            <View style={{ flex: 1, borderRadius: 100, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ height: 40, width: 40, marginRight: 10 }}
                                        source={require('./../assets/images/ic_ig.jpg')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        style={{ height: 40, width: 40, marginRight: 10 }}
                                        source={require('./../assets/images/ic_fb.jpg')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ width: '80%', height: 60, borderBottomWidth: 1.5, borderColor: '#e1e3e8', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 15, fontFamily: 'Quicksand-Regular', }}>Crafter</Text>
                            <View style={{ flex: 1, borderRadius: 100, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ height: 40, width: 40, marginRight: 10 }}
                                        source={require('./../assets/images/ic_ig.jpg')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        style={{ height: 40, width: 40, marginRight: 10 }}
                                        source={require('./../assets/images/ic_fb.jpg')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>


                    <View style={{
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 20,
                        flex: 2,
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        height: 200,
                        alignItems: 'center',
                        alignContent: 'center',
                        marginBottom: 10
                    }}>
                        <View style={{ height: 70, width: '90%', justifyContent: 'center', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Bold', }}>Masih Perlu Bantuan ?</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black', textAlign: 'justify', fontSize: 15, fontFamily: 'Quicksand-Regular', }}>silakan hubungi customer care kami yang dengan senang hari melayani dan membantu Anda
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'red' }}> 24 Jam </Text>per harinya</Text>

                        </View>

                        <View style={{ flex: 2, flexDirection: 'row', height: 60, width: '90%', marginBottom: 10, }}>

                            <View style={{ flex: 1, flexDirection: 'column', marginRight: 5, marginLeft: 5 }} >

                                <View style={{ height: 70, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        style={{ height: 45, width: 45 }}
                                        source={require('./../assets/images/ic_sendemail.png')}
                                    />
                                </View>
                                <TouchableOpacity>
                                    <View style={{ height: 35, backgroundColor: '#ffc044', borderRadius: 100, marginLeft: 5, marginRight: 5, justifyContent: 'center' }}>
                                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Regular', }}>Mail</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'column', marginRight: 5, marginLeft: 5 }} >

                                <View style={{ height: 70, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        style={{ height: 45, width: 45 }}
                                        source={require('./../assets/images/ic_call.png')}
                                    />
                                </View>
                                <TouchableOpacity>
                                    <View style={{ height: 35, backgroundColor: '#ffc044', borderRadius: 100, marginLeft: 5, marginRight: 5, justifyContent: 'center' }}>
                                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Regular', }}>Call</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View >
        )
    }

}


export default HelpMenuPage