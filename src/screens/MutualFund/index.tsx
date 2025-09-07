import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Icons } from '../../themes/Icons';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootMainTabParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Gradient from '../../components/Gradient';
import GradientCard from '../../components/GradientCard';
import FundCard from '../../components/FundCard';

type MutualFundNavProp = BottomTabNavigationProp<
  RootMainTabParamList,
  'MutualFund'
>;

const MutualFund = () => {
  const navigation = useNavigation<MutualFundNavProp>();
  const [isSearchedFocused, setIsSearchFocused] = useState(false);

  const checkCondtion = () => {
    Alert.alert('This feature will come soon');
  };

  const back =() => {
    console.log("fdffdd");
    navigation.goBack();
  }

  const handleFocused = () => {
    setIsSearchFocused(true);
    navigation.setOptions({
      tabBarStyle: {
        display: 'none', //This is actually, hide the TabBar
      },
    });
  };

  const handleBlur = () => {
    setIsSearchFocused(false);
    navigation.setOptions({
      tabBarStyle: {
        backgroundColor: '#fff',
        height: 70,
        paddingBottom: 10,
        paddingTop: 10,
        borderTopWidth: 0,
        // Android
        elevation: 25,
        // iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
    });
  };

  return (
    <View style={styles.main}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: '6%' }}
          style={{ backgroundColor: '#ffff' }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={back}
              style={styles.touchArrow}
            >
              <Icons.arrow2Icon
                width={15}
                height={15}
                stroke={'#000'}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Mutual Funds</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={checkCondtion}
              style={styles.conditionTouch}
            >
              <Icons.arrow2Icon width={15} height={15} stroke={'#000'} />
            </TouchableOpacity>
          </View>
          <GradientCard style={styles.cardGradient}>
            <Text style={styles.cardGradTitle}>
              Grow Your Wealth invest{'\n'}in Mutual Funds
            </Text>
            <Text style={styles.cardGradSubTilte}>
              Invest smartly today and watch your{'\n'}money grow smoothly
            </Text>
            <Image source={Icons.WealthRupee} style={styles.rupeeLogo} />
          </GradientCard>
          <View
            style={[
              styles.searchBox,
              {
                borderColor: isSearchedFocused ? '#6819E6' : '#999',
              },
            ]}
          >
            <TextInput
              placeholder="Search by fund or category"
              style={styles.searchInput}
              placeholderTextColor="#999"
              onFocus={handleFocused}
              onBlur={handleBlur}
            />
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.searchIcon,
                {
                  backgroundColor: isSearchedFocused ? '#6819E6' : '#999',
                },
              ]}
            >
              <Icons.searchIcon width={16} height={16} stroke={'white'} />
            </TouchableOpacity>
          </View>
          <View style={styles.topChoosenFundsRow}>
            <Text style={styles.topChoosenFundsTitle}>Top Choosen Funds</Text>
            <Gradient />
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.horizontalList}
          >
            <FundCard
              name={'Nifty Midcap 150 \nIndex Fund'}
              returnRate="3Y returns: +21.99% p.a."
              ammount="Min. amount ₹500"
            />
            <FundCard
              name={'Nifty Next 50 Index \nFund'}
              returnRate="3Y returns: +21.99% p.a."
              ammount="Min. amount ₹500"
            />
            <FundCard
              name="Nifty Midcap 150 Index Fund"
              returnRate="3Y returns: +21.99% p.a."
              ammount="Min. amount ₹500"
            />
          </ScrollView>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MutualFund;
