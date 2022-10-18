import React from 'react';
import { DiCss3Full, DiCssTricks, DiFirebase, DiHtml5, DiJavascript, DiMongodb, DiNodejs, DiReact, DiRequirejs, DiSqllite, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked on th following technologies
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="3rem" />
        <DiCss3Full size="3rem" />
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Front end</ListTitle>
          <ListParagraph>
          Experience with <br />
          HTML5, CSS3, Javascript(ES6), React.js
          </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem" />  
        <DiNodejs size="3rem" />      
        <ListContainer>
          <ListTitle>Back end</ListTitle>
          <ListParagraph>
          Experience with <br />
          Javascript, Node.js
          </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
          Experience with <br />
          MongoDb, Firebase
          </ListParagraph>
          </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
