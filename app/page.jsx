'use server'
import SingleCard from "@/components/SingleCard";
import { getAllProductAction } from "@/Action/productAction";

export default async function Home() {
  const allProducts = await getAllProductAction();

  return (
      <div className="min-h-screen max-w-screen-xl mx-auto p-5 bg-gradient-to-b from-[#6001f8] to-50%">
      <div className="gap-10 flex flex-wrap pl-5 pt-13">
        {allProducts.map(product => (
          <SingleCard
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            description={product.description} 
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
