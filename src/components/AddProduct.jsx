import React, { useContext, useState } from "react";
import styles from "./AddProduct.module.css";
import Button from "./Common/Button";
import { ProductsContext } from "./ProductsContext";
import Product from "./Product";
const AddProduct = () => {
  let [product, setProduct] = useState({});
  const onClickHandler = (e) => {
    e.stopPropagation();
  };
  let [products, setProducts] = useContext(ProductsContext);
  const addProduct = () => {
    let newProduct = (
      <Product
        label={product.label}
        image={product.image}
        id={product.id}
        price={product.price}
        info={product.info}
        clicked={false}
        currency={product.currency}
      />
    );
    setProducts((curr) => [...curr, newProduct]);
  };
  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    let obj = { img: event.target.files[0] };
    setProduct({ img: event.target.files[0] }); // Ovo nece da se prikaze iz nekog razloga :((((
    console.log(obj);
    console.log(product);
  };
  return (
    <div className={styles.container} onClick={onClickHandler}>
      <form action="">
        <div className={styles.left}>
          <div className={styles.image}>
            <img src={product.img}></img>
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
                <label for="name">Name</label>
              </td>
              <td>
                <input type="text" id="name" name="name"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label for="description">Description</label>
              </td>
              <td>
                <input type="text" id="description"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label for="price">Price</label>
              </td>
              <td>
                <input type="text" id="price"></input>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <Button onClick={addProduct}>Create new product</Button>
              </td>
            </tr>
          </table>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
