import React, { useState } from 'react';
import { ButtonBlock, Light,LightBlock, SelectorButton, SelectorWrapper} from './ModeSelector.style'

const ModeSelector = () =>  {

    const [selected, setSelected] = useState(1);

    const setSelectedMode = ()=> {
        let newSelected = selected+1;
        if(newSelected>2){
            newSelected=0;
        }
        setSelected(newSelected);
    }
 
    return (
        <SelectorWrapper>
            <LightBlock>
                <Light isSelected={selected===0} />
                <Light isSelected={selected===1} />
                <Light isSelected={selected===2} />
            </LightBlock>
            <ButtonBlock>
                <SelectorButton onClick={setSelectedMode} />
            </ButtonBlock>
      </SelectorWrapper>
    );
}

export default ModeSelector;
