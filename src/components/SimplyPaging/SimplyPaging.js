import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getClass } from 'scroll-callback';
import SimplyPage from './SimplyPage';

class SimplyPaging extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasClickedNext: false,
            pageCount: 0,
            pageIndex: 0,
            vertical: props.vertical
        };
    }

    componentDidMount = () => {
        this.setState({
            pageCount: getClass('simply-page').length
        });
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { pageIndex } = this.state;
        if (prevState.pageIndex !== pageIndex) {
            window.scrollTo({
                top: window.scrollY + this.getElementTop(pageIndex),
                behavior: 'smooth'
            });
        }
    }

    // Svgs
    getLeftArrow = () => (
        <svg viewBox='0 0 320 512'>
            <path fill='#FFFFFF' d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
        </svg>
    );

    getRightArrow = () => (
        <svg viewBox='0 0 320 512'>
            <path fill='#FFFFFF' d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
        </svg>
    );

    // Helpers
    getSimplyPageElement = (index) => {
        return getClass('simply-page')[index];
    }

    getElementTop = (index) => {
        return this.getSimplyPageElement(index).getBoundingClientRect().top;
    }

    isPrevControlDisabled = () => {
        const { pageIndex } = this.state;
        return pageIndex === 0;
    }

    isNextControlActive = () => {
        const { pageCount, pageIndex } = this.state;
        return pageIndex < pageCount - 1;
    }

    // class helpers
    getPrevControlClass = () => {
        if (this.isPrevControlDisabled()) {
            return 'simply-paging-control simply-page-prev disabled';
        }

        return 'simply-paging-control simply-page-prev';
    }

    getNextControlClass = () => {
        if (this.isNextControlActive()) {
            return 'simply-paging-control simply-page-next';
        }

        return 'simply-paging-control simply-page-next disabled';
    }

    // Clicks
    handlePrevClick = () => {
        const { pageIndex } = this.state;
        if (pageIndex !== 0) {
            this.setState({
                hasClickedNext: false,
                pageIndex: pageIndex - 1
            });
        }
    }

    handleNextClick = () => {
        const { pageCount, pageIndex } = this.state;
        if (pageIndex < pageCount - 1) {
            this.setState({
                hasClickedNext: true,
                pageIndex: pageIndex + 1
            });
        }
    }

    render() {
        const { pageIndex, vertical } = this.state;
        const { children } = this.props;
        return (
            <div className='simply-paging-container'>
                {
                    React.Children.map(children, (child, key) => (
                        <SimplyPage active={pageIndex === key} key={key}>
                            {child}
                        </SimplyPage>
                    ))
                }
                <div className={`simply-paging-controls${vertical ? ' vertical' : ''} clear`}>
                    <div className='simply-paging-control-wrapper prev'>
                        <div className={this.getPrevControlClass()} onClick={this.handlePrevClick}>
                            {this.getLeftArrow()}
                        </div>
                    </div>
                    <div className='simply-paging-control-wrapper next'>
                        <div className={this.getNextControlClass()} onClick={this.handleNextClick}>
                            {this.getRightArrow()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SimplyPaging.defaultProps = {
    vertical: true
};

SimplyPaging.propTypes = {
    children: PropTypes.node.isRequired,
    vertical: PropTypes.bool
};

export default SimplyPaging;
