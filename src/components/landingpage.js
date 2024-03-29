import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
class Landing extends Component{
  render() {
    return(
      <div style={{width:'100%' , margin:'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
            src="https://dentalogica-practice.co.uk/wp-content/uploads/2017/05/avatar-male.png"
            alt="avatar"
            className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr/>
              <p>HTML/CSS | Laravel | Bootstrap | React | Vue | Go | Flutter</p>
              <div className="social-links">
                {/* Linkedin */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>
                {/* Github */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
