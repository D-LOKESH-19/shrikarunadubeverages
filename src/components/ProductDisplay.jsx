import React, { useState } from 'react';
import productData from '../data/ourBrands/productData.js';
const ProductDisplay = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('all');

  // Product data with new categories
  const products = productData;

  // Filter products - FIXED: Proper case matching
  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => 
        product.category.toLowerCase().replace(/['\s]/g, '') === 
        activeFilter.toLowerCase().replace(/['\s]/g, '')
      );

  // Get display text based on active filter
  const getFilterDisplayText = () => {
    switch(activeFilter) {
      case 'all': return 'Our Products';
      case "80sGoliSoda": return "80's Goli Soda";
      case 'ThirstyTime': return 'Thirsty Time';
      default: return 'products';
    }
  };

  // Count products by category - FIXED: Using normalized values
  // const goliSodaCount = products.filter(p => 
  //   p.category.toLowerCase().replace(/['\s]/g, '') === "80sgolisoda"
  // ).length;
  
  // const thirstyTimeCount = products.filter(p => 
  //   p.category.toLowerCase().replace(/['\s]/g, '') === "thirstytime"
  // ).length;

  return (
    <div data-aos="fade-up" data-aos-delay='300' data-aos-easing="ease-out-cubic" className="min-h-screen bg-yellow-100 p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Drinks Catalog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse our collection of refreshing drinks. Filter by brand to find what you need.
        </p>
      </div>

      {/* Filter Buttons with counts */}
      <div data-aos='fade-up'  className="flex flex-wrap justify-center gap-4 mb-10">
        <button
        data-aos='fade-up' data-aos-delay='100'
          onClick={() => setActiveFilter('all')}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-300
            transform hover:scale-105 active:scale-95 flex items-center gap-2
            ${activeFilter === 'all' 
              ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-300 ring-offset-2' 
              : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:bg-gray-50'
            }
          `}
        >
          <span>Our Products</span>
          {/* <span className={`text-xs px-2 py-1 rounded ${
            activeFilter === 'all' 
              ? 'bg-white/20 text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}>
            {products.length}
          </span> */}
        </button>
        
        <button
        data-aos='fade-up' data-aos-delay='200'
          onClick={() => setActiveFilter("80sGoliSoda")}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-300
            transform hover:scale-105 active:scale-95 flex items-center gap-2
            ${activeFilter === "80sGoliSoda"
              ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-300 ring-offset-2' 
              : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:bg-gray-50'
            }
          `}
        >
          <span>80's Goli Soda</span>
          {/* <span className={`text-xs px-2 py-1 rounded ${
            activeFilter === "80sGoliSoda"
              ? 'bg-white/20 text-white' 
              : 'bg-blue-100 text-blue-700'
          }`}>
            {goliSodaCount}
          </span> */}
        </button>
        
        <button
        data-aos='fade-up' data-aos-delay='300'
          onClick={() => setActiveFilter('ThirstyTime')}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-300
            transform hover:scale-105 active:scale-95 flex items-center gap-2
            ${activeFilter === 'ThirstyTime' 
              ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-300 ring-offset-2' 
              : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:bg-gray-50'
            }
          `}
        >
          <span>Thirsty Time</span>
          {/* <span className={`text-xs px-2 py-1 rounded ${
            activeFilter === 'ThirstyTime' 
              ? 'bg-white/20 text-white' 
              : 'bg-green-100 text-green-700'
          }`}>
            {thirstyTimeCount}
          </span> */}
        </button>
      </div>

      {/* Results Count */}
      <div data-aos='fade-up' data-aos-delay='400' className="text-center mb-8">
        <div className="inline-block bg-white px-5 py-3 rounded-full shadow-sm">
          <p className="text-gray-700 font-medium">
            <span className="font-bold text-blue-600">
              {getFilterDisplayText()}
            </span>
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <div  
          data-aos='fade-up' data-aos-delay={product.id*100/3}
            key={`${product.uniqueId}-${product.id}`} 
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl 
              transition-all duration-500 hover:-translate-y-2 border border-gray-100"
          >
            {/* Product Image Container */}
            <div className="relative lg:h-86  overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 
                  group-hover:scale-110"
              />
              {/* Category Badge on Image */}
              <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold 
                ${product.category === "80's Goli Soda" 
                  ? 'bg-blue-600/90 text-white' 
                  : 'bg-green-600/90 text-white'
                }`}
              >
                {product.category}
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
            </div>
            
            {/* Product Info */}
            <div data-aos='fade-up'  className="p-5">
              <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-blue-700 
                transition-colors duration-300">
                {product.name}
              </h3>
              
              
            </div>
          </div>
        ))}
      </div>

      {/* No Products Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16 max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-br from-gray-200 to-gray-300 
            flex items-center justify-center">
            <span className="text-3xl">🥤</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Products Found</h3>
          <p className="text-gray-500 mb-6">Try selecting a different category.</p>
          <button
            onClick={() => setActiveFilter('all')}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
              transition-colors duration-300"
          >
            Show All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;