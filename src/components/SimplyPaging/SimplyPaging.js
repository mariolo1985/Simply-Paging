import React, { Component } from 'react';
import { getClass } from 'scroll-callback';

import SimplyPage from './SimplyPage';

class SimplyPaging extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            pageCount: 0,
            pageIndex: 0,
            pageTop: 0
        };
    }

    componentDidMount = () => {
        this.setState({
            pageCount: getClass('simply-paging').length
        });
    }

    getSimplyPageElement = (index) => {
        return getClass('simply-page')[index];
    }

    getElementTop = (index) => {
        return this.getSimplyPageElement(index).getBoundingClientRect().top;
    }

    handlePrevClick = () => {
        const { pageIndex } = this.state;
        if (pageIndex !== 0) {
            window.scrollTo(
                {
                    top: this.getElementTop(pageIndex - 1)
                }
            );
            this.setState({
                pageIndex: pageIndex - 1,
                pageTop: this.getElementTop(pageIndex - 1)
            });
        }
    }

    handleNextClick = () => {
        const { pageCount, pageIndex } = this.state;
        if (pageIndex <= pageCount) {
            window.scrollTo({
                top: this.getElementTop(pageIndex + 1)
            });
            this.setState({
                pageIndex: pageIndex + 1,
                pageTop: this.getElementTop(pageIndex + 1)
            });
        }
    }

    render() {
        const { pageIndex } = this.state;
        return (
            <div className='simply-paging-container'>
                {
                    React.Children.map(this.props.children, (child, key) => {
                        return (
                            <SimplyPage active={pageIndex === key} key={key}>
                                {child}
                            </SimplyPage>
                        );
                    })
                }
                <div className='simply-paging-controls'>
                    <div className='simply-page-prev' onClick={this.handlePrevClick}>PREV</div>
                    <div className='simply-page-next' onClick={this.handleNextClick}>NEXT</div>
                </div>
            </div>
        );
    }
}

export default SimplyPaging;
