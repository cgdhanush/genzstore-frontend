import "./ProductCard.css"

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} className="product-img" />
      
      <div className="product-content">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">₹{product.price}</p>
        <button className="product-btn">Add to Cart</button>
      </div>
    </div>
  );
}
export default ProductCard;