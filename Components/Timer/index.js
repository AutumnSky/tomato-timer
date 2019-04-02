import TimerPresenter from './presenter';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../reducer';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(actionCreators.startTimer, dispatch),
    resetTimer: bindActionCreators(actionCreators.resetTimer, dispatch),
    addSeconds: bindActionCreators(actionCreators.addSeconds, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerPresenter);
