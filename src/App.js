import logo from './logo.svg';
import './App.css';
import {Amplify} from 'aws-amplify';

import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports'
Amplify.configure(awsExports)

function App() {
  return (
      <Authenticator>
        {({signOut, user}) => (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                <button onClick={signOut}>Logout</button>
                This is a protected page
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        )}
      </Authenticator>
  );
}

export default App;
