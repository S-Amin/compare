import React, { useEffect, useState } from "react";
import axios from "config/axios.config";
import Table, { Tbody, Thead } from "components/Table";
import Image from "components/_Base/Image";
import _ from "lodash";
import sass from "./compare.module.scss";

const Compare = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [hiddenColumns, setHiddenColumns] = useState<boolean[]>([]);
  const NOT_COMPARABLE = [
    "salePrice",
    "manufacturerName",
    "grossPrice",
    "BUP_UOM",
    "BUP_Value",
    "uom",
    "productImage",
    "BUP_Conversion",
    "minQuantity",
    "manufacturerImage",
    "name",
    "sku",
    "badges",
    "listPrice",
    "channel",
    "display",
    "atp",
  ];

  const removeProduct = (index: number) => {
    const p = [...products];
    p.splice(index, 1);
    setProducts(p);
  };

  const productVisibility = (index: number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const h = [...hiddenColumns];
    h[index] = !e.target.checked;
    setHiddenColumns(h);
  };

  const fetch = () => {
    axios
      .get("/eriks/products/all")
      .then((res) => {
        if (res.data.products.length < 1) return;
        setProducts(res.data.products);
        setHiddenColumns(new Array(res.data.products.length + 1));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetch();
  }, []);

  // remove unwanted key in product object
  const data = products.map((product) => _.omit(product, NOT_COMPARABLE));

  return (
    <Table className={sass.table} hiddenColumns={hiddenColumns}>
      {/* table header */}
      <Thead className={sass.tableHeaderCell}>
        <div>
          <form className={sass.form}>
            <h3>Selected Items</h3>
            {products.map((product, i) => (
              <div key={product?.sku}>
                <input
                  type="checkbox"
                  id={"p" + i}
                  checked={!hiddenColumns[i + 1]}
                  onChange={productVisibility(i + 1)}
                />
                <label htmlFor={"p" + i}>{product.name}</label>
              </div>
            ))}
          </form>
        </div>
        {/* header for each item */}
        {products.map((product, i) => (
          <div key={product.sku}>
            <button className="link remove" onClick={() => removeProduct(i)}>
              <img width={20} src="/rmv.svg" alt="remove" />
            </button>
            <Image
              className={sass.primaryImg}
              src={product.productImage}
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <strong className={sass.price}>{product.salePrice}</strong>
            <p className={sass.subPrice}>per stuck / excl. btw</p>
            <hr />
            {!product.badges
              ? ""
              : (product.badges as string)
                  .split("|")
                  .map((b, i) => <Image key={i} src={b} alt="" width="20" />)}
          </div>
        ))}
      </Thead>
      {/* table body */}
      <Tbody data={data}></Tbody>
    </Table>
  );
};

export default Compare;
