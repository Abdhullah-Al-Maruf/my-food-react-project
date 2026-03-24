import React from 'react';
import { useState } from 'react';


const Banner = ({setSearchText}) => {
      const [inputValue, setInputValue] = useState("");

const  handleSearch=()=>{
 
    setSearchText(inputValue);
}
     
 

    return (
        <div className='mt-3'>

            <div
                className="min-h-full  bg-cover bg-center"
                style={{ backgroundImage: `url('/bg-food.jpg')` }}
            >
                {/* Dark overlay + content */}
                <div className="min-h-full bg-black/60 flex flex-col md:flex-row items-center justify-center text-center px-4">
                    <div className='p-10'>

                        <h1 className="text-white text-5xl font-bold mb-4">
                            Delicious Foods With
                            <br /><span className="text-amber-500"> Wonderful Eating</span>
                        </h1>
                        <p className="text-white/80 text-lg max-w-md mb-8">
                            Order your favourite meals fresh and hot, right to your door.
                        </p>

                        <div className='bg-white p-4 rounded-full'>
                            <div className="join gap-4">
                                <div>
                                    <label className="input rounded-full md:w-[500px] validator join-item">
                                        <input
                                            className="rounded-full  px-3"
                                            type="text"
                                            value={inputValue}
                                            placeholder="Search Item"
                                            onChange={(e) => setInputValue(e.target.value)}

                                            required
                                        />
                                    </label>
                                </div>
                                <button   onClick={handleSearch} className="btn text-gray-200 bg-amber-500 p-2 join-item rounded-full h-full px-6">
                                    Search
                                </button>
                            </div>
                        </div>

                        <button className=" mt-9  mb-5 btn bg-amber-500 hover:bg-amber-600 text-white border-none px-8">
                            Order Now
                        </button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Banner;