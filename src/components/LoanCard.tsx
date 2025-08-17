import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';

type LoanCardProps = {
  title: string;
  desc: string;
  img: ImageSourcePropType | string;
  onPress?: () => void;
};

const LoanCard: React.FC<LoanCardProps> = ({ title, desc, onPress, img }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <Image
        source={typeof img === 'string' ? { uri: img } : img}
        style={styles.img}
      />
    </TouchableOpacity>
  );
};

export default LoanCard;

const styles = StyleSheet.create({
  card: {
    width: '44%', // 2 cards per row
    backgroundColor: '#ffff',
    borderRadius: 12,
    padding: 14,
    marginLeft: 2,
    marginTop: 4,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
    color: '#222',
  },
  desc: {
    fontSize: 10,
    color: '#666',
  },
  img: {
    resizeMode: 'contain',
    width: 46,
    height: 46,
    position: 'absolute',
    right: 3,
    top: 31,
  },
});
