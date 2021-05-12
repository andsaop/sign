import React, { Component } from 'react';
import './styles.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {verifySigns, descriptionSign} from '../mocks/signs'

type Props = {
  className: string;
};

type State = {
  date: string
  firstName: string
  sign: string
  description: string
}

class FormSign extends Component<Props, State> {
   constructor(props: Props) {
     super(props);
     
     this.state = {
       firstName: '',
       date: '',
       sign: '',
       description: '',
     }
 }

 handleVerifySign() {
  let splitDate = this.state.date.split('-')
  let yourSign = verifySigns(splitDate[1], splitDate[2])
  let description = descriptionSign(yourSign)
  this.setState({ sign: yourSign, description })
 }

 handleClearSign() {
  this.setState({ sign: '', description:'' })
 }

 handleChange(field:string, value:any){
  console.log(field, value)
  this.setState({...this.state, [field]:value.target.value, sign: ''})
 }

  render() {
    return(
    <div className="formsign-wrapper">
      <div className={this.props.className}>
      { this.state.sign === '' && (
        <Form>
          <Form.Group controlId="formBasicName" bsPrefix="size-large">
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" value={this.state.firstName}  onChange={(e) => this.handleChange('firstName', e)}/>
          </Form.Group>

          <Form.Group controlId="formBasicBirth">
            <Form.Label>Data de nascimento:</Form.Label>
            <Form.Control type="date" placeholder="Digite a data de nascimento" value={this.state.date} onChange={(e) => this.handleChange('date', e)}/>
          </Form.Group>
          <div className="btn-search">
            <Button 
              variant="dark" 
              size="lg" 
              block
              onClick={() => this.handleVerifySign()}
            >
              Verificar
            </Button>
          </div>
        </Form>
      )}
      { this.state.sign !== '' && (
        <div>
          <div className="text-sign">
            {this.state.sign}!
            <div className="description">
              {this.state.description}
            </div>
          </div>
          <div className="btn-clear">
            <Button 
              variant="dark" 
              size="lg" 
              block
              onClick={() => this.handleClearSign()}
            >
              Voltar
            </Button>
          </div>
        </div>
      )}
      </div>
    </div> 
    )
  }
}

export default FormSign
