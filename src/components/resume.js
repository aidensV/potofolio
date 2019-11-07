import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img src="https://cdn4.iconfinder.com/data/icons/avatars-32/90/24-512.png"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Undur Moh Aden</h2>
            <h4 style={{ color: 'grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Lorem Ipsum is simply dummy t
              ext of the printing and typesetting
              industry. Lorem Ipsum has been the
              industry's standard dummy text e
              ver since the 1500s, when an unknown
              printer took a galley of type and
              scrambled it to make a type specimen
              book. It has survived not only five
              centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>Perum jala griya blok</p>
            <h5>Phone</h5>
            <p>(089)5367264966</p>
            <h5>Email</h5>
            <p>undurmohaden@gmail.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
            startYear={2012}
            endYear={2015}
            schoolName="SMK Persatuan 1"
            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <Education
            startYear={2016}
            endYear={2019}
            schoolName="Politeknik Informatika"
            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
           <h2>Experience</h2> 

            <Experience
            startYear={2018}
            endYear={2019}
            jobName="Programmer"
            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
             <Experience
            startYear={2019}
            endYear={2020}
            jobName="Programmer"
            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>
            <Skills 
             skill="javascript"
             progress={60}
            />
            <Skills 
             skill="Php"
             progress={80}
            />
            <Skills 
             skill="MySQL"
             progress={60}
            />
            <Skills 
             skill="Go"
             progress={20}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
