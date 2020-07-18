import React from "react"
//import axios from 'axios';
import { Button } from "@chakra-ui/core";

class Home extends React.Component {
  
    constructor(){
      super()
      this.state = {
      }
    }

    render(){
      return(
        <div>
          <h1>Home</h1>

          <Button variantColor="green">Button</Button>

        </div>
      )
    }
  }

 export default Home