import React from 'react'
import'../App.css'

const CompanyCard = props => (
    <div className="company-card">
        <div><img src={props.logo}/></div>
        <div className="company-name">{props.name}</div>
    </div>
)

export default CompanyCard;