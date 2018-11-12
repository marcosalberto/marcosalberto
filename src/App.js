import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Content from './Components/Content/';
import ContentArticles from './Components/ContentArticles/';
import ContentProjects from './Components/ContentProjects/';
import ContentContact from './Components/ContentContact/';

import './App.scss';

class App extends Component {
  render() {
    const posts = [
      {
        title:
          'Como as dimensões customizadas podem adaptar o Google Analytics ao seu negócio',
        published: '10/11/2018',
        link: '#',
      },
      {
        title:
          'Como as dimensões customizadas podem adaptar o Google Analytics ao seu negócio',
        published: '10/11/2018',
        link: '#',
      },
    ];

    const projects = [
      {
        title: 'Correio da Bahia',
        link: 'http://www.correio24horas.com.br/',
        description:
          'Correio da Bahia é portal de notícias de maior audiência do nordeste. Atuei liderando o desenvolvimento do portal e do paywall.',
      },
      {
        title: 'TNH1',
        link: 'http://www.tnh1.com.br/',
        description:
          'TNH1 é portal de notícias de maior audiência do nordeste.',
      },
    ];

    return (
      <div className="app">
        <Header title="Marcos Alberto" subtitle="front-end & web analytics" />

        <Content title="Sobre">
          Sou um desenvolvedor front-end com mais de 8 anos de experiência,
          atualmente trabalho na Convergence Works e minhas outras áreas de
          interesse são web analytics, experiência do usuário e gestão de
          produto.
        </Content>

        <ContentArticles title="Artigos" list={posts} />

        <ContentProjects title="Projetos" list={projects} />

        <ContentContact />
      </div>
    );
  }
}

export default App;
