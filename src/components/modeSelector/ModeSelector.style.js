import styled from 'styled-components';

export const SelectorWrapper = styled.div`
display: inline-flex; 
`

export const ButtonBlock = styled.div`
align-self: center
`

export const SelectorButton = styled.div`
display: inline-block;
width: 25px;
height: 25px;
background-color: #626267;
border-radius: 25px;
margin: 5px;
`
export const LightBlock = styled.div`
display: flex;
flex-direction: column;
`


export const Light = styled.div`
display: inline-block;
width: 5px;
height: 5px;
background-color: ${props => props.isSelected?  '#D5621A' : '#BE501A'};
box-shadow: ${props => props.isSelected?  '0 0 3px  #F6FB00' : 'none'};
border:  ${props => props.isSelected?  '1px solid black' : 'none'};
border-radius: 5px;
margin: 5px;
`

