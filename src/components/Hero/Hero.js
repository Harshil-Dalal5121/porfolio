import React from 'react';
import resume from './resume_pdf.pdf';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to my <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
          I am a Web Developer eager to learn new things..💻
        </SectionText>
        <Button onclick={()=> window.location=''}>My Resume</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;