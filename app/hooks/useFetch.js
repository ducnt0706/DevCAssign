import React, { useState,useEffect,useRef } from 'react'

export default function useFetch(initUrl,initData) {
    const [data, setData] = useState(initData);
    const [url,setUrl] =useState(initUrl);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError]=useState(false);

    const getDatas = async () => {
      setIsLoading(true);
      setIsError(false);
        try {
          const res = await fetch(url);
          const dataJson = await res.json();
          setData(dataJson);
        } catch (err) {
          setIsError(true);
        }
        setIsLoading(false);
      };

      useEffect(()=>{
        getDatas(url);
      },[url])
    
    return [data,isLoading,isError,setUrl]
}
