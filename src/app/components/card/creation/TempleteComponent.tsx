import React from 'react'
import SecondTempleteType from '../templete/second/SecondTempleteType'
import DefaultTemplateType from '../templete/default/DefaultTemplateType'

const TempleteComponent = () => {
  return (
    <div className="matrix_box flex flex-col justify-items-center space-y-3 tracking-widest text-gray-400 pl-[20px]">
      <p className="text-xs font-bold text-zinc-50">TEMPLATE</p>
      <div className="scroller max-h-72 w-24 flex-auto space-y-5 overflow-auto">
        <DefaultTemplateType />
        <SecondTempleteType />
      </div>
    </div>
  )
}

export default TempleteComponent