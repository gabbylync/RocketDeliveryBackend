import { StyleSheet } from 'react-native';

const orderstyles = StyleSheet.create({
  categoriesItemContainer: {
    // flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 115,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  categoriesPhoto: {
    width: 130,
    height: 100,
    borderRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: -280,
   marginTop: 1,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  categoriesName: {
    // flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  marginTop: -80,
  // marginRight: 40,
    color: '#333333',
    
  },
  categoriesInfo: {
    marginTop: 0,
    marginBottom: 40,
    // marginRight: 70,

  },
  restaurantName: {
   fontFamily: "Oswald",
   fontSize: 16,
   fontWeight: "bold", 
   marginLeft: 22,
  },
  menuitemz: {
    fontFamily: 'Oswald',
    fontSize: 16,
    marginLeft: 25,

  },
  createOrder: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 0,
    width: 150,
    height: 30,
    bottom: 46,
   marginLeft: 300,
   
    
  },

  fab1 :{
    position: 'absolute',
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    right: 110,
    bottom: 596,
    backgroundColor: '#222126',
    borderRadius: 40,
    elevation: 8
  },
  fab2 :{
    position: 'absolute',
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    right: 35,
    bottom: 596,
    backgroundColor: '#222126',
    borderRadius: 40,
    elevation: 8
  },
  fabIcon1: {
    fontSize: 15,
    color: 'white'
  },
  fabIcon2: {
    fontSize: 15,
    color: 'white'
  },
  count:{
    position: 'absolute',
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    right: 65,
    bottom: 580,
    borderRadius: 40,
    elevation: 8
  }
  
});

export default orderstyles;
