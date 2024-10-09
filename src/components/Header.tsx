import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logoCoffee from "../../public/logo-coffee-delivery.svg";

export function Header() {
  return (
    <div className="flex justify-between items-center m-auto p-6 max-w-[72.5rem]">
      <img src={logoCoffee} alt="" />
      <div className="flex">
        <div className="bg-violet-light text-violet-dark flex justify-center items-center p-2 rounded-md text-sm font-roboto">
          <MapPin weight="fill" size={20} />
          <span className="ml-1">Barbacena, MG</span>
        </div>
        <div className="bg-amber-light text-amber-dark flex rounded-md p-2 ml-2">
          <ShoppingCart weight="fill" size={20} />
        </div>
      </div>
    </div>
  );
}
