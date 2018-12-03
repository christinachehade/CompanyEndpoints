import React, { Component } from 'react'
import { withRouter } from 'react-router'
import '../App.css'

class Navigation extends Component {
     render() {
          return <div>
               <div className="number-nav">
               <div onClick={() => this.props.history.push('/')}>1</div>
               <div onClick={() => this.props.history.push('/page/2')}>2</div>
               <div onClick={() => this.props.history.push('/page/3')}>3</div>
               <div onClick={() => this.props.history.push('/page/4')}>4</div>
               <div onClick={() => this.props.history.push('/page/5')}>5</div>
               </div>
          </div>
     }
}

export default withRouter(Navigation)