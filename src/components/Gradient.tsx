import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Gradient = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#6819E6', '#b48ef1ff', '#ffff']}
      style={styles.linearGradient}
    >
      <View style={styles.shape}></View>
    </LinearGradient>
  );
};

export default Gradient;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
  },
  shape: {
    height: 2,
    borderRadius: 20,
  },
});
