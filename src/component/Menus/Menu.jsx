import React, { useState } from 'react';

const Menu = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);

  // ✅ no result case
if (!dishes || dishes.length === 0){
    return (
      <h2 className="text-center text-2xl mt-10 text-gray-500">
        🍽️ No food found
      </h2>
    );
  }
  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto mt-10">
        {dishes.map((dish) => (
          <div key={dish.idMeal} className="space-y-4 shadow-md p-5">
            <img
              src={dish.strMealThumb}
              alt={dish.strMeal}
              className="w-full h-40 object-cover rounded"
            />

            <div className="text-center">
              <h2 className="font-bold text-2xl mt-2">
                {dish.strMeal}
              </h2>
            </div>

            <div className="flex justify-between">
              <button className="btn bg-orange-500 text-white">
                add to cart
              </button>

              <a
                href={dish.strYoutube}
                className="btn btn-warning btn-outline"
              >
                <i class="fa-solid fa-eye"></i>
              </a>

              <button
                onClick={() => setSelectedDish(dish)}
                className="btn btn-warning btn-outline"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ MODAL (ONLY ONE) */}
      {selectedDish && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              {selectedDish.strMeal}
            </h3>

            <img
              src={selectedDish.strMealThumb}
              className="rounded mt-3 w-full h-auto"
            />

            <p className="py-4">
              {selectedDish.strInstructions}
            </p>

            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setSelectedDish(null)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Menu;