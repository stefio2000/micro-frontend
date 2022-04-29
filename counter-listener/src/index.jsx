import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import PropTypes from 'prop-types';

import CounterListener from './components/Counter';

const Index = ({ startvalue }) => (
  <div id="webcomp-counter">
    <span>Counter listener component in React</span>
    <CounterListener/>
  </div>
);

Index.propTypes = {
  startvalue: PropTypes.number.isRequired,
};

customElements.define('stefio2000-counter-listener', reactToWebComponent(Index, React, ReactDOM));
