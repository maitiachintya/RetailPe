import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
  },
  touch: {
    borderRightColor: 'white',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  arrowIcon: {
    transform: [{ rotate: '180deg' }],
  },
});
