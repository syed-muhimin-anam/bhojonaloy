import React from 'react';

const Category = () => {
    const categories = [
        { name: 'Appetizers', image: 'https://i.ibb.co/jD0KtBZ/appetizer-spread.webp' },
        { name: 'Main Courses', image: 'https://i.ibb.co/BcWNy4h/3-Course-Hero-1.jpg' },
        { name: 'Desserts', image: 'https://i.ibb.co/fkbvx3Y/no-bake-oreo-dessert-1-2.jpg' },
        { name: 'Beverages', image: 'https://i.ibb.co/QpsCJdY/beverages-cover.png' },
    ];

    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-purple-700">Explore Our Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {categories.map((category, index) => (
                    <div key={index} className="group card card-compact rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-xl">
                        <figure className="relative">
                            <img
                                className="w-full h-48 object-cover rounded-lg"
                                src={category.image}
                                alt={category.name}
                            />
                            <div className="absolute inset-0 bg-black opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-center">
                                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                            </div>
                        </figure>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
