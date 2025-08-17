import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Icons } from '../../themes/Icons';
import LoanCard from '../../components/LoanCard';
import OfferCarousel from '../../components/Carousal';
import { styles } from './styles';
import { steps } from '../../utils/data';

const RetailPe = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar
        backgroundColor={'transparent'}
        hidden
        barStyle={'dark-content'}
      />
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
      </View>
      <View style={styles.loanGrid}>
        <LoanCard
          title="Shop Loan"
          desc="Get Loan Up to 2.5L"
          img={Icons.shopLoanIcon}
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
      <TouchableOpacity style={styles.dashBopardView}>
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
      <TouchableOpacity style={styles.faqCard}>
        <Text style={styles.faqText}>Retail Pe FAQ</Text>
        <Image source={Icons.faq} style={styles.faqLogo} />
      </TouchableOpacity>
      {/* Shop Loan Offer */}
      <OfferCarousel />
      <View style={styles.container}>
        {/* Heading with line */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>How To Get Loan</Text>
          {/* <View style={styles.headerLine}>
            <View style={styles.lineBold} />
            <View style={styles.lineThin} />
          </View> */}
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
    </ScrollView>
  );
};

export default RetailPe;
