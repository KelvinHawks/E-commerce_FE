import React from "react";
import { useCart } from "react-use-cart";
function CartItem() {
  const {
    items,
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <div className="item_container">
      {isEmpty && (
        <div>
          <h3>Your Cart Is Empty</h3>
        </div>
      )}
      <div className="total_cart-items">
        <h5>Total Items: {totalItems} </h5>
        <h5>Total Unique Items {totalUniqueItems}</h5>
      </div>
      {items.map((item) => {
        return (
          <div>
            <div className="item_header">
              <h3>
                <b>{item.name}</b>
              </h3>
            </div>

            <div className="item__container-content" id="item-image">
              <div className="content_div">
                <img
                  src={item.image}
                  alt="item"
                  className="img-fluid"
                  width="800px"
                />
              </div>
              <div className="item_description">
                <h4>
                  <b>{item.description}</b>
                </h4>
                <p>{item.small}</p>
                <h5>
                  <b>Price</b>
                </h5>
                <p>
                  <b>{`ksh ${item.price}`}</b>
                </p>
                <h5>
                  <b>Features</b>
                </h5>
                <p>Get at the best price</p>
                <div>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <div className="remove-btn">
                  <button onClick={() => removeItem(item.id)}>
                    Remove Item
                  </button>
                </div>
                <button>
                  <b>Checkout</b>
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="cart_totals">
        <div>
          <h2>Total Price: {`$ ${cartTotal}`}</h2>
        </div>

        <div className="clear_btn">
          {totalItems !== 0 && (
            <button onClick={() => emptyCart()}>Clear Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
