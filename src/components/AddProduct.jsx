import React, { useContext, useState } from "react";
import styles from "./AddProduct.module.css";
import Button from "./Common/Button";
import { ProductsContext } from "./Contexts/ProductsContext";
import Product from "./Product";
const AddProduct = () => {
  let [product, setProduct] = useState({});
  const onClickHandler = (e) => {
    e.stopPropagation();
  };
  let [products, setProducts] = useContext(ProductsContext);
  const addProduct = () => {
    let newProduct = {
      ...product,
      label: document.getElementById("label").value,
      id: 15, //this should be unique for each element
      price: document.getElementById("price").value,
      info: document.getElementById("info").value,
      currency: "din",
    };
    console.log(newProduct);
    setProducts((curr) => [...curr, newProduct]);
  };
  const onChangeHandler = (event) => {
    setProduct({
      ...product,
      image: URL.createObjectURL(event.target.files[0]),
    }); // Ovo nece da se prikaze iz nekog razloga :((((
  };
  return (
    <div className={styles.container} onClick={onClickHandler}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src={product.image}></img>
        </div>
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.right}>
        <table>
          <tr>
            <td>
              <label htmlFor="label">Name</label>
            </td>
            <td>
              <input type="text" id="label" name="label"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="info">Description</label>
            </td>
            <td>
              <input type="text" id="info"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="price">Price</label>
            </td>
            <td>
              <input type="text" id="price"></input>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <Button onClick={addProduct}>Create new product</Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AddProduct;
