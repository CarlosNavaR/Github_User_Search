import PropTypes from 'prop-types';

export default function IfExist({ children, exist }) {
  if (exist) {
    return children;
  }

  return null;
}

IfExist.propTypes = {
  children: PropTypes.node.isRequired,
  exist: PropTypes.bool.isRequired,
};
