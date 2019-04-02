import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

const SButton = styled.TouchableOpacity``;
const SFontAwesome = styled(FontAwesome)`
color: white;
font-size: 100;
`;

const Button = ({ isPlaying, onPress }) => {
  const iconName = isPlaying ? 'stop-circle' : 'play-circle';
  return (
    <SButton onPress={onPress}>
      <SFontAwesome name={iconName} />
    </SButton>
  );
};

export default Button;

Button.prototype = {
  isPlaying: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};
