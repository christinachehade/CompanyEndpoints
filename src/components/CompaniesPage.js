import React, { Component} from "react";
import CompanyCard from './CompanyCard';
import '../App.css'
import PageNumber from "./PageNumber";

class CompaniesPage extends Component{
    constructor(){
        super();
        this.state={
            companies: [],
            pageNumber:""
      
        }
    }
    componentDidMount(){
        console.log(this.props.url)
        fetch(`https://api.renmark.ir/companies${this.props.url}`)
        .then(x=>x.text())
        .then(response=>{
            let companies = JSON.parse(response).data
            let xNumber = JSON.parse(response).meta.pagination.current_page
            console.log(companies)
            this.setState({companies,pageNumber: xNumber})
        })
    }
    render(){
        return (<div>
             <PageNumber pNumber={this.state.pageNumber}/>
            <div className="card-container">
               {this.state.companies.map(company=>company.logo?<CompanyCard logo={company.logo} name={company.name}/>:null)}
            </div>
            </div>)
    }
}

export default CompaniesPage