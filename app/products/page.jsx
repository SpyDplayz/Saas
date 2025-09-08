"use client";

import React, { useState } from "react";
import { tractorData } from "../../data/tractorData";

const Products = () => {
  
  const [category, setCategory] = useState("less_than_30_hp");

  // Access Gujarat tractors data
  const tractors = tractorData[0].sonalika_tractors_gujarat[category];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold flex items-center justify-center">Our Tractors</h1>

      {/* Dropdown for selecting category */}
      <select
        className="border p-2 mt-4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="less_than_30_hp">Less than 30 HP</option>
        <option value="30_to_45_hp">30 to 45 HP</option>
        <option value="above_45_hp">Above 45 HP</option>
      </select>

      {/* Tractor list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {tractors.map((tractor, index) => (
          <div key={index} className="border rounded p-4 shadow">
            <h2 className="text-xl font-semibold">{tractor.model}</h2>
            <p>{tractor.horsepower}</p>
            <p>Price: ₹{tractor.price_inr.toLocaleString()}</p>
            <p>Engine: {tractor.engine.type}</p>
            <p>Lifting Capacity: {tractor.hydraulics.lifting_capacity}</p>
            <ul className="mt-2">
              {tractor.features.map((f, i) => (
                <li key={i} className="text-sm">✅ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
