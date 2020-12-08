import React, { useEffect, useState } from 'react';

// SERVICES
import api from '../../services/api';

// ICONS
import {
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';

// STYLED-COMPONENTS
import {
  Container,
  Logomarca,
  Body,
  Icons,
  Version
} from './styles';

// ASSETS
import logomarca from '../../assets/img/logo.png';



export default function Homepage() {

  const [title, setTitle] = useState('');
  const [version, setVersion] = useState('');

  async function loadVersion(){
    const response = await api.get(`/`);
    console.log(response);
    setTitle(response.data.title);
    setVersion(response.data.version);
  }

  useEffect(()=>{
    loadVersion();
  }, [])

  return (
    <Container>
      <Logomarca src={logomarca} alt="Logo" />
      <Body>
        <span>POWERED BY</span>
        <span className="title">
          Input
          <b>On</b>
        </span>
      </Body>
      <Version>
        <span><b>Title:</b> {title}</span>
        <span><b>Version:</b> {version}</span>
      </Version>
      <Icons>
        <FaGithub className="icon" onClick={() => window.open('https://github.com/dennergazevedo')} />
        <FaLinkedinIn className="icon" onClick={() => window.open('https://www.linkedin.com/in/denner-azevedo-6b7b97199/')} />
      </Icons>
    </Container>
  );
}
