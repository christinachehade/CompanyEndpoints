import React, { Component} from "react";
import CompanyCard from './CompanyCard';
import '../App.css'

class CompaniesPage extends Component{
    constructor(){
        super();
        this.state={
            companies: []
        }
    }
    componentDidMount(){
        console.log(this.props.url)
        fetch(`https://api.renmark.ir/companies${this.props.url}`)
        .then(x=>x.text())
        .then(response=>{
            let companies = JSON.parse(response).data
            console.log(companies)
            this.setState({companies})
        })
    }
    render(){
        return (<div>
            <div className="card-container">
               {this.state.companies.map(company=>company.logo?<CompanyCard logo={company.logo} name={company.name}/>:null)}
            </div>
            </div>)
    }
}

export default CompaniesPage