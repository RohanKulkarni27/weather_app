import React,{ Component } from 'react';
import ReactDom from 'react-dom';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={
      cityname:'',
      number:5
    };
    //this.termchange = this.termchange.bind(this);
    this.handleclick = this.handleclick.bind(this);
  }
render(){
  return(
    <div className="row">
      <div className="col-md-6">
        <input className="form-control" placeholder="Enter the city name" type="text" id="txtbox" value={this.state.cityname} onChange={event=>this.termchange(event.target.value)} />
      </div>
      <div className="col-md-6">
        <input className="btn btn-info" type="submit" onClick={this.handleclick} />
      </div>
    </div>
  );
}
termchange(cityname){
  this.setState({cityname});

}
handleclick(){
  this.props.oncitychange(this.state.cityname);
}
}

export default SearchBar;
