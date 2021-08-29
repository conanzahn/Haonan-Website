import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Layout = styled.div`
    font-size: 20px;
    display: flex;
    flex-wrap: wrap;
    
`;

const ItemStyle = styled(Link)`
    padding-left: 20px;
    padding-right: 20px;
    color: #e6e6e7;
    &:hover {
        color: #e4aa48;
        text-decoration:none;
    }
`;

const Items = () => (
    <Layout>
        {/* haven't fill this part, temporatelt redirect to the homepage*/}
        <ItemStyle to='/About'>About</ItemStyle>
        <ItemStyle to='/Resume'>Resume</ItemStyle>
        <ItemStyle to='/Projects'>Projects</ItemStyle>
        <ItemStyle to='/Contact'>Contact</ItemStyle>
    </Layout>
);
export default Items;