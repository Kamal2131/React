import { useState } from "react";
import kidsJumper from "../assets/kids-jumper.ff28ead2.jpg";

function Card({ username }) {
  const [size, setSize] = useState("m");

  return (
    <div className="flex font-sans bg-amber-100 p-6 rounded-lg">
      <div className="flex-none w-56 relative">
        <img
          src={kidsJumper}
          alt="Kids Jumpsuit"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto font-medium text-slate-900 text-xl">
            Kids Jumpsuit {username}
          </h1>
          <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
            $39.00
          </div>
          <div className="text-sm font-medium text-slate-400">In stock</div>
        </div>

        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <div className="space-x-2 flex text-sm font-bold">
            {["xs", "s", "m", "l", "xl"].map((s) => (
              <label key={s}>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value={s}
                  checked={size === s}
                  onChange={() => setSize(s)}
                />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white uppercase">
                  {s}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="flex space-x-4 mb-5 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <button
              className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-blue-100"
              type="submit"
            >
              Buy now
            </button>
            <button
              className="h-10 px-6 font-semibold rounded-full border border-amber-800 text-slate-50"
              type="button"
            >
              Add to bag
            </button>
          </div>
          <button
            className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50"
            type="button"
            aria-label="Like"
          >
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>

        <p className="text-sm text-slate-500">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
}

export default Card;
