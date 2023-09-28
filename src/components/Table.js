const Table = (props) => {

    console.log("INSIDE TABLE.JS: ", props.data)


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
                        <td>{item.savingsEndOfYear}</td>
                        <td>{item.yearlyInterest}</td>
                        <td>{item.totalInterestGained}</td>
                        <td>{item.investedCapital}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;