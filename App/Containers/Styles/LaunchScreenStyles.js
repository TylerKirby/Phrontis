import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    backgroundColor: Colors.azure,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  title: {
    fontSize: 60,
    color: Colors.yellowOrange,
    textAlign: 'center',
    fontFamily: 'ArialHebrew-Light'
  },
  subtitle: {
    fontSize: 20,
    color: Colors.yellowOrange,
    textAlign: 'center',
    fontFamily: 'ArialHebrew-Light'
  },
  buttonBox: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
