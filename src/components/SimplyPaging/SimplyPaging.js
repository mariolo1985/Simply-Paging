import React, { Component } from 'react';
import { getClass } from 'scroll-callback';

class SimplyPaging extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            pageIndex: 0
        };
    }

    componentDidMount = () => {
        const { isLoaded } = this.state;

        if (isLoaded) {
            const simplyPagingContainers = getClass('simply-paging-container');
            simplyPagingContainers.forEach((container) => {
                console.log(container);
            });
        }
    }

    render() {
        return (
            <div className='simply-paging-container'>hello world</div>
        );
    }
}

export default SimplyPaging;
