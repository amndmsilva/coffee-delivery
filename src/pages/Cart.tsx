import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "@phosphor-icons/react";
import { Radio } from "../components/Radio";
import { useForm } from "react-hook-form";

import expresso from "../../public/images/coffees/expresso.png";

export function Cart() {
  const { watch } = useForm();

  const selectedPaymentMethod = watch("paymentMethod");
  return (
    <div className="flex max-w-[72.5rem] m-auto mt-10 mb-12">
      {/* Form */}
      <div className=" w-[40rem] mr-6 ml-6">
        <h1 className="font-prompt font-bold mb-4 text-base-subtitle">
          Complete seu pedido
        </h1>
        <div className="bg-base-card p-10 rounded-md">
          <div className="flex">
            <MapPinLine color="#d97706" size={22} />
            <div className="ml-4">
              <span className="text-base-subtitle">Endereço de Entrega</span>
              <p className="text-sm mb-5">
                Informe o endereço onde deseja receber seu pedido
              </p>
              <form action="">
                <div className="grid grid-cols-3 gap-4">
                  <input
                    placeholder="CEP"
                    className="col-span-3 bg-base-input h-10 rounded-md border-2 border-base-button text-xs p-3"
                  />
                  <input
                    placeholder="Rua"
                    className="col-span-3 col-start-1 bg-base-input h-10 rounded-md border-2 border-base-button text-xs p-3"
                  />
                  <input
                    placeholder="Número"
                    className="... bg-base-input h-10 rounded-md border-2 border-base-button text-xs p-3"
                  />
                  <input
                    placeholder="Complemento (Opcional)"
                    className="col-span-2 bg-base-input h-10 rounded-md border-2 border-base-button text-xs p-3"
                  />
                  <input
                    placeholder="Bairro"
                    className="... bg-base-input h-10 rounded-md border-2 border-base-button text-xs p-3"
                  />
                  <input
                    placeholder="Cidade"
                    className="... bg-base-input h-10 rounded-md border-2 border-base-button text-xs p-3"
                  />
                  <input
                    placeholder="UP"
                    className="... bg-base-input h-10 rounded-md border-2 border-base-button text-xs p-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-base-card p-10 rounded-md mt-5">
          <div className="flex flex-col">
            <div className="flex">
              <CurrencyDollarSimple color="#7c3aed" size={22} />
              <div className="ml-4">
                <span className="text-base-subtitle">Pagamento</span>
                <p className="text-sm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div className="flex">
              <Radio
                isSelected={selectedPaymentMethod === "credit"}
                // {...register('paymentMethod')}
                value="credit"
              >
                <CreditCard size={16} color="#a78bfa" weight="bold" />
                <span>Cartão de crédito</span>
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === "debit"}
                // {...register('paymentMethod')}
                value="debit"
              >
                <Bank size={16} color="#a78bfa" weight="bold" />
                <span>Cartão de débito</span>
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === "cash"}
                // {...register('paymentMethod')}
                value="cash"
              >
                <Money size={16} color="#a78bfa" weight="bold" />
                <span>Dinheiro</span>
              </Radio>
            </div>
          </div>
        </div>
      </div>

      {/* Detalhes do pedido */}
      <div className="w-[28rem]">
        <h1 className="font-prompt font-bold mb-4 text-base-subtitle">
          Cafés selecionados
        </h1>
        <div className="bg-base-card p-10 rounded-tr-3xl rounded-bl-3xl">
          <div className="flex justify-between mb-6">
            <div>
              <img src={expresso} alt="" className="w-14 h-14" />
            </div>
            <div className="flex ml-4">
              <div className="flex flex-col">
                <span className="text-base-subtitle font-bold">
                  Expresso Tradicional
                </span>
                <div className="flex mt-2">
                  <div className="bg-base-button flex items-center p-1 rounded-lg">
                    <button className="text-violet-dark mr-1">
                      <Minus />
                    </button>
                    <span className="">1</span>
                    <button className="ml-1 text-violet-dark rounded-lg">
                      <Plus />
                    </button>
                  </div>
                  <button className="flex items-center bg-base-button p-2 text-xs uppercase ml-3 rounded-lg">
                    <Trash color="#a78bfa" size={16} className="mr-2" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div>
              <span className="font-bold">R$ 9.90</span>
            </div>
          </div>
          <div className="bg-base-button h-[0.031rem] mt-6"></div>
          <div className="mt-6">
            <div className="flex justify-between">
              <span className="text-sm">Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div className="flex justify-between mt-3">
              <span className="text-sm">Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="text-xl font-bold flex justify-between mt-3">
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </div>
          <button className="w-full mt-8 bg-amber-dark uppercase font-bold text-background text-sm p-3 rounded-md duration-200 transition-all hover:bg-amber-medio">
            Confirmar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
