import styled from 'styled-components';

export const BlueKnob = styled.div`
    display: inline-block;
    background-color: #226DB1;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    transition: transform 50ms ease;
    transform: rotate(${(props)=> props.angle}deg);
    border: 8px solid black;
    &:after {
        content: '';
        display: inline-block;
        width: 5%;
        background-color: #fff;
        height: 50%;
    }
`

export const RotaryControl = styled.div`
    display: inline-block;
    color: #226DB1;
    text-transform: uppercase;
    font-size: 12px;
    font-style: italic;

    span {
        display: inline-block;
        vertical-align: bottom;
    }
`