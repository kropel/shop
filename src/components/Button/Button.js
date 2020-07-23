import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, size, onClick, disabled, children }) => {
  const styles = {
    color,
    fontSize: Button.sizes[size],
    border: "1px solid",
    borderRadius: "3px",
    padding: "5px",
  };
  return (
    <button
      className="button"
      style={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
  /** The color for the button */
  color: PropTypes.string,
  /** The size of the button */
  size: PropTypes.oneOf(["small", "normal", "big"]),
  /** Disable button */
  disabled: PropTypes.bool,
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
};
Button.defaultProps = {
  color: "#333",
  size: "normal",
  onClick: (event) => {
    // eslint-disable-next-line no-console
    console.log("You have clicked me!", event.target);
  },
};
Button.sizes = {
  small: "10px",
  normal: "14px",
  big: "18px",
};
Button.theme = {
  dark: {
    color: "#fff",
    backgroundColor: "darkslategrey",
  },
  light: {
    color: "rgb(51, 51, 51)",
    backgroundColor: "buttonface",
  },
};
