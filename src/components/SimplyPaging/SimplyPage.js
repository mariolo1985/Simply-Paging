import React from 'react';
import PropTypes from 'prop-types';

const SimplyPage = ({
    active,
    children,
    pageWidth
}) => (
        <div className={`simply-page${active ? ' active' : ''}`} style={{ width: `${pageWidth}px` }}>
            {children}
        </div>
    );

SimplyPage.defaultProps = {
    active: false,
    pageWidth: window.innerWidth
};

SimplyPage.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    pageWidth: PropTypes.number
};

export default SimplyPage;
