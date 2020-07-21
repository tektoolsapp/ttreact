import React, {useState} from "react"
import con from "../config"
//import axios from 'axios';
import { Button } from "@chakra-ui/core";
//const config = require('config');
//const myob = config.get('myob');
    //console.log(myob)

//console.log(con.API_SECRET)



function Home(){

    const myobConnected = useState(false)
    console.log(myobConnected)

    const apiKey = con.API_KEY
    const redirectUrl = con.REDIRECT_URL

    const accessCodeUrl =`https://secure.myob.com/oauth2/account/authorize?client_id=${apiKey}&redirect_uri=${redirectUrl}&response_type=code&scope=CompanyFile`

    console.log(accessCodeUrl)

    function getMyob(accessCodeUrl){

        alert(accessCodeUrl)
    }
    
    return(
        <div>
          <h1>Home</h1>

          <Button variantColor="green" onClick={() => getMyob(accessCodeUrl)}>Button</Button>

        </div>
    )

} 

/*
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

  */

 export default Home