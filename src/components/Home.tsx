import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import coffeeHome from "../assets/coffee-home.svg";
import { Card } from "./Card";
import { coffees } from "../mock/data.json";

export function Home() {
  return (
    <div className="flex flex-col max-w-[72.5rem] m-auto mt-10 mb-12">
      <div className="flex">
        <div>
          <h1 className="text-4xl font-prompt font-extrabold mb-4 text-base-title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <span className="text-xl text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <div className="grid grid-cols-2 mt-16">
            <div className="flex items-center">
              <div className="rounded-full text-base-card bg-amber-dark p-2 mr-3">
                <ShoppingCart weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div className="flex items-center">
              <div className="rounded-full text-base-card bg-base-text p-2 mr-3">
                <Package weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="flex items-center mt-6">
              <div className="rounded-full text-base-card bg-amber p-2 mr-3">
                <Timer weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>

            <div className="flex items-center mt-6">
              <div className="rounded-full text-base-card bg-violet-dark p-2 mr-3">
                <Coffee weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
        <div className="ml-4 p-6">
          <img src={coffeeHome} alt="" />
        </div>
      </div>
      <div>
        <h1 className="font-extrabold font-prompt text-base-subtitle text-2xl mb-12">
          Nossos cafés
        </h1>
        <div className="grid grid-cols-4 gap-y-10 gap-x-8">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
        </div>
        
      </div>
    </div>
  );
}
