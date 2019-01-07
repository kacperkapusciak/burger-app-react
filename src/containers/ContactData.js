import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../styled/UI/Button';
import Spinner from '../components/UI/Spinner';
import Input from '../components/UI/Input';
import axios from '../axios-orders';
class ContactData extends Component {
  state = {
    orderForm = {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '' 
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '' 
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP code'
        },
        value: '' 
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '' 
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-mail'
        },
        value: '' 
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'},
          ]
        },
        value: '' 
      },
    },
    loading: false
  }
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      });
  }
  render() {
    let form = (
      <form>
        <Input elementType="..." elementConfig="..." value="..." />
        <Input inputtype="input" type="email"  name="email" placeholder="Your Mail" />
        <Input inputtype="input" type="text"  name="street" placeholder="Street" />
        <Input inputtype="input" type="text"  name="zipcode" placeholder="Postal code" />
        <Button success onClick={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return(
      <Wrapper>
        <h4>Enter your Contact Data</h4>
        {form}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
  @media (min-width: 600px) {
    width: 500px;
  }
`;

export default ContactData;