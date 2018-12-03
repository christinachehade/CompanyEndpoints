import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import CompaniesPage from "./components/CompaniesPage"
import ExchangeFilter from "./components/ExchangeFilter"
import Navigation from "./components/Navigation"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path='/page/:pageNum' exact render={(routerData) => <CompaniesPage key={routerData.match.params.pageNum} url={`?page=${routerData.match.params.pageNum}`} />} />
            <Route path='/exchange/:exchange' exact render={(routerData) => <ExchangeFilter key={routerData.match.params.exchange} exchange={routerData.match.params.exchange} />} />
            <Route path='/' exact render={() => <CompaniesPage url='' />} />
            <div>
              <Navigation />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
