import logo from './assets/investment-calculator-logo.png';
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';

function App() {

  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    const data = [];
    let totalYearlyInterest = 0;
    let totalYearlySavings = currentSavings
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalYearlyInterest += yearlyInterest;
      totalYearlySavings += yearlyContribution;
      data.push({
        year: i + 1, //col 1
        yearlyInterest: yearlyInterest,  //col 3
        savingsEndOfYear: currentSavings, //col 2
        investedCapital: yearlyContribution + currentSavings,
        totalInterestGained: totalYearlyInterest //col 4
      });
    }
    setYearlyData(data);
    console.log(data)
    // const yearlyInterestSum = data.reduce((acc, curr) => acc + curr.yearlyInterest, 0);
    // console.log("yearly interest sum: $", yearlyInterestSum)

  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form submit={calculateHandler} />

      {yearlyData.length > 0 ? (
        <Table data={yearlyData} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default App;
