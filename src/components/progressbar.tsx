import React from 'react'


interface ParentProps {
    width: string;
  }

const ProgreeBar: React.FC<ParentProps> = ({width}) => {

    console.log("width" , width)
  return (
    <div className='main' style={{border:"1px solid #ffffff" , padding:"2px" , borderRadius:"4px"}}>
      <div style={{border:"2px solid gray" , width: width }}></div>
    </div>
  )
}

export default ProgreeBar
