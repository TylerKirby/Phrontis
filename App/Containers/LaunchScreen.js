import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import FullButton from '../Components/FullButton';

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
       <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.title}>
              Phrontis
            </Text>
          </View>
          <FullButton text="Vocab"/>
        </ScrollView>
      </View>
    )
  }
}
