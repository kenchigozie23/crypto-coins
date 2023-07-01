import React from "react";

import Crypto from "./Crypto";
import { useTicker } from "../utils/hooks";

export default function Ticker() {
  const cryptocurrencies = useTicker()
  console.log("CRYPTOCURRENCIES", cryptocurrencies)
  return (
    <div className="mt-5  grid grid-col-1 md:grid-col-3 gap-6">
      {cryptocurrencies?.map((crypto) => (
        <Crypto key={crypto.id} crypto={crypto}/>
      ))}
    </div>
  );
}
