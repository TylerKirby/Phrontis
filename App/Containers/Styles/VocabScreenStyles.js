import {StyleSheet} from 'react-native'
import {Metrics, Colors} from '../../Themes'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.azure,
    paddingBottom: Metrics.baseMargin
  },
  cardContainer: {
    backgroundColor: 'white',
    width: Metrics.screenWidth * 0.75,
    height: Metrics.screenHeight / 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  cardText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center'
  }
})
