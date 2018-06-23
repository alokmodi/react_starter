import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import Header from './components/layout/header.component';
import LeftNav from './components/layout/leftNav.component';
import Home from './components/main/main.component';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <Fabric>
        <div className="ms-Grid">
          <Header/>
          <div className="ms-Grid-row">
            <LeftNav />
            <Home/>
          </div>
        </div>
        
      </Fabric>
    );
  }
}

export default App;