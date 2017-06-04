import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    backgroundColor: '#48639C',
    flex: 1,
    justifyContent: 'center'
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
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'ArialHebrew-Light'
  },
  buttonBox: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
