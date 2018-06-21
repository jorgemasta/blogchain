import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
`;

const Header = props => (
  <Container>
    <div className="inner">
      <Link to="/" className="logo">
        <strong>Blogchain</strong>
        <span>.es</span>
      </Link>
      <nav>
        <Link to="/about">Sobre Nosotros</Link>
      </nav>
    </div>
  </Container>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Header;
