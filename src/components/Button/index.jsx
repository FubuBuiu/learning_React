import { PropTypes } from "prop-types";
import styleButton from "./styles.module.css";

export function Button({ children, onClick }) {
  return (
    <button className={styleButton.container} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
