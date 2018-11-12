import React from 'react';
import './style.scss';

const Content = props => {
  const componentClass = props.class ? 'content ' + props.class : 'content';

  return (
    <div className={componentClass}>
      <div className="content__title">{props.title}</div>
      <div className="content__data">{props.children}</div>
    </div>
  );
};

export default Content;
