import PropTypes from "prop-types";
import classNames from "classnames";
import stylesProgressBar from "./styles.module.css";

export function ProgressBar({ maxQuestions, currentStep }) {
  const progressBarSteps = Array.from(
    { length: maxQuestions },
    (_, index) => index + 1
  );

  return (
    <div className={stylesProgressBar.container}>
      <div
        id="teste"
        className={stylesProgressBar.steps}
        style={{
          gridTemplateColumns: `repeat(${maxQuestions}, 1fr)`,
        }}
      >
        {progressBarSteps.map((step) => (
          <div
            key={step}
            id="teste"
            className={classNames(
              stylesProgressBar.step,
              currentStep >= step ? stylesProgressBar.active : ""
            )}
          />
        ))}
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  currentStep: PropTypes.number,
  maxQuestions: PropTypes.number,
};
