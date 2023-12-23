import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PaginationBtns from "../../components/PaginationBtns/PaginationBtns";
import Product from "../../components/Product/Product";

export default function Products() {
  const data = useLoaderData().products;
  const [index, setIndex] = useState(0);
  const [showItem, setShowItem] = useState([]);
  const [pages, setPages] = useState(0);
  const [activePage, setActivePage] = useState(0);

  const productPerPage = 10;

  useEffect(() => {
    setPages(
      Array.from(
        { length: Math.ceil(data.length / productPerPage) },
        (_, i) => i + 1
      )
    );
  }, [data]);

  useEffect(() => {
    setShowItem(data.slice(index, index + productPerPage));
  }, [data, index]);

  return (
    <div>
      <div className="paginationBtns">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          {pages.length > 0 &&
            pages.map((_, i) => (
              <PaginationBtns
                key={i}
                index={i * productPerPage}
                page={i}
                setIndex={setIndex}
                active={{ activePage, setActivePage }}
              />
            ))}
        </div>
      </div>
      <div className="products">
        {showItem.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="paginationBtns">
        <div style={{ display: "flex", justifyContent: "center" }}>
          {pages.length > 0 &&
            pages.map((_, i) => (
              <PaginationBtns
                key={i}
                index={i * productPerPage}
                page={i}
                setIndex={setIndex}
                active={{ activePage, setActivePage }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
