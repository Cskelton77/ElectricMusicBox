import React, { useEffect, useState} from 'react';
import { Inner, Outer } from './Jack.style'

const Jack = ({color, purpose}) =>  {
   

    return (
        <Outer color={color}>
            <Inner />
        </Outer>
  );
}

export default Jack;
