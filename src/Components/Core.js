import React, { Component } from 'react';



class Core extends Component {

    render() {

        let center = {
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif'
        };

        let upSpace = {
            marginTop: '30',
            fontWeight: '500'
        };

        let downSpace = {
            marginBottom: '20'
        };

        let lineColor2 = {
            borderStyle: 'solid',
            borderColor: '#2fa1e2',
            borderWidth: '0.5'
        };

        let lineColor = {
            borderStyle: 'solid',
            borderColor: '#ccc',
            borderWidth: '0.5',
            marginTop: '20'
        };

        let bottom1 = {
            marginBottom: '30'
        };

        return(
            <div >
                <div style={center}>
                <h3 className="all-font"><strong>CORE QUALIFICATIONS</strong></h3>
                <p className="all-font">Medical Billing - Medical Aministrative - Patient Registration - - Medical Terminology</p>
                <p className="all-font">Medical Records Management - Meaningful Use</p>
                <p className="all-font">Medical Practice Management Systems - Introduction to CPT</p>
                <p className="all-font">ICD-9-CM - ICD-10-CM Coding - Charge Entry - Payment Posting - Denials - Appeals - Referrals</p>
                <p className="all-font">Accounts Receivable - Electronic Health Records (EHR) - Electronic Medical Records (EMR) - Greenway</p>
                <p className="all-font">Insurance Verification - Reimbursement Sytems - Medical Basics and Healthcare Claim Cycle</p>
                <p className="all-font">Healthcare Payers - Managed Care (HM0, PPO, and POS) - Medicare / Medicaid Government Payers</p>
                <p className="all-font" style={bottom1}>Third Party Payers - HIPAA Compliance - Medical Charts - Basic Anatomy & Physiology</p>
                <hr style={lineColor2}/>
                </div>
                <h3 className="all-font" style={center}><strong>Education</strong></h3>
                <p className="all-font span-style" style={upSpace}>Ultimate Medical Academy</p>
                <ul style={downSpace}>
                    <li className="all-font" ><strong>Health Sciences - Medical Office and Billing Specialist Associate of Science Degree, 2017</strong></li>
                </ul>
                <hr style={lineColor}/>
            </div>
        );
    }

}

export default Core;
