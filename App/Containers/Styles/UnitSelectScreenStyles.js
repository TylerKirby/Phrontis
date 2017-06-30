import {StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors} from '../../Themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.azure,
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  picker: {
    width: 200
  },
  text: {
    color: Colors.white
  }
})