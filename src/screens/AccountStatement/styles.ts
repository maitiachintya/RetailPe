import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  header: {
    height: height * 0.09,
    backgroundColor: '#ffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: "10%",
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,

    // Android shadow
    elevation: 10,
  },
  touchArrow: {
    position: 'absolute',
    left: width * 0.05,
  },
  arrowIcon: {
    transform: [{ rotate: '180deg' }],
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
  },
  userProfile: {
    resizeMode: 'contain',
    alignSelf: 'center',
    borderColor: '#6819E6',
    borderWidth: 2.2,
    marginTop: '3%',
    height: 100,
    borderRadius: 100,
    width: 100,
    backgroundColor: '#ffff',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: '4%',
  },
  row: {
    width: '94%',
    height: height * 0.1,
    alignSelf: 'center',
    marginTop: '3%',
    backgroundColor: '#ffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    paddingHorizontal: '3%',
    shadowRadius: 10,
    paddingVertical: '3%',
    elevation: 4,
    flexDirection: 'row',
    borderWidth: 0.4,
    borderRadius: 15,
    borderColor: '#d0ceceff',
  },
  v1Row: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffff',
    borderRightWidth: 0.8,
    borderRightColor: '#000',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  v2Row: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor: '#ffff',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});
