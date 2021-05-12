import React, { Component } from 'react';
import './styles.css';
import Header from '../header';
import FormSign from '../form';

type State = {
  className: string
}

class App extends Component<{}, State> {
   constructor() {
     super({});
     this.state = {
      className: 'hidden'
   }
 }

 
 handleScroll() { 
  if (document.documentElement.scrollTop > 200) {
     this.setState({
       className: 'show'
     })
   } 
 }

 componentDidMount() {
   window.onscroll = () => this.handleScroll()
 }
   render() {
     return(
       <div>
         <Header />
         <FormSign className={this.state.className}/>
       </div>
     )
   }
}
export default App
