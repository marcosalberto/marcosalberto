import React from 'react'
import Content from '../Content';

import './style.scss'

const ContentProjectsItem = (data) => {
    console.log(data);
    return (
        <div className="content-projects__item">
            <div className="content-projects__item__title">{ data.title }</div>
            <a className="content-projects__item__link" target="_blank"  rel="noopener noreferrer" href={ data.link }>{ data.link }</a>
            <div className="content-projects__item__description">{ data.description }</div>
        </div>
    )
}


const ContentProjects = (props) => {

    return (
        <div>
            { !!props.list.length && (
                <Content title={ props.title } class="content-projects">
                    { props.list.map((item, index) => <ContentProjectsItem title={ item.title } description={ item.description } link={ item.link } key={ index } />) }
                </Content>
            )}
        </div>
    )
}

export default ContentProjects;