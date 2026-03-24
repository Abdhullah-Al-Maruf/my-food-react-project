// btn data

const buttons = [
{ id: 1, label: "All Menu" , api: "https://www.themealdb.com/api/json/v1/1/search.php?s=a" },
{ id: 2, label: "Burger" ,api: "https://www.themealdb.com/api/json/v1/1/search.php?s=burger"},
{ id: 3, label: "Chicken", api: "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken" },
{ id: 4, label: "Fish",api: "https://www.themealdb.com/api/json/v1/1/search.php?s=fish" },
{ id: 5, label: "Desert",api: "https://www.themealdb.com/api/json/v1/1/search.php?s=cake" },

]




const ToggleBtn = ({active,setActive,handleApi}) => {



// toggle 
const handleToggle=(id,api)=>{
    setActive((previousId)=> previousId===id? null:id)
    handleApi(api)
}


    return (
        <div className='flex w-[90%] mx-auto flex-col mt-7 text-center md:flex-row justify-between items-center '>
            {/* right div */}     
        <div>
        <h1 className='text-orange-500 font-semibold text-2xl'>food Menu <i className="fa-solid fa-utensils"></i></h1>
        <span className='text-3xl font-bold'>Popular <span className='text-orange-500'>Delicious</span> Foods</span>
        </div>
            {/* left div */}
            <div className='mt-3  ' >
           {
            buttons.map(btn =>{
                // check the btn is active by matching id
                const isActive = active===btn.id;
                return(
                    <button 
                    key={btn.id}
                    onClick={()=>{
                        handleToggle(btn.id,btn.api);
                    

                    } 
                    }
                    
                    className={` text-sm font-light mr-2 px-4  ${isActive?
                         " btn bg-orange-400 text-neutral-50" : 
                         " btn btn-warning btn-outline "}`}
                    > {btn.label}
                    </button>
                )
            })

           } 


            </div>
        </div>
    );
};

export default ToggleBtn;