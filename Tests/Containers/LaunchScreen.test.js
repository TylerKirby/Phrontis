import 'react-native';
import React from 'react';
import LaunchScreen from '../../App/Containers/LaunchScreen';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('LaunchScreen component renders correctly', () => {
  const tree = renderer.create(<LaunchScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
