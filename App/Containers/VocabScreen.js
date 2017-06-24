import React from 'react';
import { View, Text, Picker } from 'react-native';
import RoundedButton from '../Components/RoundedButton';
import vocab from '../../GreekAppData/vocab.json';

// Styles
import styles from './Styles/VocabScreenStyles'


export default class VocabScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedChapter: 1};

  }

  onPress() {
    console.log('Vocab data: ', vocab)
    
  }


  render() {
    console.log('Selected chapter: ', this.props.navigation.state.params.selectedChapter)
    return(
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>{"Hey there"}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton text="✔️" onPress={this.onPress}/>
          <RoundedButton text="❌"/>
        </View>
      </View>
    )
  }
}
