import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
   
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="phone:+91 9737115121">+91 9737115121</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:harshil.190410116006">harshil.190410116006@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>A smart working developer</Slogan>
        </CompanyContainer>
        <SocialIcons href="/">
      <AiFillGithub size="3rem" />  
      </SocialIcons>
      <SocialIcons href="/">
      <AiFillLinkedin size="3rem" />  
      </SocialIcons>
      <SocialIcons href="/">
      <AiFillInstagram size="3rem" />  
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
