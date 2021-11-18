import './TransactionHistory.css'

export const TransactionHistory = () => {
    return (
        <div className="transaction-scrolled">
            <div className="transaction-history" id="invoice">
                <h2>Transaction History</h2>
                <hr />
                <table id="customers">
                    <tr>
                        <th>Date</th>
                        <th>Transaction Type</th>
                        <th>Transfer Type</th>
                        <th>Account Number</th>
                        <th>Amount</th>
                        <th>Final Balance</th>
                    </tr>
                    <tr>
                        <td>11-10-2020</td>
                        <td>Debit</td>
                        <td>Own bank</td>
                        <td>578469588778</td>
                        <td>$50</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>11-05-2020</td>
                        <td>Credit</td>
                        <td>International Wire</td>
                        <td>578469588778</td>
                        <td>$70</td>
                        <td>$600</td>
                    </tr>
                    <tr>
                        <td>13-10-2020</td>
                        <td>Debit</td>
                        <td>Other bank</td>
                        <td>578469588778</td>
                        <td>$100</td>
                        <td>$400</td>
                    </tr>
                    <tr>
                        <td>11-05-2020</td>
                        <td>Credit</td>
                        <td>International Wire</td>
                        <td>578469588778</td>
                        <td>$70</td>
                        <td>$600</td>
                    </tr>
                    <tr>
                        <td>13-10-2020</td>
                        <td>Debit</td>
                        <td>Other bank</td>
                        <td>578469588778</td>
                        <td>$100</td>
                        <td>$400</td>
                    </tr>
                </table>
                <button class="btn btn-primary" id="download"> download pdf</button>
            </div>
        </div>
    )
}
