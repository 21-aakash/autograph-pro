import React,  { useState } from 'react'

import SignatureCanvas from 'react-signature-canvas'


function App() {
const [signature, setsignature] = useState()
const [result, setresult] = useState()

const [pencolor, setpencolor] = useState("black")


const clearhandler=()=>
{
            signature.clear();
            setresult(null)

}
const savehandler=()=>
{
            
 const res = signature.getTrimmedCanvas().toDataURL('image/jpeg')
 console.log(res)
 setresult(res)
  // Trigger download
  const downloadLink = document.createElement('a');
  downloadLink.href = res;
  downloadLink.download = 'signature.jpg';
  downloadLink.click();
}



  



  return (
<div id='pura' className=" h-screen flex flex-col justify-center items-center">
 
  
  <h1 className="text-3xl font-bold text-white text-center mb-8">Download Your Signature</h1>

 <div className='w-auto h-10'>
  <select
    value={pencolor}
    onChange={(e) => setpencolor(e.target.value)}
    className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
  >
    <option value="red">Red</option>
    <option value="black">Black</option>
    <option value="green">Green</option>
  </select>
</div>
<div className={`bg-${pencolor}-500 h-20 w-20`}>
      
    </div>


    <div className={`w-auto border-2 border-${pencolor}-500 rounded-lg p-1`}>


  <SignatureCanvas 
  
  
  ref={(ref) => setsignature(ref)}
  penColor={pencolor}
  backgroundColor="rgba(255,255,255,1)"
  canvasProps={{width: 600, height: 400, className: 'sigCanvas'}} />
  </div>
  
  <div className='flex flex-row  ' > 
  <button onClick={clearhandler} className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out m-4">Clear</button>
<button onClick={savehandler} className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out m-4">Save</button>

 
  </div>
  
  
  { result && 
 <div>
<img height={300} width={300}  src={result} alt="your signature preview" />


 </div>
 }
</div>


  )
    

}

export default App

