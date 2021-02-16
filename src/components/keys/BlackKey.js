import React from 'react';
import { Key, KeyTop } from './BlackKey.style'

const WhiteKey = ({pos, osc, env, note}) =>  {

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
          <KeyTop pos={pos}/>
      </Key>
    );
}

export default WhiteKey;
