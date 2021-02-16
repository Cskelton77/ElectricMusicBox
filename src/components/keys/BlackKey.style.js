import styled from 'styled-components';

export const Key = styled.div`
    height: 300px;
    position: relative;
    flex-shrink: 0;
`

export const KeyTop = styled.div`
    position: absolute;
    background-color: #fff;
    z-index: 5;
    top: 5px;
    left: ${props => props.pos==='left'? '-26px' : 
                     props.pos==='center'? '-16px' : 'initial'};
    right: ${props=> props.pos==='right'? '-18px' : 'inherit'};
    border-radius: 5px;
    width: ${props=> props.pos==='center'? '24' : '30'}px;
    height: 110px;
    
`