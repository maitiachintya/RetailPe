import { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';
import { Icons } from '../../themes/Icons';
// import Dialog from 'react-native-dialog';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/Ionicons';

const BusinessVerificationPage = ({ navigation, route }) => {
    const { pan, name, mobile, groupId, agent, gstNo, businessName: paramBusinessName, businessAddress: paramBusinessAddress } = route.params || {};
    const [businessName, setBusinessName] = useState(paramBusinessName && paramBusinessName.trim() !== '' ? paramBusinessName : 'NA');
    const [businessAddress, setBusinessAddress] = useState(paramBusinessAddress && paramBusinessAddress.trim() !== '' ? paramBusinessAddress : 'NA');
    useEffect(() => {
        setBusinessName(paramBusinessName && paramBusinessName.trim() !== '' ? paramBusinessName : 'NA');
        setBusinessAddress(paramBusinessAddress && paramBusinessAddress.trim() !== '' ? paramBusinessAddress : 'NA');
    }, [paramBusinessName, paramBusinessAddress]);
    const [isBusinessFocused, setIsBusinessFocused] = useState(false);
    const [isTypeFocused, setIsTypeFocused] = useState(false);
    const [isbusinessAddressFocused, setIsbusinessAddressFocused] = useState(false);
    const [isStockFocused, setIsStockFocused] = useState(false);
    const [isSalesFocused, setIsSalesFocused] = useState(false);
    const [isFootfallFocused, setIsFootfallFocused] = useState(false);
    const [isestabFocused, setIsestabFocused] = useState(false);
    const [isoutstandingFocused, setIsoutstandingFocused] = useState(false);
    const [businessType, setBusinessType] = useState('');
    const [dialogMessage, setDialogMessage] = useState('');
    const [stock, setstock] = useState('');
    const [dailySales, setDailySales] = useState('');
    const [footFall, setfootFall] = useState('');
    const [estab, setestab] = useState('');
    const [outstanding, setoutstanding] = useState('');
    const [visible, setVisible] = useState(false);
    // const showDialog = (message) => { setVisible(true); setDialogMessage(message); };
    const businessTypes = [
        'Grocery',
        'Stationary',
        'Pharmacy',
        'Electrical',
        'Electronic',
        'Pet Shop',
        'Sweet Shop',
        'Food & Beverage',
        'Furniture'
    ];
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const hideDialog = () => { setVisible(false); };
    useEffect(() => {
        if (visible) {
            const timeout = setTimeout(() => { hideDialog(); }, 1200);
            return () => clearTimeout(timeout);
        }
    }, [visible]);
    // const handleFocus = (setState) => setState(true);
    // const handleBlur = (setState) => setState(false);
    // const handleAppliedLoanClick = async () => {
    //     const stockValue = parseFloat(stock);
    //     const dailySalesValue = parseFloat(dailySales);
    //     const footFallValue = parseFloat(footFall);
    //     const estabValue = parseInt(estab, 10);
    //     const outstandingValue = parseFloat(outstanding);
    //     if (
    //         businessName &&
    //         businessType.trim() &&
    //         businessAddress &&
    //         !isNaN(stockValue) && stockValue > 0 &&
    //         !isNaN(dailySalesValue) && dailySalesValue > 0 &&
    //         !isNaN(footFallValue) && footFallValue > 0 &&
    //         !isNaN(estabValue) && estabValue > 0 &&
    //         !isNaN(outstandingValue) && outstandingValue >= 0) {
    //         try {
    //             const token = await AsyncStorage.getItem('tokenOr');
    //             const memberID = await AsyncStorage.getItem('memberID');
    //             const memberUpdateUrl = 'https://crm.retailpe.in/api/member/member-update-v1';
    //             const updateBody = {
    //                 pan, name, mobile, groupId: "002", agent: "001", gstNo,
    //                 businessName, businessType, businessAddress,
    //                 stock: stockValue, dailySales: dailySalesValue,
    //                 footFall: footFallValue, estab: estabValue,
    //                 outstanding: outstandingValue,
    //             };
    //             const response = await fetch(memberUpdateUrl, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     Authorization: 'Bearer ' + token,
    //                 },
    //                 body: JSON.stringify(updateBody),
    //             });
    //             const contentType = response.headers.get('Content-Type');
    //             const responseText = await response.text();
    //             if (contentType && contentType.includes('application/json')) {
    //                 const responseData = JSON.parse(responseText);
    //                 if (response.ok) {
    //                     await AsyncStorage.setItem('BusinessVerification', 'true');
    //                 } else {
    //                 }
    //             }
    //             const checkEliUrl = 'https://crm.retailpe.in/api/check-eli-api-v1';
    //             const apiBody = {
    //                 panName: name,
    //                 mobile,
    //                 memberId_api: memberID,
    //                 businessName,
    //                 panNumber: pan,
    //                 business_type: businessType,
    //                 location: businessAddress,
    //                 stock: stockValue,
    //                 daily_sales: dailySalesValue,
    //                 business_time: estabValue,
    //                 previous_emi: outstandingValue,
    //             };
    //             const eliResponse = await fetch(checkEliUrl, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     Authorization: 'Bearer ' + token,
    //                 },
    //                 body: JSON.stringify(apiBody),
    //             });
    //             const eliContentType = eliResponse.headers.get('Content-Type');
    //             const eliResponseText = await eliResponse.text();
    //             if (eliContentType && eliContentType.includes('application/json')) {
    //                 const eliResponseData = JSON.parse(eliResponseText);
    //                 const result = eliResponseData.member?.result;
    //                 if (result?.Eligibility === 'Not Eligible') {
    //                     navigation.navigate('NotEligible');
    //                 } else if (result?.Eligibility === 'Eligible') {
    //                     navigation.navigate('LoanEligibilityApplication', {
    //                         LoanAmount: result.LoanAmount,
    //                         Tenure: result.Tenure,
    //                         ROI: result.ROI,
    //                         member_id: memberID,
    //                     });
    //                 } else {
    //                     showDialog('Unexpected eligibility response!');
    //                 }
    //             } else {
    //                 showDialog('Invalid response from eligibility check.');
    //             }
    //         } catch (error) {
    //             showDialog('Something went wrong. Please try again.');
    //         }
    //     } else {
    //         showDialog('Verify your details or please try again later!');
    //     }
    // };
    // const userDetails = async () => {
    //     const mobile = await AsyncStorage.getItem('retailerMobile');
    //     const tokenId = await AsyncStorage.getItem('tokenOr');
    //     const dashboardUrl = 'https://crm.retailpe.in/api/member/member-details-v1';
    //     let resultD = await fetch(dashboardUrl, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: 'Bearer ' + tokenId,
    //         },
    //         body: JSON.stringify({ mobile }),
    //     });
    //     let getResultDash = await resultD.json();
    //     let statusCode = resultD.status;
    //     if (statusCode === 200) {
    //         const memberId = getResultDash.Retailer.member_id;
    //         AsyncStorage.setItem('memberID', memberId);
    //         AsyncStorage.setItem('memberName', getResultDash.Retailer.name);
    //     } else {
    //     }
    // };
    // useEffect(() => {
    //     userDetails();
    // }, [])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const token = await AsyncStorage.getItem('tokenOr');
    //             const memberID = await AsyncStorage.getItem('memberID');
    //         } catch (error) {
    //         }
    //     };
    //     fetchData();
    // }, []);
    const isFormValid = businessName.trim() && businessType.trim() && businessAddress.trim() &&
        !isNaN(parseFloat(stock)) && parseFloat(stock) > 0 &&
        !isNaN(parseFloat(dailySales)) && parseFloat(dailySales) > 0 &&
        !isNaN(parseFloat(footFall)) && parseFloat(footFall) > 0 &&
        !isNaN(parseInt(estab, 10)) && parseInt(estab, 10) > 0 &&
        !isNaN(parseFloat(outstanding)) && parseFloat(outstanding) >= 0;
    // useFocusEffect(
    //     useCallback(() => {
    //         const onBackPress = () => {
    //             return true;
    //         };
    //         const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    //         return () => {
    //             subscription.remove();
    //         };
    //     }, []));
    // useFocusEffect(
    //     useCallback(() => {
    //         const checkVerificationStatus = async () => {
    //             try {
    //                 const panVerified = await AsyncStorage.getItem('PanVerification');
    //                 const gstVerified = await AsyncStorage.getItem('GSTVerification');
    //                 if (panVerified === 'true' && gstVerified === 'true') {
    //                     const businessVerified = await AsyncStorage.getItem('BusinessVerification');
    //                     if (businessVerified === 'true') {
    //                         navigation.navigate('LoanEligibilityApplication');
    //                     }
    //                 }
    //             } catch (error) {
    //             }
    //         };
    //         checkVerificationStatus();
    //         const onBackPress = () => true;
    //         const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    //         return () => subscription.remove();
    //     }, [navigation]));
    // useEffect(() => {
    //     AsyncStorage.setItem('lastVisitedScreen', 'BusinessVerification');
    // }, []);
    const [loanAmount, setLoanAmount] = useState('');
    const [tenure, setTenure] = useState('');
    const [roi, setRoi] = useState('');
    // useEffect(() => {
    //     const getRouteParams = async () => {
    //         try {
    //             const paramsJson = await AsyncStorage.getItem('SavedRouteParams');
    //             if (paramsJson) {
    //                 const params = JSON.parse(paramsJson);
    //                 setLoanAmount(params.LoanAmount?.toString() || '');
    //                 setTenure(params.Tenure?.toString() || '');
    //                 setRoi(params.ROI?.toString() || '');
    //             }
    //         } catch (e) {
    //         }
    //     };
    //     getRouteParams();
    // }, []);
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#f0f0f0', paddingBottom: 130 }}>
            <View style={styles.BusinessContainer}>
                <View style={styles.BusinessHeader}>
                    <Text style={styles.BusinessTitle}>Business Verification</Text>
                </View>
                <View style={styles.MainBox4}>
                    <View style={[styles.InputBox3, { borderColor: isBusinessFocused ? '#6819e6' : 'black' }]}>
                        <Text style={[styles.TextInput1, { color: isBusinessFocused ? '#6819e6' : 'black' }]}>Business Name</Text>
                        <TextInput placeholderTextColor={'grey'} style={{ textAlign: 'left', paddingLeft: '4%', color: 'black', width: '100%' }} onChangeText={setBusinessName} cursorColor={'black'} value={businessName} />
                    </View>
                    <View style={[styles.InputBox3, { borderColor: isTypeFocused ? '#6819e6' : 'black' }]}>
                        <Text style={[styles.TextInput1, { color: isTypeFocused ? '#6819e6' : 'black' }]}>Business Type</Text>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: '4%', backgroundColor: 'transparent', width: '100%', }} onPress={() => { setDropdownVisible(!dropdownVisible); setIsTypeFocused(!dropdownVisible); }} activeOpacity={0.8}>
                            <Text style={{ color: businessType ? 'black' : 'grey', flex: 1 }}>{businessType || 'Select Business Type'}</Text>
                            {/* <Icons name={dropdownVisible ? 'chevron-up' : 'chevron-down'} size={22} color="#6819e6" /> */}
                        </TouchableOpacity>
                        {dropdownVisible && (
                            <View style={{ position: 'absolute', top: 49, left: 0, right: 0, backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: '#6819e6', zIndex: 999, elevation: 6, }}>
                                {businessTypes.map((type) => (
                                    <TouchableOpacity key={type} style={{ paddingVertical: 12, paddingHorizontal: 20, borderBottomWidth: 0.5, borderColor: '#eee', }} onPress={() => { setBusinessType(type); setDropdownVisible(false); setIsTypeFocused(false); }}>
                                        <Text style={{ color: 'black' }}>{type}</Text>
                                    </TouchableOpacity>))}
                            </View>)}
                    </View>
                    <View style={[styles.InputBox3, { borderColor: isbusinessAddressFocused ? '#6819e6' : 'black' }]}>
                        <Text style={[styles.TextInput1, { color: isbusinessAddressFocused ? '#6819e6' : 'black' }]}>Business Address</Text>
                        <TextInput placeholderTextColor={'grey'} style={{ textAlign: 'left', paddingLeft: '4%', color: 'black', width: '100%' }} value={businessAddress} onChangeText={setBusinessAddress} cursorColor={'black'} />
                    </View>
                    <View style={[styles.InputBox3, { borderColor: isStockFocused ? '#6819e6' : 'black' },]}>
                        <Text style={[styles.TextInput1, { color: isStockFocused ? '#6819e6' : 'black' },]}>Current Stock</Text>
                        <TextInput keyboardType='numeric'  placeholderTextColor={'grey'} style={{ textAlign: 'left', color: 'black', width: '100%', paddingLeft: '4%' }} value={stock} onChangeText={setstock} cursorColor={'black'} />
                    </View>
                    <View style={[styles.InputBox3, { borderColor: isSalesFocused ? '#6819e6' : 'black' },]}>
                        <Text style={[styles.TextInput1, { color: isSalesFocused ? '#6819e6' : 'black' },]}>Daily Sales</Text>
                        <TextInput keyboardType='numeric' placeholderTextColor={'grey'} style={{ textAlign: 'left', color: 'black', width: '100%', paddingLeft: '4%' }} value={dailySales} onChangeText={setDailySales} cursorColor={'black'} />
                    </View>
                    <View style={[styles.InputBox3, { borderColor: isFootfallFocused ? '#6819e6' : 'black' },]}>
                        <Text style={[styles.TextInput1, { color: isFootfallFocused ? '#6819e6' : 'black' },]}>Daily Footfall</Text>
                        <TextInput keyboardType='numeric'  placeholderTextColor={'grey'} style={{ textAlign: 'left', color: 'black', width: '100%', paddingLeft: '4%' }} value={footFall} onChangeText={setfootFall} cursorColor={'black'} />
                    </View>
                    <View style={[styles.InputBox3, { borderColor: isestabFocused ? '#6819e6' : 'black' },]}>
                        <Text style={[styles.TextInput1, { color: isestabFocused ? '#6819e6' : 'black' },]}>Store Established Year</Text>
                        <TextInput keyboardType='numeric' placeholder="Ex: Year" placeholderTextColor={'grey'} style={{ textAlign: 'left', color: 'black', width: '100%', paddingLeft: '4%', paddingBottom: '4%' }} value={estab} onChangeText={setestab} cursorColor={'black'} />
                    </View>
                    <View style={[styles.InputBox3, { borderColor: isoutstandingFocused ? '#6819e6' : 'black' },]}>
                        <Text style={[styles.TextInput1, { color: isoutstandingFocused ? '#6819e6' : 'black' },]}>Existing EMI</Text>
                        <TextInput keyboardType='numeric' placeholderTextColor={'grey'} style={{ textAlign: 'left', color: 'black', width: '100%', paddingLeft: 10, }} value={outstanding} onChangeText={setoutstanding} cursorColor={'black'} />
                    </View>
                    <TouchableOpacity style={[styles.BusinessButton, { opacity: isFormValid ? 1 : 0.5 }]} disabled={!isFormValid}>
                        <Text style={styles.ButtonText4}>Submit</Text>
                    </TouchableOpacity>
                </View>
                {/* <Dialog.Container visible={visible} contentStyle={styles.DialogContainer}>
                    <Dialog.Title style={styles.DialogTitle}>Alert</Dialog.Title>
                    <Dialog.Description style={styles.DialogDescription}>Please enter all the details!</Dialog.Description>
                </Dialog.Container> */}
            </View>
        </ScrollView>
    );
};
export default BusinessVerificationPage;