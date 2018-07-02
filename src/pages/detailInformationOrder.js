import React, { component } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class DetailInformationOrderPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Detail Pesanan'
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{ width: '100%', height: '90%' }}>
                    <ScrollView>
                        <View style={styles.container}>
                            <Text style={{ fontFamily: 'Quicksand-Bold' }}>Pesanan: 171227155OPQ</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <View
                                    style={{
                                        width: '35%', justifyContent: 'center',
                                    }}
                                >
                                    <Image
                                        style={{ width: 110, height: 110, alignSelf: 'center' }}
                                        source={require('./../assets/images/design1.jpg')}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View
                                    style={{
                                        width: '60%', flexDirection: 'column'
                                    }}
                                >
                                    <Text style={{ fontFamily: 'Quicksand-Bold' }}>Nama Produk</Text>
                                    <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, paddingTop: 2, backgroundColor: '#fff' }}>
                                        <Text style={{
                                            fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 12
                                        }}
                                        >My Own Table</Text>
                                    </View>
                                    <Text style={{ fontFamily: 'Quicksand-Bold' }}>Dibuat dari</Text>
                                    <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, paddingTop: 2, backgroundColor: '#fff' }}>
                                        <Text style={{
                                            fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 12
                                        }}
                                        >Workshop
                        </Text>
                                    </View>
                                    <Text style={{ fontFamily: 'Quicksand-Bold' }}>Kategori</Text>
                                    <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, paddingTop: 2, backgroundColor: '#fff' }}>
                                        <Text style={{
                                            fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 12
                                        }}
                                        >Furniture
                        </Text>
                                    </View>
                                    <Text style={{ fontFamily: 'Quicksand-Bold' }}>Estimasi Selesai</Text>
                                    <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, paddingTop: 2, backgroundColor: '#fff' }}>
                                        <Text style={{
                                            fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 12
                                        }}
                                        >10 hari
                        </Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 10 }}>Crafter</Text>
                            <View style={{ width: '100%', height: 120, flexDirection: 'row', backgroundColor: '#fff' }}>
                                <View style={{ width: '40%', justifyContent: 'center' }}>
                                    <Image
                                        style={{ height: 100, width: 100, borderRadius: 100, borderColor: 'white', alignSelf: 'center' }}
                                        source={require('./../assets/images/gal-gadot.jpg')}
                                    />
                                </View>
                                <View style={{ width: '60%', flexDirection: 'column', justifyContent: 'center' }}>
                                    <View style={{ width: '100%', alignSelf: 'auto' }} >
                                        <Text style={{ fontFamily: 'Quicksand-Bold' }}>Juminten Rahmawati Bunga Lestari</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                        <Image
                                            style={{ height: 15, width: 10 }}
                                            source={require('./../assets/images/location_icon.png')}
                                        />
                                        <View style={{ flex: 1 }}>
                                            <Text style={[styles.textStyle2, { marginLeft: 10 }]}>Indonesia, Kalimantan Selatan</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', marginTop: 3 }}>
                                        <Image
                                            style={{ height: 15, width: 15, }}
                                            source={require('./../assets/images/smiley.png')}
                                        />
                                        < View style={{ flex: 1 }}>
                                            <Text style={[styles.textStyle2, { marginLeft: 7 }]}>Rating: Sempurna (35)</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 5 }}>Jasa Pengiriman</Text>
                            <View
                                style={{ marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#fff' }}>
                                <Image
                                    style={{ marginTop: 10, marginBottom: 10, width: '40%', height: 70 }}
                                    source={require('../assets/images/pos-indonesia.png')}
                                    resizeMode='contain'
                                />
                                <Text style={{
                                    marginLeft: 10, marginTop: 35, flex: 1, fontFamily: 'Quicksand-Bold'
                                }}>
                                    Pos Indonesia</Text>
                            </View>
                            <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 5 }}>Alamat Pengiriman</Text>
                            <View style={{ height: 120, backgroundColor: '#fff', marginLeft: 5, marginRight: 5, marginTop: 5 }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 8, marginLeft: 5 }}>Home 1 {'\n'}</Text>
                                <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5 }}>Penerima: <Text style={{ fontFamily: 'Quicksand-Bold' }}>Judy {'\n'}{'\n'}</Text>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5 }}>(+62) 8129676388 {'\n'}Jl. Kembang Ayu III blok E5 no.20 Perumahan Puri Indah,{'\n'}
                                        DKI Jakarta, JAKARTA BARAT, KEMBANGAN </Text></Text>
                            </View>
                            <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 5 }}>Jumlah Biaya</Text>
                            <View style={{ width: '100%', height: 90, backgroundColor: '#fff', padding: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: '60%', borderRightWidth: 0.3, }}>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 12 }}>Harga Produk</Text>
                                    </View>
                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 12 }}>Rp 840.000</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                    <View style={{ width: '60%', borderRightWidth: 0.3, }}>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 12 }}>Pengiriman</Text>
                                    </View>
                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 12 }}>Rp 20.000</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                    <View style={{ width: '60%', borderRightWidth: 0.3 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 12 }}>Jumlah yang dipesan</Text>
                                    </View>
                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 12 }}>1 PCS</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 6 }}>
                                    <View style={{ width: '60%', borderRightWidth: 0.3 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold' }}>TOTAL</Text>
                                    </View>
                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'red' }}>Rp 860.000</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{
                    width: '100%', height: '10%', backgroundColor: 'rgba(0, 0, 0, 0.9)', flexDirection: 'row',
                    paddingTop: 10, paddingBottom: 10
                }} >
                    <View style={{ width: '15%', height: '100%', justifyContent: 'center' }}>
                        <Icon size={30} style={{ alignSelf: 'center', color: 'red' }} name='md-lock' />
                    </View>
                    <View style={{ width: '40%', height: '100%', justifyContent: 'center', borderRightWidth: 0.5 }}>
                        <View>
                            <Text style={{ color: 'white', fontSize: 12, textAlign: 'justify' }}>Pesanan akan terkunci setelah menekan tombol PROSES</Text>
                        </View>
                    </View>
                    <View style={{ width: '45%', height: '100%', justifyContent: 'center', marginLeft: 5 }}>
                        <TouchableOpacity
                            style={{
                                borderWidth: 0, borderRadius: 15, backgroundColor: 'red',
                                height: 35, width: 150, justifyContent: 'center'
                            }}
                        >
                            <Text style={{
                                color: 'white', fontFamily: 'Quicksand-Bold', textAlign: 'center',
                                fontSize: 18
                            }}>Proses</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5
    }
});


export default DetailInformationOrderPage;

