const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
});

const Table = (props) => {

    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item) => (
                    <tr key={item.key}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.savingsEndOfYear)}</td>
                        <td>{formatter.format(item.yearlyInterest)}</td>
                        <td>{formatter.format(item.totalInterestGained)}</td>
                        <td>{formatter.format(item.investedCapital)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;