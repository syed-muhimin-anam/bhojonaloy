import React from "react";

const Menu = () => {
  return (
    <div className=" p-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-purple-400 mb-4">Our Menu</h1>
        <p className="text-center text-purple-500 mb-8">
          Check out the variety of specialties offered at our restaurant, including authentic Bangladeshi cuisine!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Breakfast Section */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-400">Breakfast</h2>
            <p className="text-sm  mb-4">Served daily from 7 – 11 am.</p>
            <div>
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-semibold">Paratha & Omelette</h3>
                  <p className="text-sm">Crispy paratha with a spiced omelette.</p>
                </div>
                <p className="text-purple-500">$5</p>
              </div>
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-semibold">Chana Masala & Luchi</h3>
                  <p className="text-sm">Spiced chickpea curry served with fluffy luchi.</p>
                </div>
                <p className="text-purple-500">$6</p>
              </div>
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-semibold">Aloo Bharta & Rice</h3>
                  <p className="text-sm">Mashed potatoes with mustard oil, onion, and rice.</p>
                </div>
                <p className="text-purple-500">$4</p>
              </div>
            </div>
          </div>

          {/* Lunch Section */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-400">Lunch</h2>
            <p className="text-sm  mb-4">Served daily from 12 – 4 pm.</p>
            <div>
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-semibold">Biriyani</h3>
                  <p className="text-sm">Aromatic rice cooked with spices, meat, and potatoes.</p>
                </div>
                <p className="text-purple-500">$10</p>
              </div>
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-semibold">Shutki Bhuna</h3>
                  <p className="text-sm">Dry fish curry cooked with onions and spices.</p>
                </div>
                <p className="text-purple-500">$9</p>
              </div>
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-semibold">Ilish Mach Bhuna</h3>
                  <p className="text-sm">Hilsa fish curry with mustard sauce.</p>
                </div>
                <p className="text-purple-500">$12</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">Kacchi Biriyani</h3>
                  <p className="text-sm">Traditional mutton biriyani cooked with fragrant rice.</p>
                </div>
                <p className="text-purple-500">$15</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg">
            View our full menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
