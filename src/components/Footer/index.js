import React from 'react';

import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import {
  FooterContainer,
  AuthorInformation,
  SocialMedia,
  ItemSocialMedia,
} from './styles';

const Footer = () => (
  <FooterContainer>
    <p>Igerencia</p>
    <AuthorInformation>
      <p>Angel Castiblanco</p>
      <SocialMedia>
        <ItemSocialMedia
          href="https://github.com/adcastiblanco"
          target="_blank"
        >
          <FaGithub />
        </ItemSocialMedia>
        <ItemSocialMedia
          href="https://twitter.com/ADeveloperPlay"
          target="_blank"
        >
          <FaTwitter />
        </ItemSocialMedia>
        <ItemSocialMedia
          href="https://www.linkedin.com/in/angel-castiblanco/"
          target="_blank"
        >
          <FaLinkedinIn />
        </ItemSocialMedia>
      </SocialMedia>
    </AuthorInformation>
  </FooterContainer>
);

export default Footer;
