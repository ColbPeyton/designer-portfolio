import React from 'react';
// import axios from 'axios';
import {Work} from './Work';

interface WorkContainerProps{
    screenSize: string;
}

interface WorkContainerState{
    workData: string[];
}

export class WorkContainer extends React.Component<WorkContainerProps, WorkContainerState>{
    constructor(props: WorkContainerProps){
        super(props);
        this.state = {
            workData: []
        }
    }

    render(){
        return(
            <div>
                Work Container
                <Work imageUrl="url" title="title" desc={'desc'}/>
            </div>
        )
    }
}