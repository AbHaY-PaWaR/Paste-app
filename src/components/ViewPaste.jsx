import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const ViewPaste = () => {


  const {id} = useParams();

  const allPastes = useSelector(
    (state)=> state.paste.pastes
);

const paste = allPastes.filter(
  (p)=> p._Id== id
)[0];
console.log({paste});


  return (
    <div>
      
    <div className='flex  items-center gap-7 mt-5'>

      <h2>Title:</h2>
        <input 
        className='p-2 rounded-xl '
        value={paste.title}
        disabled
        onChange={(e)=> setTitle(e.target.value)}
         type="text" placeholder='Enter Title here'  />

         <button onClick={()=>{
           navigator.clipboard.writeText(
            paste?.content
          )
          toast.success("copied to clickboard")
         }} className='p-2 rounded-xl'>
          copy to clickboard
         </button>


    </div>
    <div className=' flex items-baseline flex-row gap-5   mt-5'>

      <h2 className='max-w-12  '>Content:</h2>

    <textarea name="" id=""
    placeholder='Enter Code here'
    value={paste.content}
    disabled
    onChange={(e)=> setValue(e.target.value)}
    className='rounded-xl p-3 min-w-[500px] '
    rows={21}

    ></textarea>


    </div>










    </div>
  )
}

export default ViewPaste
