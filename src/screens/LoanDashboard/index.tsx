import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { Icons } from '../../themes/Icons';
import OfferCarousel from '../../components/Carousal';

// Get screen dimensions
const { height: screenHeight } = Dimensions.get('window');

const LoanDashboard = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleScrollView = () => {
    setIsExpanded(!isExpanded);
  };

  const headerHeight = screenHeight * 0.09; // Example: 10% of screen height (~70px)

  return (
    <View style={{ flex: 1, backgroundColor: '#ffff' }}>
      {/* Fixed Header */}
      <View
        style={{
          height: headerHeight,
          width: '100%',
          backgroundColor: 'white',
          shadowColor: '#000',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 8,
          zIndex: 100,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            justifyContent: 'center',
            position: 'absolute',
            top: headerHeight * 0.35,
            left: 10,
            alignItems: 'center',
          }}
        >
          <Icons.arrow2Icon
            width={20}
            height={20}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Header</Text>
      </View>

      {/* Red Card */}
      <View
        style={{
          width: '92%',
          marginTop: '10%',
          height: screenHeight * 0.25,
          backgroundColor: 'red',
          alignSelf: 'center',
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 20, color: '#ffff', textAlign: 'center' }}>
          Welcome to this{'\n'}Loan Dashboard Page
        </Text>
      </View>

      {/* Carousel */}
      <View style={{ marginTop: '10%', marginBottom: '5%' }}>
        <OfferCarousel />
      </View>

      {/* ScrollView */}
      <ScrollView
        style={{
          flex: isExpanded ? undefined : 1,
          position: isExpanded ? 'absolute' : 'relative',
          top: isExpanded ? headerHeight : undefined,
          left: isExpanded ? 0 : undefined,
          right: isExpanded ? 0 : undefined,
          bottom: isExpanded ? 0 : undefined,
          backgroundColor: '#fff',
          overflow: 'hidden',

          // Remove radius and borders in expanded mode
          borderTopLeftRadius: isExpanded ? 0 : 25,
          borderTopRightRadius: isExpanded ? 0 : 25,
          borderTopWidth: isExpanded ? 0 : 0.3,
          borderLeftWidth: isExpanded ? 0 : 0.3,
          borderRightWidth: isExpanded ? 0 : 0.3,
          borderTopColor: '#767373ff',
          shadowColor: '#000', // shadow color
          shadowOffset: { width: 0, height: -4 }, // shadow up (negative height) top side e
          shadowOpacity: 0.2, // transparency
          shadowRadius: 6, // blur
          elevation: 28,

          zIndex: isExpanded ? 10 : 1,
          padding: isExpanded ? 15 : 0,
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: '15%' }}
        onScrollBeginDrag={() => {
          if (!isExpanded) setIsExpanded(true);
        }}
        scrollEventThrottle={16}
      >
        {/* Expand/Collapse Trigger */}
        <TouchableOpacity
          onPress={toggleScrollView}
          style={{
            marginTop: '6%',
            width: '8%',
            alignSelf: 'center',
            height: 4,
            backgroundColor: '#615c5cff',
            borderRadius: 2,
          }}
        />

        {/* Dummy Scroll Content */}
        {/* {[
          'brown',
          'green',
          'yellow',
          'pink',
          'blue',
          'black',
          'green',
          'yellow',
          'brown',
          'green',
          'yellow',
          'pink',
          'blue',
          'black',
          'green',
          'yellow',
          'brown',
          'green',
          'yellow',
          'pink',
          'blue',
          'black',
          'green',
          'yellow',
        ].map((color, idx) => (
          <View
            key={idx}
            style={{
              backgroundColor: color,
              width: '90%',
              height: 50,
              alignSelf: 'center',
              marginTop: '5%',
              borderRadius: 8,
            }}
          />
        ))} */}

        <View
          style={{
            backgroundColor: 'brown',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'green',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'pink',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'blue',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'black',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'green',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>

        <View
          style={{
            backgroundColor: 'black',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'green',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'black',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'green',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'black',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'green',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'black',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'green',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'black',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'green',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: '5%',
          }}
        ></View>
      </ScrollView>
    </View>
  );
};

export default LoanDashboard;
