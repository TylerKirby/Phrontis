import React from 'react';
import { View, Text, Picker } from 'react-native';
import RoundedButton from '../Components/RoundedButton';
import vocab from '../../GreekAppData/vocab.json';

// Styles
import styles from './Styles/VocabScreenStyles'


export default class VocabScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flip: true,
    };
    this.flipCard = this.flipCard.bind(this);
    this.correct = this.correct.bind(this);
    this.wrong = this.wrong.bind(this);
  }

  // Get unit selected from UnitSelectScreen
  componentWillMount() {
    this.setState({selectedChapter: this.props.navigation.state.params.selectedChapter})
  }

  flipCard() {
    this.setState({
      flip: !this.state.flip,
    });
  }

  correct() {
    this.setState({
      flip: !this.state.flip,
    });
  }

  wrong() {
    this.setState({
      flip: !this.state.flip,
    });
  }


  render() {

    // Debugging statements:
    console.log('Selected unit: ', this.state.selectedChapter)
    console.log('Vocab data: ', vocab)
    console.log('Flip state: ', this.state.flip)

    const { flip } = this.state;

    return(
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>{"Hey there"}</Text>
        </View>
        {flip ?
        <View style={styles.buttonContainer} >
          <RoundedButton 
            text="flip"
            onPress={this.flipCard}
          />
        </View>
        :
        <View style={styles.buttonContainer}>
          <RoundedButton 
            text="✔️" 
            onPress={this.correct}
          />
          <RoundedButton 
            text="❌"
            onPress={this.wrong}
          />
        </View>
        }
      </View>
    )
  }
}
