import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Icons } from '../../themes/Icons';

const handleContinue = () => {
  console.log('Pressing...');
};

const LoanApplied = () => {
  return (
    <View style={styles.main}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Loan Applied</Text>
          <TouchableOpacity activeOpacity={0.9}>
            <Image source={Icons.Share} style={styles.shareIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            source={Icons.LoanVerifiedLogo}
            style={styles.loanVerifyLogo}
          />
          <Text style={styles.verifyTilteTxt}>Verification Successfull</Text>

          {/* Details Container */}
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Details</Text>
            <View style={styles.verifyContainer}>
              <Text style={styles.verifiedText}>Verified</Text>
              <TouchableOpacity activeOpacity={0.9}>
                <Image source={Icons.DetailsIcon} style={styles.verifyLogo} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Eligibility ammount container */}
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Your Eligible Ammount</Text>
            <View style={styles.verifyContainer}>
              <Text style={styles.verifiedText}>50,000</Text>
              <TouchableOpacity activeOpacity={0.9}>
                <Image source={Icons.DetailsIcon} style={styles.verifyLogo} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Expected Date Container */}
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Expected Date</Text>
            <View style={styles.verifyContainer}>
              <Text style={styles.verifiedText}>00/00/0000</Text>
              <TouchableOpacity activeOpacity={0.9}>
                <Image source={Icons.DetailsIcon} style={styles.verifyLogo} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Terms & Conditions */}
          <View style={styles.checkboxContainer}>
            <TouchableOpacity style={styles.checkboxTouch}>
              <Image source={Icons.CheckBox} style={styles.checkboxIcon} />
              <Text style={styles.termsText}>I accept Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleContinue}
          activeOpacity={0.9}
          style={styles.touchBtn}
        >
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoanApplied;
