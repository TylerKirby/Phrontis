import {StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors} from '../../Themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#48639C',
    paddingBottom: Metrics.baseMargin,
  },
  cardContainer: {
    backgroundColor: 'white',
    width: Metrics.screenWidth * .75,
    height: Metrics.screenHeight / 4,
    borderWidth: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    borderWidth: 5,
    flexDirection: 'row'
  },
  cardText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center'
  }
})
