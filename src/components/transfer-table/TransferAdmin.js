import './TransferAdmin.css'

export const TransferAdmin = () => {
    return (
        <div className="transfer-admin-scrolled">
            <div className="transfer-admin">
                <h2>Transaction History</h2>
                <hr />
                <table id="customers">
                    <tr>
                        <th>User Name</th>
                        <th>Account Number</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Transfer Type</th>
                        <th>Amount</th>
                        <th>Final Balance</th>
                    </tr>
                    <tr>
                        <td>Kamli Sharma</td>
                        <td>578469588778</td>
                        <td><input type="date" className="td-input" /></td>
                        <td><input type="time" className="td-input" /></td>
                        <td>Own bank(Credit)</td>
                        <td><input type="text" className="td-input-am" value="$200" /></td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>Vimla Devi</td>
                        <td>578469588778</td>
                        <td><input type="date" className="td-input" /></td>
                        <td><input type="time" className="td-input" /></td>
                        <td>International Wire(Debit)</td>
                        <td><input type="text" className="td-input-am" value="$200" /></td>
                        <td>$600</td>
                    </tr>
                    <tr>
                        <td>Jay Ram</td>
                        <td>578469588778</td>
                        <td><input type="date" className="td-input" /></td>
                        <td><input type="time" className="td-input" /></td>
                        <td>Other bank(Debit)</td>
                        <td><input type="text" className="td-input-am" value="$200" /></td>
                        <td>$400</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
