import React from 'react';
import {RecoilRoot} from 'recoil'

import Count from './Count'



class App extends React.Component {
  render() { 
    return ( 
    <RecoilRoot>
      <Count />
    </RecoilRoot>);
  }
}
 
export default App;