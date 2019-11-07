import React, { Component } from 'react';
import {Tabs,Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton} from 'react-mdl';
class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {activeTab : 0};
  }
  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'black', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) center / cover'}}>React Project</CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

         {/* Project 2 */}
         <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'black', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) center / cover'}}>React Project</CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

         {/* Project 3 */}
         <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'black', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) center / cover'}}>React Project</CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>
        
        </div>
      )
    }else if(this.state.activeTab === 1){
      return (
        <div>Laravel</div>
      )
    }else if(this.state.activeTab === 2){
      return (
        <div>Go</div>
      )
    }
  }
  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Laravel</Tab>
          <Tab>Go</Tab>
        </Tabs>

          <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
          </Grid>
      </div>
    );
  }
}

export default Projects;
