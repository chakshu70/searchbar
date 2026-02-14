import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/items/${id}`
        );
        setItem(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) return <div style={{ padding: "40px" }}>Loading...</div>;

  return (
    <div style={{ padding: "40px" }}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>
        <strong>Category:</strong> {item.category}
      </p>
    </div>
  );
};

export default ItemDetail;
