import React from 'react';
import PropTypes from 'prop-types';

const SimplyPage = ({
    children
}) => (
    <div className='simply-page'>
        {children}
    </div>
);

SimplyPage.propTypes = {
    children: PropTypes.node.isRequired
};

export default SimplyPage;
