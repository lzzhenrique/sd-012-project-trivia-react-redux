import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-top: 1rem;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

const Back = styled.button`
  background-color: transparent;
  border: none;
  color: hsla(0, 0%, 100%, 62.5%);
  display: block;
  margin: 0 auto;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const BackContainer = styled.div`
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  font-size: 1.125rem;
`;

class ErrorPage extends Component {
  render() {
    return (
      <main>
        <Title>
          Couldn&apos;t find enough questions for this category.
          <Image
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt="error"
          />
          404
        </Title>
        <BackContainer>
          <Link to="/">
            <Back>
              Play Again
            </Back>
          </Link>
        </BackContainer>
      </main>
    );
  }
}

export default ErrorPage;
