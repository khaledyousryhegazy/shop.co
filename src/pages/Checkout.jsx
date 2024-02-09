import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Swal from "sweetalert2";

export const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [total] = useOutletContext();

  useEffect(() => {
    if (cart.length <= 0) {
      navigate("/cart");
    }
  }, [cart, navigate]);

  const cardNumberRegex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvvRegex = /^\d{3}$/;
  const cardHolderRegex = /^[a-zA-Z\s]+$/;

  // Alert
  const alert = (text, icon) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: icon,
      title: text,
    });
  };

  const handlePay = () => {
    const cardNum = document.getElementById("card-number").value;
    const cardDate = document.getElementById("expiration-date").value;
    const cardCvv = document.getElementById("cvv").value;
    const cardHolder = document.getElementById("card-holder").value;

    let isValid = true;

    if (!cardNumberRegex.test(cardNum)) {
      isValid = false;
      console.log("Invalid Card Number");
    }

    if (!expirationDateRegex.test(cardDate)) {
      isValid = false;
      console.log("Invalid Expiration Date");
    }

    if (!cvvRegex.test(cardCvv)) {
      isValid = false;
      console.log("Invalid CVV");
    }

    if (!cardHolderRegex.test(cardHolder)) {
      isValid = false;
      console.log("Invalid Card Holder Name");
    }

    if (isValid) {
      alert("Checkout Successfully", "success"); //alert success

      navigate("/"); //go to home page

      localStorage.removeItem("cart"); //clear cart
      window.location.reload(); //reload window
    } else {
      alert("Inputs Is Not Valid", "error");
    }
  };

  const handleClick = () => {
    handlePay();
  };

  return (
    <div className="container">
      <div>
        <h2 className="text-lg font-medium mb-6">Payment Information</h2>
        <div>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Card Number
              </label>
              <input
                type="text"
                name="card-number"
                id="card-number"
                placeholder="0000 0000 0000 5412"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-black invalid:focus:border-red-600"
                required
                pattern={cardNumberRegex.source} // Set pattern attribute with regex
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="expiration-date"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Expiration Date
              </label>
              <input
                type="text"
                name="expiration-date"
                id="expiration-date"
                placeholder="MM / YY"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-black invalid:focus:border-red-600"
                required
                pattern={expirationDateRegex.source} // Set pattern attribute with regex
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                placeholder="000"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-black invalid:focus:border-red-600"
                required
                pattern={cvvRegex.source} // Set pattern attribute with regex
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="card-holder"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Card Holder
              </label>
              <input
                type="text"
                name="card-holder"
                id="card-holder"
                placeholder="Full Name"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-black invalid:focus:border-red-600"
                required
                pattern={cardHolderRegex.source}
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="button"
              className="w-full bg-gray-800 hover:bg-black text-white font-medium py-3 rounded-lg focus:outline-none"
              onClick={handleClick}
            >
              Pay ( {total} $ )
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
