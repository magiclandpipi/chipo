import React from 'react';
import PropTypes from "prop-types";

const GeneralContainer = ({ title, children, margin = '20px' }) => {
    const containerStyle = {
        margin: margin,
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    };

    const titleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '15px',
    };

    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>{title}</h2>
            <div>{children}</div>
        </div>
    );
};

GeneralContainer.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    margin: PropTypes.string,
};

export default GeneralContainer;
