import React from 'react';
import styled from 'styled-components';
import VE from '../../../assets/img/VE_HP.jpg';
import Lane from '../../../assets/img/Lane_Detect.jpg';
import Vehicle from '../../../assets/img/vehicle.jpg';
import VEIMG from '../components/valueEats';
import LIMG from '../components/Lane';
import MWIMG from '../components/MyWeather';

const Cells = styled.div`
    position: relative;
`;

const Post = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid hsla(0,0%,62.7%,.3);
    margin: 0 0 2em;
`;

const PostHeader = styled.div`
    z-index: 2;
    padding: 1.25em 4.25em .1em 1.25em;
    min-height: 4em;
    position: relative;
    flex-grow: 1;
`;

const H3 = styled.h3`
    font-size: .9em;
    color: #3c3b3b;
    font-family: 'Glory', sans-serif;
    font-weight: 800;
    letter-spacing: .25em;
    line-height: 1.65;
    margin: 0 0 1em;
    text-transform: uppercase;
`;

const P = styled.p`
    font-size: .7em;
    color: #4b4a4a;
    font-family: 'Glory', sans-serif;
    font-weight: 600;
    letter-spacing: .25em;
    line-height: 1.65;
    margin: 0 0 1em;
    text-transform: uppercase;
`;

const Href = styled.a`
    overflow: hidden;
    width: 100%;
    transition: color .2s ease,border-bottom-color .2s ease;
    border-bottom: 1px dotted hsla(0,0%,62.7%,.65);
    color: inherit;
    text-decoration: none;
`;

const A = styled.a`
    overflow: hidden;
    width: 100%;
    transition: color .2s ease,border-bottom-color .2s ease;
    color: inherit;
    text-decoration: none;
    :hover{
        color: #e4aa48;
    }
`;

const IMG = styled.img`
    transition: transform .2s ease-out;
    width: 80%;
    height: 80%;
    display: block;
    padding-left: 12em;
`;

const DES = styled.div`
    /* position: absolute; */
    padding: 0;
    bottom: 0;
    /* border-top: 1px solid hsla(0,0%,62.7%,.3); */
`;

const DesP = styled.p`
    font-size: .9rem;
    margin: 0;
    padding: 1.25em;
    background-color: hsla(0,0%,75%,.1);
    color: #3c3b3b;
    font-family: 'Glory', sans-serif;
    /* z-index: 1000; */
    transition: all .1s;
    -webkit-transition: all .1s ease-in-out;
`;

const Items = () => (
    <Cells>
        <Post>
            <PostHeader>
                <H3><A href='https://conanzahn.github.io/myweather' target="_blank">My Weather App</A></H3>
                <P>SEPTEMBER 2021</P>
            </PostHeader>
            <Href href='https://conanzahn.github.io/myweather' target="_blank">
                <MWIMG />
            </Href>
            <DES>
                <DesP>My Weather App is a web application that provide users search function to 
                    check weather and forecast information. This is build by Ract and OpenWeatherMap API.</DesP>
            </DES>
        </Post>

        <Post>
            <PostHeader>
                <H3><A href='https://github.com/conanzahn/ValueEatsWebsite9900.git' target="_blank">Value Eats</A></H3>
                <P>MAY 2021 - AUGUST 2021</P>
            </PostHeader>
            <Href href='https://github.com/conanzahn/ValueEatsWebsite9900.git' target="_blank">
                {/* <IMG src={VE}/> */}
                <VEIMG />
            </Href>
            <DES>
                <DesP>Value eats is a discount voucher website, 
                    build for diners and eateries. Diners can search, navigate, 
                    book and manager vouchers; Eateries can distribute, manage voucher 
                    for their restaurant.</DesP>
            </DES>
        </Post>

        <Post>
            <PostHeader>
                <H3><A href='https://github.com/conanzahn/Velocity-Estimation-and-Lane-Detection.git/' target="_blank">Velocity Estimation and Lane Detection (Computer Vision)</A></H3>
                <P>April 2021</P>
            </PostHeader>
            <Href href='https://github.com/conanzahn/Velocity-Estimation-and-Lane-Detection.git/'>
                {/* <IMG src={Lane}/> */}
                <LIMG />
            </Href>
            <DES>
                <DesP>This is a group project about computer vision. Using python 
                    to develop a programme estimate vehicle velocity and detect high-way driving lane.</DesP>
            </DES>
        </Post>

        <Post>
            <PostHeader>
                <H3><A href='https://github.com/conanzahn/Vehicle-Detection-Computer-Vision-.git' target='_blank'>Vehicle Detection (Computer Vision)</A></H3>
                <P>March 2021</P>
            </PostHeader>
            <Href href='https://github.com/conanzahn/Vehicle-Detection-Computer-Vision-.git'>
                <IMG src={Vehicle}/>
            </Href>
            <DES>
                <DesP>Vehicle detection and statistics are an important component of 
                    computer vision. With the popular installation of traffic surveillance 
                    cameras, the use of computer vision for intelligent recognization and 
                    analysis of vehicles becomes very effective. Vehicle detection takes 
                    images as input, analyzes through a series of algorithms, and outputs 
                    labelled images with bounding boxes around the recognized vehicles.</DesP>
            </DES>
        </Post>
    </Cells>
)
export default Items;
