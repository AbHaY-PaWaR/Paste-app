import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Pastes = () => {

  const pastes = useSelector((state)=>
  state.paste.pastes);

  console.log(pastes);

  const dispatch = useDispatch();
  const [searchTerm , setSearchTerm] = useState('');
  const filterdata = pastes.filter((paste)=>
    paste.title.toLowerCase().includes(
      searchTerm.toLowerCase()
    )
  )

  function handleDelete(pasteId){

    dispatch(removeFromPastes(pasteId));

  }
  

  return (
    <div className='m-5 '>
      
      <input type="search"
        placeholder='search here'
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
        className='p-3 rounded-xl  min-w-[500px]'
      
      />
      <div className='flex flex-col gap-5 m-5' >

        {
          filterdata.length > 0 &&
          filterdata.map(
            (paste)=>
            {
              return(
                <div className='border'  >


                  <div>
                {paste.title}
                </div>

                <div>
                {paste.content}
                </div>

                <div className='flex flex-row gap-3 place-content-evenly'>
                  <button>
                   <a href={`/home/?pasteId=${paste?._Id}`}>
                    edit
                   </a>
                  </button>
                  <button >
                   <a href={`/pastes/${paste?._Id}`}>
                    view
                   </a>
                  </button>
                   <button onClick={ ()=> handleDelete(
                  paste?._Id)}>
                    delete
                  </button>
                   <button>
                    share
                  </button> 
                  <button onClick={()=> {
                  navigator.clipboard.writeText(
                    paste?.content
                  )
                  toast.success("copied to clickboard")
                  }}>
                    copy
                  </button>
                </div>

                
                <div>
                  {paste.createdAt}
                </div>



                </div>

             

              )
            }
          )
        }

      </div>

    </div>
  )
}

export default Pastes
