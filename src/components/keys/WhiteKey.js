import React from 'react';
import { Key, KeyMask, KeyTop, KeyBottom } from './WhiteKey.style'

const WhiteKey = ({pos='center', osc, env, note}) =>  {

    const startNote = (note)=> {
        osc.set({frequency: note});
        env.triggerAttack()
    }
    const stopNote = ()=> {
        env.triggerRelease()
    }
 
    return (
      <Key
        onMouseDown={()=> startNote(note)}
        onMouseUp={stopNote}>
        
          <KeyBottom />
          <KeyMask pos={pos}/>
          <KeyTop pos={pos} />
      </Key>
    );
}

export default WhiteKey;
