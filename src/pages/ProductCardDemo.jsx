import React from 'react';
import { Navbar, Footer } from '../components';
import ProductCard from '../components/ProductCard';

const ProductCardDemo = () => {
  const testProducts = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400&h=400&fit=crop",
      category: "Electronics",
      stock: 15,
      rating: {
        rate: 4.5,
        count: 128
      },
      variants: [
        { id: "black", name: "Black", price: 199.99, originalPrice: 249.99, stock: 10 },
        { id: "white", name: "White", price: 209.99, originalPrice: 259.99, stock: 5 },
        { id: "silver", name: "Silver", price: 219.99, originalPrice: 269.99, stock: 0 }
      ]
    },
    {
      id: 2,
      title: "Organic Cotton T-Shirt",
      description: "Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes. Perfect for everyday wear.",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=400&fit=crop",
      category: "Men's Clothing",
      stock: 25,
      rating: {
        rate: 4.2,
        count: 89
      },
      variants: [
        { id: "s-blue", name: "Small - Blue", price: 29.99, originalPrice: 39.99, stock: 8 },
        { id: "m-blue", name: "Medium - Blue", price: 29.99, originalPrice: 39.99, stock: 12 },
        { id: "l-blue", name: "Large - Blue", price: 29.99, originalPrice: 39.99, stock: 5 },
        { id: "s-white", name: "Small - White", price: 29.99, originalPrice: 39.99, stock: 6 },
        { id: "m-white", name: "Medium - White", price: 29.99, originalPrice: 39.99, stock: 10 },
        { id: "l-white", name: "Large - White", price: 29.99, originalPrice: 39.99, stock: 3 }
      ]
    },
    {
      id: 3,
      title: "Smart Fitness Watch",
      description: "Advanced fitness tracking watch with heart rate monitoring, GPS, and smartphone connectivity. Track your health goals.",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop",
      category: "Electronics",
      stock: 0, // Out of stock
      rating: {
        rate: 4.7,
        count: 203
      }
    },
    {
      id: 4,
      title: "Leather Crossbody Bag",
      description: "Elegant leather crossbody bag perfect for daily use. Spacious interior with multiple compartments for organization.",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
      category: "Accessories",
      stock: 12,
      rating: {
        rate: 4.3,
        count: 67
      },
      variants: [
        { id: "brown", name: "Brown Leather", price: 89.99, originalPrice: 129.99, stock: 7 },
        { id: "black", name: "Black Leather", price: 94.99, originalPrice: 134.99, stock: 5 },
        { id: "tan", name: "Tan Leather", price: 99.99, originalPrice: 139.99, stock: 0 }
      ]
    },
    {
      id: 5,
      title: "Wireless Charging Pad",
      description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
      category: "Electronics",
      stock: 30,
      rating: {
        rate: 4.1,
        count: 156
      }
    },
    {
      id: 6,
      title: "Artisan Coffee Beans",
      description: "Premium single-origin coffee beans roasted to perfection. Rich flavor profile with notes of chocolate and caramel.",
      price: 24.99,
      originalPrice: 34.99,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
      category: "Food & Beverage",
      stock: 18,
      rating: {
        rate: 4.8,
        count: 94
      },
      variants: [
        { id: "light", name: "Light Roast", price: 24.99, originalPrice: 34.99, stock: 8 },
        { id: "medium", name: "Medium Roast", price: 24.99, originalPrice: 34.99, stock: 10 },
        { id: "dark", name: "Dark Roast", price: 26.99, originalPrice: 36.99, stock: 0 }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-vh-100 bg-light py-4">
        <div className="container">
          {/* Products Grid */}
          <div className="mb-4">
            <div className="row">
              <div className="col-12 mb-5">
                <h2 className="display-5 text-center">Product Examples</h2>
                <hr />
              </div>
            </div>
            <div className="row g-4">
              {testProducts.map((product) => (
                <div key={product.id} className="col-12 col-md-6 col-lg-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductCardDemo;