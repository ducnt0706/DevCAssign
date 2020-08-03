import React, { useState,useEffect } from 'react'

export default function useFetch(url) {
    const [loading,setLoading] = useState(true);
    const [data,setData]=useState([])

    const getDatas = async (url) => {
        try {
          const res = await fetch(url);
          const dataJson = await res.json();
          setData(dataJson);
        } catch (err) {
          console.log('Error Fetching data');
        }
        setLoading(false);
      };

      useEffect(()=>{
        getDatas();
      },[url])
    
    return [data,loading]
}
