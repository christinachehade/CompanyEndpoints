import React, { Component} from "react";
import CompanyCard from './CompanyCard';

class ExchangeFilter extends Component{
    constructor(){
        super();
        this.state={
            companies: []
        }
    }
    componentDidMount(){
        console.log(this.props.url)
        fetch(`https://api.renmark.ir/companies?exchange=${this.props.exchange}`)
        .then(x=>x.text())
        .then(response=>{
            let companies = JSON.parse(response).data
            console.log(companies)
            this.setState({companies})
        })
    }
    render(){
        return (
            <div>
               {this.state.companies.map(company=>company.logo?<CompanyCard logo={company.logo} name={company.name}/>:null)}
            </div>
        )
    }
}

export default ExchangeFilter