import {StyleSheet} from 'react-native'
import {Colors} from '../../Themes'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.azure,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: Colors.white
  },
  pickerContainer: {
    width: 150,
    paddingBottom: 100
  },
  subtitle: {
    fontSize: 20,
    color: Colors.yellowOrange,
    textAlign: 'center',
    fontFamily: 'ArialHebrew-Light'
  }
})
