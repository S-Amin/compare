import React, { useEffect, useState } from "react";
import axios from "../../config/axios.config";
import Table, { Thead } from "../../components/Table";
import Image from "../../components/_Base/Image";
import _ from "lodash";

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

  const productVisibility = (index: number) => (e: React.MouseEvent) => {
    const h = [...hiddenColumns];
    h[index] = !(e.target as HTMLInputElement).checked;
    setHiddenColumns(h);
  };

  const fetch = () => {
    axios.get("/eriks/products/all").then((res) => {
      if (res.data.products.length < 1) return;
      setProducts(res.data.products);
      setHiddenColumns(new Array(res.data.products.length + 1));
    });
  };
  useEffect(() => {
    fetch();
  }, []);

  const head = (
    <Thead>
      <div>
        <form>
          <p>Selected Items</p>
          {products.map((product, i) => (
            <div key={product.sku}>
              <input
                type="checkbox"
                id={"p" + i}
                checked={!hiddenColumns[i + 1]}
                onClick={productVisibility(i + 1)}
              />
              <label htmlFor={"p" + i}>{product.name}</label>
            </div>
          ))}
        </form>
      </div>
      {products.map((product, i) => (
        <div key={product.sku}>
          <button onClick={() => removeProduct(i)}>remove</button>
          <Image src={product.productImage} alt={product.name} />
          <h2>{product.name}</h2>
          <strong>{product.salePrice}</strong>
          <p>per stuck / excl. btw</p>
          <hr />
          {(product.badges as string).split("|").map((b, i) => (
            <Image key={i} src={b} alt="" width="20" />
          ))}
        </div>
      ))}
    </Thead>
  );

  // remove unwanted key in product object
  const data = products.map((product) => _.omit(product, NOT_COMPARABLE));

  return <Table header={head} data={data} hiddenColumns={hiddenColumns} />;
};

export default Compare;
