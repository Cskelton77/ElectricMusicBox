import styled from 'styled-components';

export const Outer = styled.div`
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: #${props => getColor(props.color)}80;
    border: 3px solid #${props => getColor(props.color)};
    border-radius: 25px;
    margin: 5px;

`

const getColor = (c)=> {
    switch(c) {
        case ('red'):
            return 'AF2019';
        case ('blue'):
            return '0043AA';
        case ('darkred'):
            return '530001';
        default :
            return '000000';
        
    }
}

export const Inner = styled.div`
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: #302A1E;
    margin: 0 auto;
    margin-top: 20%;
    border-radius: 25px;

`
