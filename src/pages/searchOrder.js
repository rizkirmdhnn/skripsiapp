import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, ScrollView, TouchableOpacity, Image, FlatList, ToastAndroid } from 'react-native';
import axios from 'axios';
import { IPSERVER } from './../shared/config';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';

export class searchOrderPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Crafter Menu',
        headerStyle: {
            shadowOpacity: 0,
            elevation: 0,
        }
    });

    constructor(props) {
        super(props)
        this.state = {
            dataOrder: '',
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
            ],
        }

    }

    componentDidMount() {
        console.log(this.props.navigation.state.params, 'mantap');
        const categoryId = this.props.navigation.state.params.categoryId;
        const typeOrder = this.props.navigation.state.params.type_order
        axios.post(`${IPSERVER}/ApapunOrders/getOrderActiveByCategory`, {
            categoryId, typeOrder
        }).then(response => {
            console.log(response.data, 'Get Order');
            this.setState({ dataOrder: response.data })
        }).catch(error => {
            console.log(error, 'Err Get Order');
            ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
        })
    }

    renderOrderList = (data) => {
        console.log(data, '098');
        return (
            <View style={{ padding: 10 }}>
                <TouchableOpacity
                    //  onPress={() => this.props.navigation.navigate('OrderForCrafter')}
                    onPress={() => this.props.navigation.navigate('OrderForCrafter', { datas: data })}
                >
                    <View style={styles.card}>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image
                                style={styles.thumbnailStyle}
                                source={{ uri: 'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg' }}
                                resizeMode='cover'
                            // source={{ uri: `${IPSERVER}/ApapunStorages/images/download/` + data.item.ApapunImages[0].name }}
                            />
                        </View>
                        <View style={{ flex: 1, height: 110, width: '100%', flexDirection: 'row', position: 'absolute', top: 135, backgroundColor: 'rgba(0,0,0,0.6)' }} >
                            <Image
                                style={{ width: 15, height: 18, marginTop: 5, marginLeft: 10, marginRight: 5, marginTop: 7 }}
                                source={require('./../assets/images/location_icon.png')}
                                resizeMode='contain'
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'white' }}>DKI Jakarta</Text>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'white' }}>Jakarta Pusat</Text>
                                {/* <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'white' }}>{data.item.ApapunUsersAddress.ApapunProvinces.name},</Text>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'white' }}>{data.item.ApapunUsersAddress.ApapunRegencies.name}</Text> */}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity >
            </View>
        )
    }


    render() {
        const { dataOrder } = this.state;
        return (
            <View style={{ flex: 1, }}>



                <View style={{ flex: 1, }}>
                    <FlatList
                        // data={dataOrder}
                        // contentContainerStyle={styles.list}
                        data={this.state.photo}
                        renderItem={this.renderOrderList.bind(this)}
                        showsHorizontalScrollIndicator={false}
                        horizontal={false}
                        numColumns={2}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 4,
        elevation: 2,
        backgroundColor: '#FFF'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    thumbnailStyle: {
        alignSelf: 'center',
        height: hp('26.5%'),
        width: wp('45%'),
        borderRadius: 4
    }
})
export default searchOrderPage;