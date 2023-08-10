import { ButtonHTMLAttributes } from "react";
import styleButton from "./styles.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styleButton.container} onClick={onClick}>
      {children}
    </button>
  );
}

// Button.propTypes = {
//   children: PropTypes.node,
//   onClick: PropTypes.func,
// };
