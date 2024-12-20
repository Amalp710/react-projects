import { useState,useCallback, useEffect,useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState('')
   
  const passwordRef=useRef(null)

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,16 )
    window.navigator.clipboard.writeText(password)

  },[password])

  const passwordGenerator= useCallback(()=>{
    let pass = ''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' 
     
    if(numbers) str+="0123456789"
    if(characters) str+="!@#$%^&*-_+=[]{}~`"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str[char]
    }

    setPassword(pass)
    

  },[length,numbers,characters,setPassword])


  useEffect(()=>{
    passwordGenerator()
  },[length,numbers,characters,passwordGenerator])
  

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-700 bg-gray-600">
      <h1 className=" font-bold text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 "
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-4 py-2">Copy</button>
      </div>
      <div className=" flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          className="cursor-pointer"
            type="range" 
            min={6}
            max={100}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length : {length}</label> 
        </div>
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={numbers}
            id="numberInput"
            onChange={()=>{setNumbers((prev)=>!prev)}} 
          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={characters}
            id="characterInput"
            onChange={()=>{setCharacters((prev)=>!prev)}} 
          />
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>

  )
}

export default App
