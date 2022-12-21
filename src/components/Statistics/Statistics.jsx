import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export const Statistics = ({ good, neutral, bad, total, percent }) => {
    return (
      <ul className={css.statList}>
        <li className={css.statItem}>Good: {good}</li>
        <li className={css.statItem}>Neutral: {neutral}</li>
        <li className={css.statItem}>Bad: {bad}</li>
        <li className={css.statItem}>Total: {total}</li>
        <li className={css.statItem}>Positive feedback: {percent} %</li>
      </ul>
    );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};