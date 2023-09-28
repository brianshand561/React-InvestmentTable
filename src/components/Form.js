import { useState } from 'react';

const Form = (props) => {

    const [enteredCurrentSavings, setEnteredCurrentSavings] = useState('');
    const [enteredYearlySavings, setEnteredYearlySavings] = useState('');
    const [enteredInterest, setEnteredInterest] = useState('');
    const [enteredDuration, setEnteredDuration] = useState('');

    const currentSavingsHandler = (event) => {
        setEnteredCurrentSavings(event.target.value);
    }
    const yearlySavingsHandler = (event) => {
        setEnteredYearlySavings(event.target.value);
    }
    const interestHandler = (event) => {
        setEnteredInterest(event.target.value);
    }
    const durationHandler = (event) => {
        setEnteredDuration(event.target.value);
    }


    const submitter = (event) => {
        event.preventDefault(); // prevents page reload

        const userInput = {
            'current-savings': enteredCurrentSavings,
            'yearly-contribution': enteredYearlySavings,
            'expected-return': enteredInterest,
            'duration': enteredDuration,


        }
        // console.log(enteredCurrentSavings)
        // console.log(enteredYearlySavings)
        // console.log(enteredInterest)
        // console.log(enteredDuration)

        setEnteredCurrentSavings('');
        setEnteredYearlySavings('');
        setEnteredInterest('');
        setEnteredDuration('');


        props.submit(userInput);
    }

    return (
        <form className="form" onSubmit={submitter}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" value={enteredCurrentSavings} onChange={currentSavingsHandler} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" value={enteredYearlySavings} onChange={yearlySavingsHandler} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" value={enteredInterest} onChange={interestHandler} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" value={enteredDuration} onChange={durationHandler} />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default Form;