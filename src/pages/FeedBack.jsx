import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class FeedBack extends Component {
  constructor(props) {
    super(props);

    this.playAgain = this.playAgain.bind(this);
    this.ranking = this.ranking.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }

  getInfo() {
    // Desenvolver função para pegar os valores do LocalStorage
    const value = 3;
    const getPoints = JSON.parse(localStorage.getItem('state'));
    const { player } = getPoints;
    const { assertions } = player;

    if (assertions < value) {
      return ('Podia ser melhor...');
    }
    return ('Mandou bem!');
  }

  playAgain() {
    const { history } = this.props;
    history.push('/');
  }

  ranking() {
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    const getPoints = JSON.parse(localStorage.getItem('state'));
    const { player } = getPoints;
    console.log(player);

    return (
      <div>
        <Header score={ player.score } />
        <div data-testid="feedback-total-score">
          <p data-testid="feedback-text">
            { this.getInfo() }
          </p>
          <p data-testid="feedback-total-score">
            Você acertou
            { player.score }
            !
          </p>
          <p>
            Um total de
            {player.assertions}
          </p>
        </div>
        <button
          type="button"
          onClick={ this.ranking }
          data-testid="btn-ranking"
        >
          Ver Ranking
        </button>

        <button
          type="button"
          onClick={ this.playAgain }
          data-testid="btn-play-again"
        >
          Jogar Novamente
        </button>
      </div>
    );
  }
}

FeedBack.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default connect()(FeedBack);
