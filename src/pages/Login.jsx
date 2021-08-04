import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../redux/actions';
import ConfigButton from '../components/ConfigButton';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnDisable: true,
      email: '',
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.btnDisable = this.btnDisable.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.btnDisable();
  }

  handleClick() {
    const { fetchAPItoken, token } = this.props;
    fetchAPItoken();
    localStorage.setItem('token', token);
  }

  btnDisable() {
    const { name, email } = this.state;
    const validator = name.length > 0 && email.length > 0;
    if (validator) {
      this.setState({
        btnDisable: false,
      });
    }
  }

  render() {
    const { name, email, btnDisable } = this.state;
    return (
      <>
        <fieldset>
          <label
            htmlFor="input-player-name"
          >
            Nome:
            <input
              value={ name }
              name="name"
              onChange={ this.handleChange }
              type="text"
              data-testid="input-player-name"
            />
          </label>
          <label
            htmlFor="input-gravatar-email"
          >
            Email:
            <input
              value={ email }
              name="email"
              onChange={ this.handleChange }
              type="text"
              data-testid="input-gravatar-email"
            />
          </label>
          <Link to="/game">
            <button
              disabled={ btnDisable }
              type="button"
              data-testid="btn-play"
              onClick={ () => this.handleClick() }
            >
              Jogar
            </button>
          </Link>
        </fieldset>
        <ConfigButton />
      </>
    );
  }
}

Login.propTypes = {
  fetchAPItoken: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.login.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPItoken: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
