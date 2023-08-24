import { Phonebook } from 'components/Phonebook/Phonebook';
import { Component } from 'react';
import { Container } from './App.styled';

// import { ContactList } from 'components/Phonebook/Phonebook';

export class App extends Component {
    state = {
        contacts: [],
        name: ''
      }

      render() {
        return (
          <Container>
            <Phonebook/>що ще можна спробувати?
          </Container>
        )
      }
}

