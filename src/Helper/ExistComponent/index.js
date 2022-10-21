import PropTypes from 'prop-types';

export default function IfExist({ children, exist }) {
  if (exist) {
    return children;
  }

  return null;
}

IfExist.defaultProps = {
  exist: false,
};

IfExist.propTypes = {
  children: PropTypes.node.isRequired,
  exist: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
  ]),
};
