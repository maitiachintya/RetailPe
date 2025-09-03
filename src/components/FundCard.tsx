import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface FundCardProps {
  name: string;
  returnRate: string;
  ammount: string;
}
const FundCard: React.FC<FundCardProps> = ({ name, returnRate, ammount }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.return}>{returnRate}</Text>
      <Text style={styles.amount}>{ammount}</Text>
    </View>
  );
};

export default FundCard;

const styles = StyleSheet.create({
  card: {
    // width: ,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginRight: 12,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    marginBottom: 6,
  },
  return: {
    fontSize: 12,
    fontWeight: '600',
    color: 'green',
    marginBottom: 4,
  },
  amount: {
    fontSize: 12,
    fontWeight: '500',
    color: '#555',
  },
});
