import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  header: {
    height: 69,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    // iOS shadow (only bottom)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // push shadow down
    shadowOpacity: 0.15,
    shadowRadius: 3,

    // Android shadow (only bottom)
    elevation: 13,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  touchArrow: {
    position: 'absolute',
    left: '5%',
  },
  arrowIcon: {
    transform: [{ rotate: '180deg' }],
  },
  conditionTouch: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 2,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '5%',
  },
  cardGradient: {
    alignSelf: 'center',
    marginTop: '4%',
    width: '95%',
    shadowColor: '#6819E6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 8,
    height: 137,
  },
  cardGradTitle: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '800',
    marginLeft: '4%',
    color: '#ffff',
  },
  cardGradSubTilte: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: '600',
    marginLeft: '4%',
    color: '#ffff',
  },
  rupeeLogo: {
    width: 117,
    height: 86,
    position: 'absolute',
    right: 16,
    top: 36,
  },
  searchBox: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 30,
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    height: 39,
    marginTop: '5%',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: 'gray',
  },
  searchIcon: {
    width: 28,
    height: 28,
    backgroundColor: '#6819E6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  topChoosenFundsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    width: '92%',
    alignSelf: 'center',
  },
  topChoosenFundsTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginRight: 6,
  },
  horizontalList: {
    marginTop: '5%',
    paddingLeft: '5%',
  },
});
