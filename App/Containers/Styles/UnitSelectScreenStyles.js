import {StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors} from '../../Themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.azure,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.white
  },
  pickerContainer: {
    width: 150,
    paddingBottom: 100
  }
  
})