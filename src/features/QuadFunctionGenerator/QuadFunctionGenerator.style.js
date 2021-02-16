import styled from 'styled-components';

export const Module = styled.div`
    display: inline-block;
    background-color: #B9B9BC;
    padding: 5px 0;
    color: #226DB1;
  hr {
      border-top: 1px solid #226DB1;
      margin: 0;
  }
`


export const ModuleSection = styled.div`
    display: inline-flex;
    flex-direction: row;
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 10px;
    font-size: 14px;
`

export const Screw = styled.div`
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 25px;
  background-color: #000;
  float: ${props=> props.float};
  margin: 5px 15px 0;
`