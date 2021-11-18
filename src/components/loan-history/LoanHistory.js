import './LoanHistory.css'

export const LoanHistory = () => {
    return (
        <div className="loan-history-scrolled">
            <div className="loan-history">
                <h2>Loan History</h2>
                <hr />
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Apply Date</th>
                            <th>Apply Time</th>
                            <th>Laon Amount</th>
                            <th>Loan Interest</th>
                            <th>Time Period</th>
                            <th>Loan Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>22-11-2020</td>
                            <td>09:10</td>
                            <td>4356345</td>
                            <td>5%</td>
                            <td>5 Years</td>
                            <td>Approved</td>
                        </tr>
                        <tr>
                            <td>22-11-2020</td>
                            <td>09:10</td>
                            <td>4356345</td>
                            <td>5%</td>
                            <td>5 Years</td>
                            <td>Approved</td>
                        </tr>
                        <tr>
                            <td>22-11-2020</td>
                            <td>09:10</td>
                            <td>4356345</td>
                            <td>5%</td>
                            <td>5 Years</td>
                            <td>Approved</td>
                        </tr>
                        <tr>
                            <td>22-11-2020</td>
                            <td>09:10</td>
                            <td>4356345</td>
                            <td>5%</td>
                            <td>5 Years</td>
                            <td>Approved</td>
                        </tr>
                        <tr>
                            <td>22-11-2020</td>
                            <td>09:10</td>
                            <td>4356345</td>
                            <td>5%</td>
                            <td>5 Years</td>
                            <td>Approved</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
