import './CardManagement.css'
import { useState } from 'react';

export const CardManagement = () => {

    const [Modal, setModal] = useState(false);

    function openModal() {
        if (Modal === true)
            setModal(false);
        else
            setModal(true);
    }

    return (
        <>
            <div className={`card-scrolled ${Modal === true ? 'card-scrolled2' : ''}`}>
                <div className="card-manager">
                    <h2>Card Requests</h2>
                    <hr />
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Account Number</th>
                                <th>Card Type</th>
                                <th>Card Brand</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Kamal Sharma</td>
                                <td>365489257603</td>
                                <td>Debit</td>
                                <td>Master Card</td>
                                <td>
                                    <div className="profile-dropdown">
                                        <button type="submit" className="card-manager-btn">Accept Request</button>
                                        <div>
                                            <button className="go-profile" onClick={openModal}>Check Profile<i className="las la-angle-double-right"></i></button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Vivek Kumar</td>
                                <td>376402593670</td>
                                <td>Credit</td>
                                <td>Master Card</td>
                                <td>
                                    <div className="profile-dropdown">
                                        <button type="submit" className="card-manager-btn">Accept Request</button>
                                        <div>
                                            <button className="go-profile" onClick={openModal}>Check Profile<i className="las la-angle-double-right"></i></button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Karan Tiwari</td>
                                <td>57026476754</td>
                                <td>Debit</td>
                                <td>Visa Card</td>
                                <td>
                                    <div className="profile-dropdown">
                                        <button type="submit" className="card-manager-btn">Accept Request</button>
                                        <div>
                                            <button className="go-profile" onClick={openModal}>Check Profile<i className="las la-angle-double-right"></i></button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={`${Modal === true ? '' : 'dd-modal'}`}>
                <div class="profile-modal">
                    <div className="close-modal">
                        <i class="las la-times" onClick={openModal}></i>
                    </div>

                    <div class="static-group">
                        <div>
                            <label>First Name</label>
                            <div class="static-group-vec">
                                Kamal
                            </div>
                        </div>
                        <div>
                            <label>Last Name</label>
                            <div class="static-group-vec">
                                Kishor
                            </div>
                        </div>
                    </div>

                    <div class="static-group">
                        <div>
                            <label>Account Number</label>
                            <div class="static-group-vec">
                                6444289370845
                            </div>
                        </div>
                        <div>
                            <label>Card Number</label>
                            <div class="static-group-vec">
                                None
                            </div>
                        </div>
                    </div>

                    <div class="static-group">
                        <div>
                            <label>Email</label>
                            <div class="static-group-vec">
                                aaatk@gmail.com
                            </div>
                        </div>
                        <div>
                            <label>Residencial Address</label>
                            <div class="static-group-vec">
                                Kishor Nagar Kanpur
                            </div>
                        </div>
                    </div>

                    <div class="static-group">
                        <div>
                            <label>Date Of Birth</label>
                            <div class="static-group-vec">
                                29-02-2000
                            </div>
                        </div>
                        <div>
                            <label>Gender</label>
                            <div class="static-group-vec">
                                Male
                            </div>
                        </div>
                    </div>

                    <div class="static-group">
                        <div>
                            <label>City/Town</label>
                            <div class="static-group-vec">
                                Kanpur
                            </div>
                        </div>
                        <div>
                            <label>State</label>
                            <div class="static-group-vec">
                                Uttar Pradesh
                            </div>
                        </div>
                    </div>

                    <div class="static-group">
                        <div>
                            <label>Country</label>
                            <div class="static-group-vec">
                                India
                            </div>
                        </div>
                        <div>
                            <label>Zip/Post Code</label>
                            <div class="static-group-vec">
                                2813297
                            </div>
                        </div>
                    </div>


                    <form>
                        <div class="input-group">
                            <div>
                                <label>Account Balance</label>
                                <div>
                                    <input type="text" required="required" value="$2000" />
                                </div>
                            </div>
                            <div>
                                <label>Kyc</label>
                                <div>
                                    <input type="text" required="required" value="verified" />
                                </div>
                            </div>
                        </div>
                        <div class="profile-modal-btn">
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
