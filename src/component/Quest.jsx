import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import { fetchQuest } from '../actions';
import Header from './Header';
import * as fetchAPI from '../helpers/fetchAPI';
import './Quest.css';

class Quest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
    };
    this.timerRunner = this.timerRunner.bind(this);
  }

  componentDidMount() {
    const { questsFn } = this.props;
    const token = localStorage.getItem('token');
    questsFn(token);
    this.timerRunner();
  }

  timerRunner() {
    const oneSecond = 1000;
    const time = setInterval(() => {
      const { timer } = this.state;
      if (timer > 0) {
        const newTime = timer - 1;
        this.setState({ timer: newTime });
      } else {
        // endTimerFunction();
        clearInterval(time);
      }
    }, oneSecond);
  }

  handleClick() {
    const wrongButtons = document.getElementsByName('wrong-answer');
    const correctButton = document.getElementById('correct-answer');
    wrongButtons.forEach((button) => {
      button.className = 'wrong-answer-clicked';
    });

    correctButton.className = 'correct-answer-clicked';
  }

  render() {
    const { quests, isLoading, name, email } = this.props;
    const { timer } = this.state;
    if (isLoading) return <div>Loading...</div>;
    const avatar = fetchAPI.fetAvatar(md5(email).toString());
    const {
      question,
      category,
      correct_answer: correctAnswer,
      incorrect_answers: incorret,
    } = quests[0];
    return (
      <div>
        <Header name={ name } avatar={ avatar } />
        <h2>{timer}</h2>
        <p data-testid="question-category">{ category }</p>
        <p data-testid="question-text">{ question }</p>
        <button
          type="button"
          data-testid="correct-answer"
          id="correct-answer"
          onClick={ this.handleClick }
        >
          { correctAnswer }
        </button>
        { incorret.map((wrong, index) => (
          <button
            data-testid={ `wrong-answer-${index}` }
            type="button"
            Name="wrong-answer"
            className="wrong-answer"
            id="wrong-answer"
            onClick={ this.handleClick }
            key={ index }
          >
            { wrong }
          </button>)) }
      </div>
    );
  }
}

Quest.propTypes = {
  quests: PropTypes.arrayOf(PropTypes.object).isRequired,
  questsFn: PropTypes.func.isRequired,
  isLoading: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  quests: state.quest.quests,
  isLoading: state.quest.isLoading,
  name: state.user.name,
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  questsFn: (quest) => dispatch(fetchQuest(quest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quest);
