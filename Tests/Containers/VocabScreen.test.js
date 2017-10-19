import 'react-native';
import React from 'react';
import VocabScreen from '../../App/Containers/VocabScreen';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('VocabScreen component renders correctly', () => {
  const tree = renderer.create(
    <VocabScreen
      navigation={{ state: { params: { selectedChapter: 'unit1' } } }}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
