// import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
    let location = useLocation().pathname;
    
    return (
        <>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h1><span className="lab la-accusoft"></span> <span>Sumex</span></h1>
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li><Link to="/admin" className={location === "/admin" ? "active" : ""}>
                            <span className="las la-home"></span><span>Admin Dashboard</span>
                        </Link></li>

                        <li><Link to="/users" className={location === "/users" ? "active" : ""}>
                            <span className="lar la-file-excel"></span><span>Users</span>
                        </Link></li>

                        <li><Link to="/transfer-admin" className={location === "/transfer-admin" ? "active" : ""}>
                            <span className="lar la-file-excel"></span><span>Transaction History</span>
                        </Link></li>

                        <li><Link to="/profile" className={location === "/profile" ? "active" : ""}>
                            <span className="lar la-user-circle"></span><span>Admin Profile</span>
                        </Link></li>

                        <li><Link to="/card-manager" className={location === "/card-manager" ? "active" : ""}>
                            <span className="lar la-credit-card"></span><span>Card Management</span>
                        </Link></li>

                        <li><Link to="/loan-manager" className={location === "/loan-manager" ? "active" : ""}>
                            <span className="las la-clipboard-list"></span><span>Loan Management</span>
                        </Link></li>

                        <li><Link to="/kyc-manager" className={location === "/kyc-manager" ? "active" : ""}>
                            <span className="las la-shield-alt"></span><span>KYC Management</span>
                        </Link></li>

                        <li><Link to="/security" className={location === "/security" ? "active" : ""}>
                            <span className="las la-bolt"></span><span>Security</span>
                        </Link></li>
                        
                        <li><Link to="/site-setting" className={location === "/site-setting" ? "active" : ""}>
                            <span className="las la-bolt"></span><span>Site Setting</span>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
