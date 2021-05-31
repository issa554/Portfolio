import React from 'react'

const SkillItem = ({name , persent}) => {
 
    return (
        <div>
          
          <style dangerouslySetInnerHTML={{__html: `
          .${name}{
            text-align: center;
            font-weight: bolder;
            padding-top: 3px;
            padding-bottom: 3px;
            color: white;
            border-radius: 20px;
         }
      
    .${name} {
      width: ${persent}%;
      background-color: #2caeba;
   }
    `}} />
            
            <h3>{name}</h3>
<div class="container">
<div class={`${name}`}>{persent}%</div>
</div>
    
        </div>
    )
}

export default SkillItem
