import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

type CardProps = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export function Card({ coffee }: CardProps) {
  return (
    <div className="bg-base-card w-[16rem] flex flex-col justify-center items-center rounded-tl-sm rounded-br-sm rounded-tr-3xl rounded-bl-3xl">
      <div className="-m-5">
      <img src={coffee.image} alt="" />
      </div>
      <div className="  flex uppercase mt-8 text-xs font-bold gap-1 self-center">
        {coffee.tags.map((tag) => (
          <span className="p-2 bg-amber-light text-amber-dark rounded-md" key={tag}>{tag}</span>
        ))}
      </div>
      <h2 className="text-xl text-base-subtitle font-prompt font-bold mt-4">
        {coffee.title}
      </h2>
      <span className="text-base-label text-sm text-center p-3">  
        {coffee.description}
      </span>
      <div className="flex mt-5 mb-4">
        <div>
          <span className="text-sm">R$</span>
          <span className="ml-1 font-prompt text-2xl font-extrabold ">
            {coffee.price}
          </span>
        </div>
        <div className="bg-base-button flex items-center p-1 ml-5">
          <button className="text-violet-dark mr-1">
            <Minus />
          </button>
          <span className="">1</span>
          <button className="ml-1 text-violet-dark rounded-lg">
            <Plus />
          </button>
        </div>
        <div className="bg-violet-dark text-base-input p-2 rounded-lg ml-2">
          <ShoppingCart weight="fill" size={20} />
        </div>
      </div>
    </div>
  );
}
