import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator } from 'aws-amplify-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui/dist/style.css';


export default class App extends Component {
  componentDidMount(){
    Amplify.configure({
      mandatorySignin: true,
      region: 'sa-east-1',
      userPoolId: 'sa-east-1_GnUdtFICL',
      identityPoolId: 'sa-east-1:43fbe5cb-ee35-4673-b232-0f04994c330f',
      userPoolWebClientId: '3s1ju6vbkitvp90uaadm6kstil'
    })

  }
  render() {
    return (
      <div>
        <Authenticator />
      </div>
    )
  }

}

