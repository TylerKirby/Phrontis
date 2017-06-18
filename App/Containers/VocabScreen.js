import React from 'react';
import { View, Text, Picker } from 'react-native';
import RoundedButton from '../Components/RoundedButton';
import unit1 from '../../GreekAppData/unit1.json';

// Styles
import styles from './Styles/VocabScreenStyles'

const vocabData = [{unitNumber: 1, dataFile: unit1}];

export default class VocabScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedChapter: 1};

    this.showVocab = this.showVocab.bind(this);
  }

  showVocab() {
    const chapterData = vocabData.find(unit => unit.unitNumber == 1).dataFile;
    console.log(chapterData);
    return Object.keys(chapterData['vocab'][0])[0]
  }



  render() {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>{this.showVocab()}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton text="✔️"/>
          <RoundedButton text="❌"/>
        </View>
      </View>
    )
  }
}
