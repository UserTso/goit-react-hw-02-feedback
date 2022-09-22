import PropTypes from 'prop-types';



export function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
        <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>PositivePercentage: {positivePercentage}%</p>
        </>
    )
}

Statistics.ropTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}



