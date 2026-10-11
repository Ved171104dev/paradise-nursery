import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/CartSlice';
import './ProductList.css';

const plantImages = {
  succulent: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80',
  aloe: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
  flower: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80',
  foliage: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80',
  herb: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
  fern: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80',
};

const products = {
  Succulents: [
    { id: 1, name: 'Jade Plant', price: 12.99, image: plantImages.succulent },
    { id: 2, name: 'Aloe Vera', price: 9.99, image: plantImages.aloe },
    { id: 3, name: 'Echeveria', price: 8.99, image: plantImages.succulent },
    { id: 4, name: 'Sedum', price: 7.99, image: plantImages.aloe },
    { id: 5, name: 'Cactus Mix', price: 10.99, image: plantImages.succulent },
    { id: 6, name: 'Haworthia', price: 11.99, image: plantImages.aloe },
  ],
  'Flowering Plants': [
    { id: 7, name: 'Orchid', price: 19.99, image: plantImages.flower },
    { id: 8, name: 'Rose', price: 15.99, image: plantImages.flower },
    { id: 9, name: 'Lavender', price: 13.99, image: plantImages.flower },
    { id: 10, name: 'Petunia', price: 12.99, image: plantImages.flower },
    { id: 11, name: 'Dahlia', price: 16.99, image: plantImages.flower },
    { id: 12, name: 'Tulip', price: 14.99, image: plantImages.flower },
  ],
  'Foliage Plants': [
    { id: 13, name: 'Monstera', price: 24.99, image: plantImages.foliage },
    { id: 14, name: 'Pothos', price: 11.99, image: plantImages.foliage },
    { id: 15, name: 'Philodendron', price: 18.99, image: plantImages.foliage },
    { id: 16, name: 'Snake Plant', price: 14.99, image: plantImages.fern },
    { id: 17, name: 'Spider Plant', price: 9.99, image: plantImages.foliage },
    { id: 18, name: 'Fern', price: 13.99, image: plantImages.fern },
  ],
  'Herb Plants': [
    { id: 19, name: 'Basil', price: 6.99, image: plantImages.herb },
    { id: 20, name: 'Rosemary', price: 7.99, image: plantImages.herb },
    { id: 21, name: 'Mint', price: 5.99, image: plantImages.herb },
    { id: 22, name: 'Thyme', price: 6.49, image: plantImages.herb },
    { id: 23, name: 'Oregano', price: 6.49, image: plantImages.herb },
    { id: 24, name: 'Cilantro', price: 5.49, image: plantImages.herb },
  ],
};

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));
  };

  const isItemAdded = (productId) =>
    cartItems.some(item => item.id === productId);

  return (
    <div className="product-list-page">
      <h1 className="page-title">Our Plants Collection</h1>
      
      {Object.entries(products).map(([category, categoryProducts]) => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="products-grid">
            {categoryProducts.map(product => (
              <div key={product.id} className="product-card">
                <img
                  className="product-image"
                  src={product.image}
                  alt={`${product.name} houseplant`}
                  loading="lazy"
                />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <button
                  className={`add-to-cart-btn ${isItemAdded(product.id) ? 'disabled' : ''}`}
                  onClick={() => handleAddToCart(product)}
                  disabled={isItemAdded(product.id)}
                >
                  {isItemAdded(product.id) ? '✓ Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
