import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const dispatch = useDispatch();

  const addProduct = (productToAdd) => {
    const productWithVariant = {
      ...productToAdd,
      selectedVariant: selectedVariant,
      variantPrice: selectedVariant?.price || productToAdd.price
    };
    dispatch(addCart(productWithVariant));
    toast.success('Added to cart successfully! 🛒');
  };

  // Change this line to separate the conditions
  const isVariantOutOfStock = selectedVariant && selectedVariant.stock === 0;
  const isProductOutOfStock = product.stock === 0;
  const isOutOfStock = isProductOutOfStock || isVariantOutOfStock;

  const currentPrice = selectedVariant?.price || product.price;
  const originalPrice = selectedVariant?.originalPrice || product.originalPrice;
  const discount = originalPrice && currentPrice < originalPrice 
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : null;

  return (
    <div className="product-card">
      <div className="product-image-container">
        {discount && (
          <div className="discount-badge">-{discount}%</div>
        )}
        
        {isOutOfStock && (
          <div className="out-of-stock-label">
            Out of Stock
          </div>
        )}
        
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.title}
            className="product-image"
          />
        </Link>
        
        <button className="wishlist-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        </button>
      </div>

      <div className="product-content">
        {product.category && (
          <div className="product-category">{product.category}</div>
        )}

        <h3 className="product-title">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>

        {product.variants && product.variants.length > 0 && (
          <div className="product-variants">
            <select 
              value={selectedVariant?.id || ''}
              onChange={(e) => {
                const variant = product.variants.find(v => v.id === e.target.value);
                setSelectedVariant(variant);
              }}
              disabled={isProductOutOfStock} // Only disable if the entire product is out of stock
            >
              {product.variants.map((variant) => (
                <option key={variant.id} value={variant.id}>
                  {variant.name} {variant.price && `- $${variant.price}`}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="product-price">
          <span className="current-price">${currentPrice}</span>
          {originalPrice && originalPrice > currentPrice && (
            <span className="original-price">${originalPrice}</span>
          )}
        </div>

        <button 
          className={`add-to-cart-button ${isOutOfStock ? 'disabled' : ''}`}
          onClick={() => !isOutOfStock && addProduct(product)}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;