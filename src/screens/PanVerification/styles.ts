import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    height: '5%',
    width: '100%',
    backgroundColor: '#6819E6',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  touchArrow: {
    position: 'absolute',
    left: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIcon: {
    transform: [{ rotate: '180deg' }],
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
  verifyTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: '3%',
    marginLeft: '3%',
    color: 'black',
  },
  inputMainContainer: {
    height: 100,
    marginTop: '3%',
    paddingHorizontal: '3%',
  },
  card: {
    height: '90%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    // iOS shadow
    shadowColor: '#000', // shadow color
    shadowOffset: { width: 0, height: 2 }, // how far shadow is offset
    shadowOpacity: 0.25, // transparency
    shadowRadius: 3.84, // blur radius

    // Android shadow
    elevation: 5, // controls shadow
    backgroundColor: '#fff',
  },
  inputText: {
    height: '55%',
    width: '82%',
    borderRadius: 10,
    borderColor: 'black',
    paddingHorizontal: '5%',
    borderWidth: 1,
  },
  confirmView: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    backgroundColor: 'black',
  },
  nextButton: {
    backgroundColor: '#6819E6',
    marginTop: '4%',
    alignSelf: 'center',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    shadowColor: '#6819E6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
    width: '95%',
  },
  btnText: {
    fontSize: 15,
    color: 'white',
  },
});
