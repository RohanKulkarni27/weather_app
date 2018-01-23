import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './Components/SearchBar.js';
import axios from 'axios';
//api key = 5aa446b4141bf14828005a39c50e8c49
import TempDetails from './Components/TempDetails.js'

class App extends Component {
 constructor(props){
   super(props);
   this.state={
     temperature:[],
     city:[],
     mintemp:[],
     icon:[]
   };
    this.citysearch('New york');
 }

 /*citysearch(cityname){
   alert(cityname);
 }*/

 citysearch(cityname){

   axios.get("https://api.openweathermap.org/data/2.5/find?q="+cityname+"&units=metric&appid=5aa446b4141bf14828005a39c50e8c49")
      .then(response => {

        /*console.log(response);
        console.log(response.data.list[0].name);
        console.log(response.data.list[0].main.temp); */
        this.setState({
          temperature:response.data,
          number:this.state.number,
          city:response.data.list[0].name,
          mintemp:response.data.list[0].main.temp,
          verdict:response.data.list[0].weather[0].description,
          icon:response.data.list[0].weather.icon
        });

      })
      .catch(error => {
        console.log('Error', error);
      });
 }
  render(){
    var today = new Date();
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
      dd = '0'+dd
    }
    if(mm==1) {
      mm = 'Jan'
    }
    if(mm==2) {
      mm = 'Feb'
    }
    if(mm==3) {
      mm = 'Mar'
    }
    if(mm==4) {
      mm = 'April'
    }
    if(mm==5) {
      mm = 'May'
    }
    if(mm==6) {
      mm = 'Jun'
    }
    if(mm==7) {
      mm = 'Jul'
    }
    if(mm==8) {
      mm = 'Aug'
    }
    if(mm==9) {
      mm = 'Sept'
    }
    if(mm==10) {
      mm = 'Oct'
    }
    if(mm==11) {
      mm = 'Nov'
    }
    if(mm==12) {
      mm = 'Dec'
    }
  const date = dd+'-'+mm+'-'+yyyy;

    return(
      <div>
      <p className="number">{this.state.number}</p>
        <div className="row">
          <div className="col-md-12">
            <SearchBar oncitychange={(cityname)=>this.citysearch(cityname)}/>    
          </div>
        </div>
        <div className="row innerdiv">
          <div className="col-md-12">

            <TempDetails cityname={this.state.city} temperature={this.state.mintemp} date={date} summary={this.state.verdict}  />
          </div>
        </div>
      </div>
    );
  }
}




//We will take this component from here to DOM
ReactDom.render(<App></App>, document.querySelector('.main')); // <App></App> is the instance of the class or component App
