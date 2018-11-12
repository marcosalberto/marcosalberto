import React from 'react';
import Content from '../Content';

import './style.scss';

const ContentArticlesItem = data => {
  return (
    <div className="content-articles__item">
      <a className="content-articles__item__link" href={data.link}>
        <span className="content-articles__item__date">{data.published}</span>
        <span className="content-articles__item__title">{data.title}</span>
      </a>
    </div>
  );
};

const ContentArticles = props => {
  return (
    <div>
      {!!props.list.length && (
        <Content title={props.title} class="content-articles">
          {props.list.map((item, index) => (
            <ContentArticlesItem
              title={item.title}
              published={item.published}
              link={item.link}
              key={index}
            />
          ))}
        </Content>
      )}
    </div>
  );
};

export default ContentArticles;
