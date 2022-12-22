const app = new Vue({
  el: "#app",
  data: {
    products: [
      {
        name: "hat",
        quantity: 3,
        stock: true,
        colors: ["brown", "yellow"],
        price: [500],
      },
      {
        name: "socks",
        quantity: 12,
        stock: true,
        colors: ["red", "green"],
        price: [100, 200],
      },
      {
        name: "shoes",
        quantity: 0,
        stock: false,
        colors: ["violet", "pink", "blue"],
        price: [1300],
      },
      {
        name: "coat",
        quantity: 3,
        stock: true,
        colors: ["black", "white"],
        price: [200, 250],
      },
      {
        name: "jean",
        quantity: 0,
        stock: false,
        colors: ["purple"],
        price: [1200],
      },
      {
        name: "cap",
        quantity: 1,
        stock: true,
        colors: ["red", "white"],
        price: [300, 450],
      },
      {
        name: "sweater",
        quantity: 6,
        stock: true,
        colors: ["pink", "white", "black"],
        price: [700],
      },
      {
        name: "tie",
        quantity: 0,
        stock: false,
        colors: ["brown"],
        price: [200],
      },
      {
        name: "sandals",
        quantity: 19,
        stock: true,
        colors: ["brown", "red"],
        price: [600, 820],
      },
    ],
    cart: [],
  },
  methods: {
    addToCart: function (product, index) {
      const { name, price } = product;
      const cartElementIndex = this.cart.findIndex(
        (cartElement) => (cartElement.name === name)
      );
      let cartProduct = {};
      console.log(cartElementIndex, name);
      if (cartElementIndex === -1) {
        cartProduct = {
          name,
          amount: 1,
          totalPrice: Number(price[0]),
        };
        this.cart.push(cartProduct);
      } else {
        const newAmount = this.cart[cartElementIndex].amount + 1;
        cartProduct = {
          ...this.cart[cartElementIndex],
          amount: newAmount,
          totalPrice: newAmount * price[0],
        };
        this.cart[cartElementIndex] = cartProduct;
      }
      
      this.products[index].quantity -= 1;
    },
  },
});
