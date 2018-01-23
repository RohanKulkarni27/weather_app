import React,{ Component } from 'react';
import ReactDom from 'react-dom';

const TempDetails = ({cityname,temperature,date,summary}) => {
  return(
    <div className="col-md-6">
        <div className="row">
          <div className="col-md-12">
            <p>{date}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>{summary}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>{cityname}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>{temperature}</p>
          </div>
        </div>
    </div>



  );
};

export default TempDetails;
