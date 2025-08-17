import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { offers } from '../utils/data';
import { Icons } from '../themes/Icons';

const { width } = Dimensions.get('window');

const OfferCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // 📌 Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= offers.length) {
        nextIndex = 0;
      }
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = (event: any) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / (width * 0.9));
    setActiveIndex(slide);
  };

  return (
    <View style={styles.main}>
      <FlatList
        ref={flatListRef}
        data={offers}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={width * 0.9}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <View style={[styles.offerCard, { width: width * 0.9 }]}>
            <View style={styles.offerContent}>
              <Text style={styles.offerTitle}>{item.title}</Text>
              <Text style={styles.offerDesc}>{item.desc}</Text>
              <Image source={item.image} style={styles.offerImage} />
              <View style={styles.checkNowRow}>
                <Text style={styles.checkNowText}>Check Now</Text>
                <TouchableOpacity style={styles.checkNowBtn}>
                  <Icons.arrow2Icon width={16} height={16} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingHorizontal: (width * 0.05) / 2 }}
      />

      {/* Continuous Line Pagination */}
      <View style={styles.paginationLine}>
        <View
          style={[
            styles.activeLine,
            { width: `${((activeIndex + 1) / offers.length) * 100}%` },
          ]}
        />
      </View>
    </View>
  );
};

export default OfferCarousel;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 5,
  },
  offerCard: {
    borderRadius: 12,
    height: 130,
    backgroundColor: 'orange',
    overflow: 'hidden',
    paddingHorizontal: 20,
    marginHorizontal: 15,
  },
  offerContent: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
  offerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  offerDesc: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  offerImage: {
    width: '100%',
    position: 'absolute',
    left: 110,
    top: 0,
    height: 95,
    resizeMode: 'contain',
  },
  checkNowRow: {
    flexDirection: 'row',
    width: 113,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkNowBtn: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 34,
    alignItems: 'center',
    justifyContent: 'center',
    height: 18,
  },
  checkNowText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  paginationLine: {
    height: 4,
    backgroundColor: '#ddd', // light line
    borderRadius: 2,
    overflow: 'hidden',
    marginTop: 12,
    marginHorizontal: 180,
  },
  activeLine: {
    height: 4,
    backgroundColor: '#6819F6', // active part
    borderRadius: 2,
  },
});
