import React from 'react';
import { View, Text, Picker } from 'react-native';
import RoundedButton from '../Components/RoundedButton';
import unit1 from '../../GreekAppData/unit1.json';

// Styles
import styles from './Styles/VocabScreenStyles'

console.log(unit1);

const vocabData = [{unitNumber: 1, dataFile: unit1}];

export default class VocabScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedChapter: 1};

    this.onChapterChange = this.onChapterChange.bind(this);
    this.showVocab = this.showVocab.bind(this);
  }

  onChapterChange(itemValue) {
    this.setState({
      selectedChapter: itemValue
    });
  }

  showVocab() {
    const chapterData = vocabData.find(unit => unit.unitNumber == 1).dataFile;
    console.log(chapterData);
    return Object.keys(chapterData['vocab'][0])[0]
  }



  render() {
    const units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const unitsButtons = units.map((unit) =>
      <Picker.Item label={`Chapter ${unit}`} value={unit} key={unit} />
    );
    return(
      <View style={styles.mainContainer}>
        <View>
          <Picker
            style={{width: 100}}
            selectedValue={this.state.selectedChapter}
            onValueChange={this.onChapterChange}>
            {unitsButtons}
          </Picker>
        </View>
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
