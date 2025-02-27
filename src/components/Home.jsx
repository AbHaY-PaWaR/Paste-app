import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { addToPastes, updatePastes } from '../redux/pasteSlice';

const Home = () => {

    const [title , setTitle] = useState("");
    const [value , setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const allPastes = useSelector(
        (state)=> state.paste.pastes
    );

    const dispatch = useDispatch()


   

    function createPaste(){

        const paste = {
            title: title,
            content: value,
            _Id: pasteId || 
            Date.now().toString(36),
            createdAt:new Date().toISOString(),
        }

        if (pasteId) {
            // update
            dispatch(updatePastes(paste));
        }
        else{
            //create
            dispatch(addToPastes(paste));
        }

        setTitle('');
        setValue('');
        setSearchParams({});

    }
    useEffect(()=>{

        if (pasteId) {
            const paste = allPastes.find((p)=> 
            p._Id===pasteId)
            setTitle(paste.title)
            setValue(paste.content)
          
        }

    }
, [pasteId]

    )


  return (
    <div >
      
    <div className='flex gap-7 mt-5'>
        <input 
        className='p-2 rounded-xl '
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
         type="text" placeholder='Enter Title here'  />

         <button onClick={createPaste} className='p-2 rounded-xl'>
            {
                pasteId ? "Update My Paste" : "Create My Paste"
            }
         </button>


    </div>
    <div className='mt-5'>

    <textarea name="" id=""
    placeholder='Enter Content here'
    value={value}
    onChange={(e)=> setValue(e.target.value)}
    className='rounded-xl p-3 min-w-[500px] '
    rows={21}

    ></textarea>


    </div>










    </div>
  )
}

export default Home
