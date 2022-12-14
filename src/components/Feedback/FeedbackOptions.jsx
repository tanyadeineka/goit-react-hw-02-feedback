import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.btnContainer}>
            {options.map((option, index) => (
                <button key={index} className={css.btnFeedback} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}