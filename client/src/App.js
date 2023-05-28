import { useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import logo from './logo.svg';

import './App.css';

const client = new ApolloClient({
   uri: 'http://localhost:4000',
   cache: new InMemoryCache(),
});

const query = gql`
   query {
      allPersons {
         name
         phone
         address {
            street
            city
         }
         id
      }
   }
`;

function App() {
   useEffect(() => {
      client.query({ query }).then((response) => {
         console.log(response.data);
      });
   }, []);

   return (
      <div className='App'>
         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className='App-link'
               href='https://reactjs.org'
               target='_blank'
               rel='noopener noreferrer'
            >
               Learn React
            </a>
         </header>
      </div>
   );
}

export default App;
