import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timerAction, timerRestartChange } from '../redux/action';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.timerCd = this.timerCd.bind(this);
    this.state = {
      time: 30,
    };
  }

  componentDidMount() {
    this.timerCd();
    const cd = 30000;
    const { disableAnswer } = this.props;
    setTimeout(() => disableAnswer(), cd);
  }

  componentDidUpdate() {
    const { time } = this.state;
    const { clickAnswer, restartTimerChange, restartTimer } = this.props;
    const { sendTimer } = this.props;
    if (time > 0 && !clickAnswer) {
      this.timerCd();
    } else sendTimer(time);
    if (restartTimer) {
      this.setState({ time: 30 });
      restartTimerChange();
    }
  }

  timerCd() {
    const { time } = this.state;
    const delay = 1000;

    setTimeout(() => {
      this.setState({
        time: time - 1,
      });
    }, delay);
  }

  render() {
    const { time } = this.state;
    return (
      <span id="time">{ time }</span>
    );
  }
}

Timer.propTypes = {
  disableAnswer: PropTypes.func.isRequired,
  sendTimer: PropTypes.func.isRequired,
  clickAnswer: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  restartTimer: state.game.restartTimer,
});

const mapDispatchToProps = (dispatch) => ({
  sendTimer: (time) => dispatch(timerAction(time)),
  restartTimerChange: () => dispatch(timerRestartChange()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
