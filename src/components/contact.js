import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Undur Moh Aden</h2>
            <img
              src="https://cdn4.iconfinder.com/data/icons/avatars-32/90/24-512.png"
              alt="avatar"
              style={{height:"250px"}}
            />
            <p style={{ width:'75%', margin:"auto", paddingTop:"1em" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px',fontFamily:'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  (+62)895367264966
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '30px',fontFamily:'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  undurmohaden@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '30px',fontFamily:'Anton'}}>
                  <i className="fa fa-linkedin" aria-hidden="true"/>
                  nameblacllis@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '30px',fontFamily:'Anton'}}>
                  <i className="fa fa-github" aria-hidden="true"/>
                  @aidensV
                </ListItemContent>
                
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
