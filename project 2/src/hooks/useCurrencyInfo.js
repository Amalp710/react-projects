import { useEffect,useState } from "react";


function useCurrencyInfo(currency){

   const APIKEY=import.meta.env.VITE_API_KEY

    const [data, setData] = useState({})
     useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/${APIKEY}/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=> setData(res.conversion_rates) )
        console.log(data)
     },[currency])

     console.log(data)
     return data
}


export default useCurrencyInfo