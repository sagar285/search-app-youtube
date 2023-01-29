import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setdata] = useState([])
  const [search, setsearch] = useState([])
  function searchchange(e){
    if(!e.target.value) return setsearch(data)
    const resultarray = data.filter(post=>post.title.includes(e.target.value)||post.body.includes(e.target.value));
    setsearch(resultarray);
  }
  useEffect(() => {
    const fetchapi = async()=>{
      const url="https://jsonplaceholder.typicode.com/posts"
      const response = await fetch(url);
      const result = await response.json();
      // console.log(result);
      setdata(result);
      setsearch(result);
    }
  fetchapi();

  
  }, [])
 
  

  return (
    <>
    <input type="text" className='bg-gray-700 text-white font-bold' onChange={searchchange} />
    {
      search.map((post)=>{
        return(
          <div className='h-full text-center w-full bg-gray-200'>
            <h1 className='text-red-900 font-extrabold pr-0'>{post.title}
            </h1>
            <p className='text-blue-900 font-extrabold'>{post.body}</p>
            <p>{post.id}</p>
          </div>
        )
      })
    }
    </>
  )
}

export default App
