import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { BarLoader } from 'react-spinners';

import './spinner.scss';

// emotion css handling: https://emotion.sh/docs/css
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const Spinner = ({ loading, message }) => {
  return (
    <div className="spinner">
      <BarLoader
        className={override}
        sizeUnit="vh"
        size={4}
        color="#000000"
        loading={loading}
      />
      <h3>{message}</h3>
    </div>
  );
};

Spinner.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
};

Spinner.defaultProps = {
  loading: true,
  message: '',
};

export default Spinner;
