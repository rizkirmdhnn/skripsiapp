/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { setCustomText } from 'react-native-global-props';
import { COLOR } from './shared/config';
import { createStackNavigator } from 'react-navigation';
import { StartScreen } from './pages/StartScreen';

import { DashboardPage } from './pages/dashboard.js';
import { LoginPage } from './pages/login.js';
import { OrderPage } from './pages/order.js';
import { PengaturanBankPage } from './pages/pengaturanBank.js'
import { FindingCrafterPage } from './pages/findingCrafter';
import { RegistrationBuyerPage } from './pages/registrationBuyer.js'
import { RegistrationCrafterPage } from './pages/registrationCrafter.js'
import { ProfileBuyerPage } from './pages/ProfileBuyer.js'
import { EditProfileBuyerPage } from './pages/EditProfileBuyer.js'
import { SettingAddressBuyerPage } from './pages/SettingAddressBuyer.js'
import { SettingAddressDetailBuyerPage } from './pages/SettingAddressDetailBuyer'
import { MyOrderPage } from './pages/myOrder.js';
import { CrafterPage } from './pages/crafter.js';
import { CrafterListPage } from './pages/CrafterList';
import { BerandaCrafterPage } from './pages/BerandaCrafter';
import { FashionCrafterPage } from './pages/FashionCrafter';
import { FurnitureCrafterPage } from './pages/FurnitureCrafter';
import { BeautyCrafterPage } from './pages/BeautyCrafter';
import { CrafterMyOrderPage } from './pages/CrafterMyOder';
import { OrderOnMyOrderPage } from './pages/OrderOnMyOder';
import { WishlistOnMyOrderPage } from './pages/WishListOnMyOrder';
import { HistoryOnMyOrderPage } from './pages/HistoryOnMyOrder';
import { DetailOrderPage } from './pages/DetailOrderOnMyOrder';


console.disableYellowBox = true;

// font
const customTextProps = {
  style: {
    fontFamily: 'Quicksand-Regular'
  }
}
setCustomText(customTextProps)

const Routes = createStackNavigator({
  pengaturanBank: {
    screen: PengaturanBankPage
  },
  StartScreen: {
    screen: StartScreen
  },
  CrafterMyOrder: {
    screen: CrafterMyOrderPage
  },
  DetailOrder : {
    screen : DetailOrderPage
  },
  OrderOnMyOrder: {
    screen: OrderOnMyOrderPage
  },
  WhislistOnMyOrder: {
    screen: WishlistOnMyOrderPage
  },
  HistoryOnMyOrder: {
    screen : HistoryOnMyOrderPage
  },
  Login: {
    screen: LoginPage
  },
  CrafterList: {
    screen: CrafterListPage
  },
  FindingCrafter: {
    screen: FindingCrafterPage
  },
  MyOrder: {
    screen: MyOrderPage
  },
  Dashboard: {
    screen: DashboardPage
  },
  SettingAddressBuyer: {
    screen: SettingAddressBuyerPage
  },
  SettingAddressDetailBuyer: {
    screen: SettingAddressDetailBuyerPage
  },
  EditProfileBuyer: {
    screen: EditProfileBuyerPage
  },
  ProfilePage: {
    screen: ProfileBuyerPage
  },
  StartScreen: {
    screen: StartScreen
  },
  FindingCrafter: {
    screen: FindingCrafterPage
  },
  Dashboard: {
    screen: DashboardPage
  },
  Order: {
    screen: OrderPage
  },
  RegistrationBuyer: {
    screen: RegistrationBuyerPage
  },
  RegistrationCrafter: {
    screen: RegistrationCrafterPage
  },
  Dashboard: {
    screen: DashboardPage
  },
  Order: {
    screen: OrderPage
  },
  Dashboard: {
    screen: DashboardPage
  },
  Crafter: {
    screen: CrafterPage
  },

  BerandaCrafter: {
    screen: BerandaCrafterPage
  },
  FashionCrafter: {
    screen: FashionCrafterPage
  },
  FurnitureCrafter: {
    screen: FurnitureCrafterPage
  },
  BeautyCrafter: {
    screen: BeautyCrafterPage
  },
  SettingAddressBuyerPage: {
    screen: SettingAddressBuyerPage
  },
  SettingAddressBuyerPage: {
    screen: SettingAddressBuyerPage
  },

  EditProfileBuyer: {
    screen: EditProfileBuyerPage
  },
  FindingCrafter: {
    screen: FindingCrafterPage
  },
  Order: {
    screen: OrderPage
  },
  Crafter: {
    screen: CrafterPage
  }
}, {
    cardStyle: { backgroundColor: '#fafafa' },
    navigationOptions: {
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'Quicksand-Bold',
        fontWeight: '300',
      },
      headerStyle: {
        backgroundColor: COLOR.headerBar,
      },
      headerTintColor: '#ffffff',
    }
  });

class App extends Component<{}> {


  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
