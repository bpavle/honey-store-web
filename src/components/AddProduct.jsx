import React, { useContext, useState } from "react";
import styles from "./AddProduct.module.css";
import Button from "./Common/Button";
import { ProductsContext } from "./Contexts/ProductsContext";
import Product from "./Product";
import { useTranslation } from "react-i18next";
const AddProduct = () => {
  const { t, i18n } = useTranslation();
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
          <img className={styles.image} src={product.image}></img>
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
          <tbody>
            <tr>
              <td>
                <label htmlFor="label">{t("Name")}</label>
              </td>
              <td>
                <input type="text" id="label" name="label"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="info">{t("Description")}</label>
              </td>
              <td>
                <input type="text" id="info"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="price">{t("Price")}</label>
              </td>
              <td>
                <input type="text" id="price"></input>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <Button onClick={addProduct}>{t("Create new product")}</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddProduct;
