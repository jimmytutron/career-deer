import React from "react";
import './HomePageJumbo.css';
import {Jumbotron} from '../../components/Jumbotron';

const HomePageJumbo = ({className="", children, ...props}) => (
  <Jumbotron className={className} {...props}>
  <div className="jumbotron-content">
    <h1 className="display-3 font-bold">Don't be a deer in headlights...</h1>
    <p className="lead">Track down your next job with CareerDeer</p>
    <hr className="my-4"/>
    <p>pew pew pew. lorem ipsum deer bucks tracks antlers rudolph the red nose reindeer had a very shiny nose.</p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  </Jumbotron>
);

export {HomePageJumbo};
