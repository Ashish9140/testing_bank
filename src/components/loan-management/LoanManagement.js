import './LoanManagement.css'
import { useState } from 'react';
import { LoanCalculator } from 'components/loan-calculator/LoanCalculator';

export const LoanManagement = () => {

    const [Modal, setModal] = useState(false);

    function openModal() {
        if (Modal === true)
            setModal(false);
        else
            setModal(true);
    }

    return (
        <>
            <div className={`loan-scrolled ${Modal === true ? 'loan-scrolled2' : ''}`}>
                <div className="loan-manager-scrolled">
                    <div className="loan-manager">
                        <h2>Loan Requests</h2>
                        <hr />
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Account Number</th>
                                    <th>Loan Amount</th>
                                    <th>Loan Interest</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kamal Sharma</td>
                                    <td>365489257603</td>
                                    <td>$600</td>
                                    <td>7%</td>

                                    <td>
                                        <div className="profile-dropdown">
                                            <button type="submit" className="card-manager-btn">Accept Request</button>
                                            <div>
                                                <button className="go-profile" onClick={openModal}>Check Loan Form<i className="las la-angle-double-right"></i></button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Vivek Kumar</td>
                                    <td>376402593670</td>
                                    <td>$200</td>
                                    <td>5%</td>
                                    <td>
                                        <div className="profile-dropdown">
                                            <button type="submit" className="card-manager-btn">Accept Request</button>
                                            <div>
                                                <button className="go-profile" onClick={openModal}>Check Loan Form<i className="las la-angle-double-right"></i></button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Karan Tiwari</td>
                                    <td>57026476754</td>
                                    <td>$200</td>
                                    <td>3%</td>
                                    <td>
                                        <div className="profile-dropdown">
                                            <button type="submit" className="card-manager-btn">Accept Request</button>
                                            <div>
                                                <button className="go-profile" onClick={openModal}>Check Loan Form<i className="las la-angle-double-right"></i></button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <LoanCalculator />
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

                    <div class="static-group">
                        <div>
                            <label>Occupation</label>
                            <div class="static-group-vec">
                                Student
                            </div>
                        </div>
                        <div>
                            <label>Annual Income</label>
                            <div class="static-group-vec">
                                $2813297
                            </div>
                        </div>
                    </div>

                    <div class="static-group">
                        <div>
                            <label>Amount</label>
                            <div class="static-group-vec">
                                $6345674
                            </div>
                        </div>
                        <div>
                            <label>Interest</label>
                            <div class="static-group-vec">
                                5
                            </div>
                        </div>
                    </div>

                    <div class="static-group">
                        <div>
                            <label>Time</label>
                            <div class="static-group-vec">
                                5
                            </div>
                        </div>
                        <div>
                            <label>Loan Type</label>
                            <div class="static-group-vec">
                                xyz
                            </div>
                        </div>
                    </div>

                    <div class="static-group">
                        <div>
                            <label>Basic Monthely Salary</label>
                            <div class="static-group-vec">
                                $3465
                            </div>
                        </div>
                        <div>
                            <label>Loan Purpose</label>
                            <div class="static-group-vec">
                                <textarea name="" id="" cols="30" rows="5" value="Paisa Hee Paisa Hoga "></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
