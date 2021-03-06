import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class CustomComponent extends React.Component {
  render() {
    const {
      hasError,
      idyll,
      updateProps,
      ...props
    } = this.props;
    return (
      <div {...props}>
        <svg
          width={300}
          height={50}
          style={{ display: 'block', margin: '20px auto', background: 'white' }}
        >
          <rect width={50} height={50} y={0} x={25} fill="#ddd" />
          <circle cx={50} cy={25} r={15} x={25} fill="#000" />
          <rect width={50} height={50} y={0} x={125} fill="#ddd" />
          <circle cx={150} cy={25} r={15} x={25} fill="#000" />
          <rect width={50} height={50} y={0} x={225} fill="#ddd" />
          <circle cx={250} cy={25} r={15} x={25} fill="#000" />
        </svg>
      </div>
    );
  }
}

CustomComponent.propTypes = {
  hasError: PropTypes.bool,
  idyll: PropTypes.object, /* eslint-disable-line react/forbid-prop-types */
  updateProps: PropTypes.func,
};

CustomComponent.defaultProps = {
  hasError: false,
  idyll: {},
  updateProps: () => {},
};
