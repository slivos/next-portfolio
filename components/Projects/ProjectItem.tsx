import React from 'react';
import { ProjectType } from '../../api/datatypes';
import { Item, Text, TextWrapper, SendTo } from './ProjectItem.styled';

const ProjectItem = (props: { project: ProjectType }) => {
    return (
        <>
            <SendTo href="http://falcon-eshop.netlify.com" rel="noopener noreferrer" target="_blank">
                <Item key={props.project.id}>
                    <TextWrapper>
                        <Text>{props.project.name}</Text>
                    </TextWrapper>
                </Item>
            </SendTo>
        </>
    );
};

export default ProjectItem;
