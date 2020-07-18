import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import Home from '../components/Home';
import About from '../components/About';
import Header from '../components/Header';
//import Footer from '../components/Footer';

class App extends React.Component {
  
  render(){
    return(
      <main>
          <ThemeProvider>
            <CSSReset />
              <Header/>
              <Switch>
                  <div className="app">
                    <Route path="/" component={Home} exact />
                    <Route path="/about" component={About} />
                  </div>  
              </Switch>
              
          </ThemeProvider>
       </main>
    )
  }
}

export default App;
