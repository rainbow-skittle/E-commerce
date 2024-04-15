import React from "react";
export default function Buy() {
  return (
    <div class="delivery">
      <form>
        <h1>Complete Your Order</h1>
        <input type="text" placeholder="Enter Mobile" />
        <input type="text" placeholder="Enter Pincode" />
        <label>Choose Mode of Payment</label>
        <span>
          <input type="radio" /> Online Payment
        </span>
        <span>
          <input type="radio" />
          Cash On Delivery
        </span>

        <label>Enter Address for Delivery</label>
        <textarea></textarea>
        <button>Confirm Delivery</button>
      </form>
    </div>
  );
}
