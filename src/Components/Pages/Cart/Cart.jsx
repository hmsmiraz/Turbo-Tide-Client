import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import CartCard from "./CartCard";

const Cart = () => {
  const cartProducts = useLoaderData();
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const filteredCart = cartProducts.filter(
    (cartProduct) => cartProduct.email == email
  );
  console.log(filteredCart);
  return (
    <div>
      <div className="my-10">
        <h2 className="text-center text-3xl font-bold my-5 text-stone-500">
          This is Your cart products:
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2">
        {filteredCart.map((products) => (
          <CartCard
            key={products._id}
            products={products}
            cartProducts={cartProducts}
          ></CartCard>
        ))}
      </div>
    </div>
  );
};

export default Cart;
