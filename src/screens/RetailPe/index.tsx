import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Icons } from '../../themes/Icons';
import LoanCard from '../../components/LoanCard';
import OfferCarousel from '../../components/Carousal';
import { styles } from './styles';
import { steps } from '../../utils/data';
import Gradient from '../../components/Gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootMainStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import FinanceOrbitDesign from '../../components/nucleaous';
import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import AnimatedGlow, { glowPresets } from 'react-native-animated-glow';

type RetailPeNavigationProp = NativeStackNavigationProp<
  RootMainStackParamList,
  'LoanDashboard'
>;

const RetailPe = () => {
  const navigation = useNavigation<RetailPeNavigationProp>();
  const [mpin, setMpin] = useState('');
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(360, {
        duration: 2500,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);

  const faqGlowPreset = {
    metadata: {
      name: 'FAQ Rainbow',
      textColor: '#000',
      category: 'Custom',
      tags: [],
    },
    states: [
      {
        name: 'default',
        preset: {
          cornerRadius: 10,

          glowLayers: [
            {
              colors: [
                '#ff0000',
                '#ff7f00',
                '#ffff00',
                '#00ff00',
                '#00ffff',
                '#0000ff',
                '#8b00ff',
              ],
              glowSize: 12,
              opacity: 0.15,
            },
          ],
        },
      },
      {
        name: 'press',
        transition: 150,
        preset: {
          glowLayers: [
            {
              glowSize: 12,
              opacity: 0.4,
            },
          ],
        },
      },
    ],
  };

  const [glowState, setGlowState] = useState('default');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerView}>
        <TouchableOpacity style={styles.touchProfile}></TouchableOpacity>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Icons.searchIcon width={20} height={20} stroke={'white'} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.touchNotify}>
          <Icons.bellIcon width={20} height={20} stroke={'white'} />
        </TouchableOpacity>
      </View>
      <View style={styles.allLoansRow}>
        <Text style={styles.sectionTitle}>All Loans</Text>
        <Gradient />
      </View>
      <View style={styles.loanGrid}>
        <LoanCard
          title="Shop Loan"
          desc="Get Loan Up to 2.5L"
          img={Icons.shopLoanIcon}
          // onPress={()=> navigation.navigate('PanVerification')}
          onPress={() => navigation.navigate('LoanApplied')}
        />
        <LoanCard
          title="Gold Loan"
          desc={'Invest smartly, grow your \n money'}
          img={Icons.goldLoanIcon}
        />
        <LoanCard
          title="LAMF"
          desc={'Get instant cash without \n selling your funds'}
          img={Icons.lamfIcon}
        />
        <LoanCard
          title="Soft Skill"
          desc={'Protect your shop with \n easy insurance'}
          img={Icons.softSkillIcon}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoanDashboard')}
        style={styles.dashBopardView}
      >
        <Text style={styles.dashboardText}>Loan Dashboard</Text>
        <Image source={Icons.dashboardIcon} style={styles.dashboardLogo} />
      </TouchableOpacity>
      {/* Credit Score Section */}
      <View style={styles.cardPurple}>
        <Text style={styles.cardTitle}>Know your{'\n'}Credit Score</Text>
        <Text style={styles.cardDesc}>
          Check your credit score instantly to unlock {'\n'} better loan offers
        </Text>
        <Image source={Icons.magnifyGlass} style={styles.magnifyLogo} />
        <TouchableOpacity style={styles.btnArrow}>
          <Icons.arrowIcon width={20} height={20} stroke={'white'} />
        </TouchableOpacity>
      </View>
      {/* FAQ */}

      {/* Rainbow Border */}
      <AnimatedGlow preset={faqGlowPreset} activeState={glowState}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.faqCard}
          onPressIn={() => setGlowState('press')}
          onPressOut={() => setGlowState('default')}
          onPress={() => navigation.navigate('ContactLists')}
        >
          <Text style={styles.faqText}>Retail Pe FAQ</Text>
          <Image source={Icons.faq} style={styles.faqLogo} />
        </TouchableOpacity>
      </AnimatedGlow>

      {/* Shop Loan Offer */}
      <OfferCarousel />
      <View style={styles.container}>
        {/* Heading with line */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>How To Get Loan</Text>
          <Gradient />
        </View>

        {/* Steps */}
        {steps.map((step, index) => (
          <View key={index} style={styles.stepRow}>
            {/* Left Side: Number + Line */}
            <View style={styles.left}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>{step.number}</Text>
              </View>
              {index !== steps.length - 1 && <View style={styles.dottedLine} />}
            </View>

            {/* Right Side: Title + Description */}
            <View style={styles.right}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDesc}>{step.desc}</Text>
            </View>
          </View>
        ))}
      </View>
      <FinanceOrbitDesign />
    </ScrollView>
  );
};

export default RetailPe;
