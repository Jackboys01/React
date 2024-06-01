import React from 'react'

const Context = () => {
  return (
    <>
    <div className="h-screen flex items-center justify-center">
  <div className="flex">
    <div className="w-1/2 p-4">
      <h1 className="text-8xl font-bold px-2 py-3">Your feet<br />
        Deserve<br />
        The Best</h1>
      <p className="text-sm py-7 px-4">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
      HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />
       THE BEST AND 
        WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      
      {/* Button div */}
      <div className="mt-4 px-3">
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-5 mr-2 rounded">
          Shop Now
        </button>
        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
          Category
        </button>
      </div>
      <div className="mt-4">
        <p className="text-sm px-3">Also Available On</p>
         <div  className="flex items-center px-3">
         <img src="/Images/amazon.png" alt="shoe" className="mr-4" />
         <img src="/Images/flipkart.png" alt="shoe" />
         </div>
      </div>

    </div>

    <div className="w-1/2 p-3 flex justify-end">
      <img src="/Images/shoe_image.png" alt="shoe" />
    </div>
  </div>
</div>
    </>
  )
}

export default Context