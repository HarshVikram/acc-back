import React from "react";

const ShowImage = ({ item, url }) => (
    <div className="product-img">
        <img
            src={`http://localhost:8000/${url}/photo/${item._id}`}
            alt={item.name}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
    </div>
);

export default ShowImage;