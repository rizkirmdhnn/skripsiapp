import React, { Component } from 'react';
import { AsyncStorage, View, ImageBackground, Image, Text, TouchableHighlight } from 'react-native';


export class MenuLoginPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    componentWillMount() {
		AsyncStorage.removeItem('VMDDEVELOPER');
	}

    render() {
        return (
            <ImageBackground
                style={{ flex: 1 }}
                source={require('./../assets/images/bg-login.png')}
                resizeMode='cover'
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >
                <View style={{
                    flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5 )', margin: 30, borderRadius: 30, alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image
                        style={{ width: 300, height: 300 }}
                        source={require('./../assets/images/ic_logo2.png')}
                    />
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={{ width: '90%', height: 50, borderRadius: 50, backgroundColor: '#ef1c25', justifyContent: 'center', marginTop: 50 }}
                    >
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'white', textAlign: 'center' }}>LOGIN</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('RegistrationBuyer')}
                        style={{ width: '90%', height: 50, borderRadius: 50, justifyContent: 'center', borderColor: 'white', borderWidth: 1, marginTop: 15 }}
                    >
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'white', textAlign: 'center' }}>REGISTER</Text>
                    </TouchableHighlight>
                    {/* <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('ForgotPassword')}
                        style={{ width: '90%', height: 50, borderRadius: 50, justifyContent: 'center', borderColor: 'white', borderWidth: 1, marginTop: 15 }}
                    >
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'white', textAlign: 'center' }}>Lupa Password</Text>
                    </TouchableHighlight> */}
                </View >
            </ImageBackground >
        );
    }

}

export default MenuLoginPage;