import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
      I am Yash Prakash, a Web Developer.
      I love creating beautiful and functional websites.
      </SectionText>
      <Button onClick={()=> window.location = 'https://drive.google.com/file/d/1OY79w4YpXfPtdC09y6LvfSy2zEcvh70v/view?usp=sharing'}>My Resume </Button>
    </LeftSection>
  </Section>
);

export default Hero;