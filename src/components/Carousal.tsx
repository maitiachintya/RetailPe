// import React, { useEffect, useRef, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import { offers } from '../utils/data';
// import { Icons } from '../themes/Icons';

// const { width } = Dimensions.get('window');

// const OfferCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const flatListRef = useRef<FlatList>(null);

//   // 📌 Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       let nextIndex = activeIndex + 1;
//       if (nextIndex >= offers.length) {
//         nextIndex = 0;
//       }
//       flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
//       setActiveIndex(nextIndex);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   const handleScroll = (event: any) => {
//     const slide = Math.round(event.nativeEvent.contentOffset.x / (width * 0.9));
//     setActiveIndex(slide);
//   };

//   return (
//     <View style={styles.main}>
//       <FlatList
//         ref={flatListRef}
//         data={offers}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={item => item.id}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}
//         snapToInterval={width * 0.9}
//         decelerationRate="fast"
//         renderItem={({ item }) => (
//           <View style={[styles.offerCard, { width: width * 0.9 }]}>
//             <View style={styles.offerContent}>
//               <Text style={styles.offerTitle}>{item.title}</Text>
//               <Text style={styles.offerDesc}>{item.desc}</Text>
//               <Image source={item.image} style={styles.offerImage} />
//               <View style={styles.checkNowRow}>
//                 <Text style={styles.checkNowText}>Check Now</Text>
//                 <TouchableOpacity style={styles.checkNowBtn}>
//                   <Icons.arrow2Icon width={16} height={16} />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         )}
//         contentContainerStyle={{ paddingHorizontal: (width * 0.05) / 2 }}
//       />

//       {/* Continuous Line Pagination */}
//       <View style={styles.paginationLine}>
//         <View
//           style={[
//             styles.activeLine,
//             { width: `${((activeIndex + 1) / offers.length) * 100}%` },
//           ]}
//         />
//       </View>
//     </View>
//   );
// };

// export default OfferCarousel;

// const styles = StyleSheet.create({
//   main: {
//     paddingHorizontal: 5,
//   },
//   offerCard: {
//     borderRadius: 12,
//     height: 130,
//     backgroundColor: 'orange',
//     overflow: 'hidden',
//     paddingHorizontal: 20,
//     marginHorizontal: 15,
//   },
//   offerContent: {
//     position: 'absolute',
//     bottom: 20,
//     left: 16,
//     right: 16,
//   },
//   offerTitle: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 4,
//   },
//   offerDesc: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: 10,
//   },
//   offerImage: {
//     width: '100%',
//     position: 'absolute',
//     left: 110,
//     top: 0,
//     height: 95,
//     resizeMode: 'contain',
//   },
//   checkNowRow: {
//     flexDirection: 'row',
//     width: 113,
//     height: 40,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   checkNowBtn: {
//     backgroundColor: 'white',
//     borderRadius: 15,
//     width: 34,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 18,
//   },
//   checkNowText: {
//     color: '#fff',
//     fontSize: 13,
//     fontWeight: '600',
//   },
//   paginationLine: {
//     height: 4,
//     backgroundColor: '#ddd', // light line
//     borderRadius: 2,
//     overflow: 'hidden',
//     marginTop: 12,
//     marginHorizontal: 180,
//   },
//   activeLine: {
//     height: 4,
//     backgroundColor: '#6819F6', // active part
//     borderRadius: 2,
//   },
// });

import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
} from 'react-native';

// import { LoansVarity } from "../utills/data";
import { Icons } from '../themes/Icons';
import { LoansVarity } from '../utils/data';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.48;
const CARD_HEIGHT = height * 0.25;
const CARD_SPACING = 12;
const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;

const CardCarousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  //     const slide = Math.round(event.nativeEvent.contentOffset.x / SNAP_INTERVAL);
  //     setActiveIndex(slide);
  // };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.round(
      event.nativeEvent.contentOffset.x / (CARD_WIDTH + CARD_SPACING),
    );
    setActiveIndex(slide);
  };

  // Smooth auto scroll using scrollToOffset
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % LoansVarity.length;
        flatListRef.current?.scrollToOffset({
          offset: nextIndex * SNAP_INTERVAL,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.main}>
      <FlatList
        ref={flatListRef}
        data={LoansVarity}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id || index.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.97}
            style={styles.offerCard}
            onPress={() => console.log('Pressed:', item.title)}
          >
            {/* Badge */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Popular</Text>
            </View>

            <View style={{ marginTop: '6%', width: '80%', marginLeft: '6%' }}>
              <Text style={styles.offerTitle}>{item.title}</Text>
              <Text style={styles.offerDesc}>{item.desc}</Text>
            </View>
            {/* <item.image width={70} height={70} style={{ position: 'absolute', bottom: -1, right: -1, height: 75, width: 75 }} /> */}
            {/* <Icons.Insurance width={70} height={70} style={{ position: 'absolute', bottom: -1, right: -1, height: 75, width: 75 }} /> */}
            <Image
              source={item.image}
              style={[
                {
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  height: 75,
                  width: 75,
                  resizeMode: 'contain',
                },
                item.imgStyle, //  merge custom style from data
              ]}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        getItemLayout={(_, index) => ({
          length: SNAP_INTERVAL,
          offset: SNAP_INTERVAL * index,
          index,
        })}
      />

      {/* Pagination */}
      <View style={styles.paginationLine}>
        {LoansVarity.map((_, index) => (
          <View
            key={index}
            style={{
              flex: 1,
              marginHorizontal: 2,
              borderRadius: 2,
              backgroundColor: activeIndex === index ? '#6819F6' : '#ddd',
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default CardCarousal;

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    marginBottom: height * 0.025,
    // backgroundColor: "red",
  },
  offerCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 19,
    backgroundColor: '#fff',
    borderWidth: 0.15,
    borderColor: '#000',
    // padding: "8%",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  badge: {
    backgroundColor: '#CDADFF',
    // width: 71,
    // width: "40%",
    width: width * 0.21,
    // marginTop: 13,
    marginTop: '6%',
    // marginLeft: 12,
    marginLeft: '6%',
    // height: 20,
    // height: "12%",
    height: height * 0.025,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ffff',
  },
  offerTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#000',
  },
  offerDesc: {
    fontSize: 12,
    color: '#737373',
    fontWeight: '400',
    lineHeight: 16,
    marginTop: '3%',
    marginBottom: 10,
  },
  offerImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 12,
    right: 12,
  },
  paginationLine: {
    flexDirection: 'row',
    height: 4, // fixed height
    width: '10%', // enough width
    borderRadius: 2,
    overflow: 'hidden',
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#ddd', // background for inactive
  },
  paginationSegment: {
    flex: 1,
    height: '100%',
    width: 200,
    borderRadius: 2,
  },
});
