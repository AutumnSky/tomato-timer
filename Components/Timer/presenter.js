import React from 'react';
import styled from 'styled-components/native';
import Button from '../Button';
import { sprintf } from 'sprintf-js';

const Container = styled.View`
  flex-grow: 1;
  background-color: tomato;
`;

const TimeView = styled.View`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonView = styled.View`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeText = styled.Text`
  color: white;
  font-size: 100;
`;

export default class extends React.Component {
  state = {
    timer: null
  };

  buttonPressed = () => {
    const { isPlaying, startTimer, resetTimer, addSeconds } = this.props;
    const { timer } = this.state;
    if (isPlaying) {
      resetTimer();
      clearInterval(timer);
    } else {
      startTimer();
      const newTimer = setInterval(() => {
        addSeconds();
      }, 1000);
      this.setState({ timer: newTimer });
    }
  };

  _formatTime = (totalSec) => {
    let min = totalSec / 60;
    let sec = totalSec % 60;
    return sprintf('%02d:%02d', min, sec);
  };

  render() {
    const { isPlaying, elapsedTime } = this.props;
    return (
      <Container>
        <TimeView>
          <TimeText>{this._formatTime(elapsedTime)}</TimeText>
        </TimeView>
        <ButtonView>
          <Button isPlaying={isPlaying} onPress={this.buttonPressed} />
        </ButtonView>
      </Container>
    );
  }
}
