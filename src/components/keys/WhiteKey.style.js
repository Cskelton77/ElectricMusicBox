import styled from 'styled-components';

export const Key = styled.div`
    display: block;
    height: 300px;
    position: relative;
    width: 50px;
    width: 60px;
    margin: 5px;
    flex-shrink: 0;
`

export const KeyMask = styled.div`
    background-color: #fff;
    width: 26px;
    height: 265px;
    position: absolute;
    z-index: 5;
    top: 15px;   
    left: ${props => props.pos==='left'? '0' : 
                     props.pos==='center'? '13px' : 'initial'};
    right: ${props => props.pos==='right'? '5px' : 'initial'};
`
export const KeyTop = styled.div`
    border: 5px solid #131830;
    border-radius: 5px;
    background-color: #fff;
    width: 26px;
    height: 275px;
    position: absolute;
    z-index: 4;
    top: 0;
    left: ${props => props.pos==='left'? '-5px' : 
                     props.pos==='center'? '8px' : 'initial'};
    right: ${props => props.pos==='right'? '0' : 'initial'};
`


export const KeyBottom = styled.div`
    position: absolute;
    background-color: #fff;
    z-index: 5;
    bottom: 15px;
    left: -5px;
    border: 5px solid #131830;
    border-radius: 5px;
    width: 52px;
    height: 150px;
`