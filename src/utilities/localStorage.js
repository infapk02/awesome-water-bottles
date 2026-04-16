const getBottlesDataFromLS = () => {
  const getBottleData = localStorage.getItem("cart");
  if (getBottleData) {
    const bottleData = JSON.parse(getBottleData);
    return bottleData;
  }
  return [];
};

const addBottleDataToLs = (id) => {
  const savedData = getBottlesDataFromLS();
  savedData.push(id);

  const stringifiedData = JSON.stringify(savedData);
  localStorage.setItem("cart", stringifiedData);
};

const removeFromLs = (id) => {
  const cartData = getBottlesDataFromLS();
  const remainingCart = cartData.filter((item) => item !== id);
  localStorage.setItem("cart", JSON.stringify(remainingCart));
  console.log(remainingCart);
};

export { addBottleDataToLs, getBottlesDataFromLS, removeFromLs };
