import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import React from 'react';
import { Icons } from '../../themes/Icons';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootMainStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

type PanVerificationNavProp = NativeStackNavigationProp<
  RootMainStackParamList,
  'PanVerification'
>;

const PanVerification = () => {
  const navigation = useNavigation<PanVerificationNavProp>();

  return (
    <SafeAreaView style={styles.main}>
      {/* Header Container */}
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack} style={styles.touchArrow}>
          <Icons.arrowIcon style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Pan Verification</Text>
      </View>

      {/* Text and Input Container */}
      <Text style={styles.verifyTitle}>Verify PAN Manually</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inputMainContainer}>
            <View style={styles.card}>
              <TextInput style={styles.inputText} />
              <View style={styles.confirmView}>
                <Icons.arrowIcon style={styles.arrowIcon} />
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.9} style={styles.nextButton}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PanVerification;
