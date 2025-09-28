import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Icons } from '../../themes/Icons';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootMainStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

type AccountStatementNavProp = NativeStackNavigationProp<
  RootMainStackParamList,
  'LoanDashboard'
>;

const AccountStatement = () => {
  const { width, height: screenHeight } = Dimensions.get('window');
  const navigation = useNavigation<AccountStatementNavProp>();
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={navigation.goBack}
          activeOpacity={0.9}
          style={styles.touchArrow}
        >
          <Icons.arrow2Icon
            width={18}
            height={18}
            stroke={'#000'}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Details</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            width: 25,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: width * 0.05,
          }}
        >
          <Icons.arrowIcon width={18} height={18} stroke={'#000'} />
        </TouchableOpacity>
      </View>

      {/* <View style={{backgroundColor: "#6819E6", marginTop: "4%", alignItems: 'center', justifyContent: 'center', width: 120, height: 120, borderRadius: 170, alignSelf: 'center'}}> */}
        <Image source={Icons.user} style={styles.userProfile}/>
      {/* </View> */}
      <Text style={styles.profileName}>Anjali Joshi</Text>
      <View style={styles.row}>
        <View style={styles.v1Row}>
            <Text style={{fontSize: 14, color: "#b5b0b0ff"}}>Total Loan Ammount</Text>
            <Text style={{fontSize: 20, fontWeight: '700', color: "#6819E6"}}>90k</Text>
        </View>
        <View style={styles.v2Row}>
            <Text style={{fontSize: 14, textAlign: 'right', color: "#b5b0b0ff"}}>Outstanding Loan Ammount</Text>
            <Text style={{fontSize: 20, marginLeft: "4%", fontWeight: '700', color: "#6819E6"}}>50k</Text>
        </View>
      </View>
    </View>
  );
};

export default AccountStatement;
