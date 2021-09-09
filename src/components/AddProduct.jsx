import React from "react";
import styles from "./AddProduct.module.css";
import Button from "./Common/Button";
const AddProduct = () => {
  const onClickHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={styles.container} onClick={onClickHandler}>
      <form action="">
        <div className={styles.left}>
          <div className={styles.image}></div>
          <input type="file" id="img" name="img" accept="image/*" />
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
                <Button type="submit">Create new product</Button>
                {/* <button type="submit">Create new product</button> */}
              </td>
            </tr>
          </table>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
