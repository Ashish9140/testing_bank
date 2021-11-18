import { SuccessAlert } from 'components/alerts/SuccessAlert'
import './Transfer.css'
import { useState } from 'react'
import { WaringAlert } from 'components/alerts/WaringAlert'
import { InfoAlert } from 'components/alerts/InfoAlert'
import { ErrorAlert } from 'components/alerts/ErrorAlert'

export const Transfer = () => {

    // const [open, setopen] = useState(false);

    // function openAlert() {
    //     setopen(true);
    //     setTimeout(() => {
    //         setopen(false);
    //     }, 10000);
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    // }

    return (

        <>

            <SuccessAlert />
            <WaringAlert />
            <InfoAlert />
            <ErrorAlert />

            <div className="transfer">
                <h2>Transfer Amount</h2>
                <hr />
                <form>
                    <div className="form-group">
                        <label>Select Type</label>
                        <div>
                            <select name="" id="" required>
                                <option>Own Bank Transfer</option>
                                <option>Other Bank Transfer</option>
                                <option>International Wire Transfer</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Account Number</label>
                        <div>
                            <input type="text" required="required" minLength="8" maxLength="60" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <div>
                            <input type="number" required="required" minLength="8" maxLength="60" />
                        </div>
                    </div>

                    <div className="transfer-btn">
                        <button type="submit">Transfer</button>
                    </div>
                </form>
            </div>


        </>
    )
}
