import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./store/slice/cart-slice";
import { useEffect } from "react";
import Modal from "./components/Modal";
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  // useEffect(() => {
  //   dispatch(getCartItems("random"));
  // }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;