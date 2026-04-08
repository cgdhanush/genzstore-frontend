import ProductCard from "../components/ProductCard";
import Image from "../assets/shoping.jpg";

const products = [
  {
    id: 1,
    name: "Oversized Hoodie",
    price: 1499,
    image: Image,
  },
  {
    id: 2,
    name: "Sneakers",
    price: 2999,
    image: Image,
  },
  {
    id: 3,
    name: "Cap",
    price: 499,
    image: Image,
  },
  {
    id: 4,
    name: "Cap",
    price: 499,
    image: Image,
  },
  {
    id: 1,
    name: "Oversized Hoodie",
    price: 1499,
    image: Image,
  },
  {
    id: 2,
    name: "Sneakers",
    price: 2999,
    image: Image,
  },
  {
    id: 3,
    name: "Cap",
    price: 499,
    image: Image,
  },
  {
    id: 4,
    name: "Cap",
    price: 499,
    image: Image,
  },
];

function Products() {
  return (
    <div className="px-8 py-10 bg-gray-50">
      <div className="grid gap-6 mt-12 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
