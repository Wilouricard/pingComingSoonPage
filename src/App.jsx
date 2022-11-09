import React from "react";

function App() {
  const errorMsg = document.querySelector("#error-msg");

  function handleChange() {
    errorMsg.classList.remove("hidden");
  }

  return (
    <main className=" bg-gray-50">
      <div className="flex justify-center flex-col items-center">
        <img src="\images\logo.svg" alt="" className=" pt-20 pb-10 w-16" />
        <h1 className=" text-2xl text-gray-500 pb-5">
          We are launching <span className="font-bold text-black">soon!</span>
        </h1>
        <p className="text-xs pb-8">Subscribe and get notified</p>
      </div>
      <form className="flex flex-col px-14 gap-3 md:flex-row md:justify-center  md:px-0">
        <div className="md:flex md:flex-col text-center">
          <input
            type="email"
            placeholder="Your email address..."
            className="border border-blue-200 rounded-full py-3 pl-8 text-sm placeholder:text-blue-200 md:max-h-12 md:w-[300px] w-full"
            required
          />
          <i
            className="text-red-600 text-xs text-center -translate-y-1 hidden md:-translate-y-0"
            id="error-msg"
          >
            Please provide a valid email adress
          </i>
        </div>
        <button
          className="bg-blue-700 py-3 rounded-full text-sm text-white font-semibold mb-12 hover:opacity-90 active:opacity-80 shadow-xl md:w-[150px]"
          id="sumbit"
          onClick={handleChange}
        >
          Notify Me
        </button>
      </form>
      <img
        src="\images\illustration-dashboard.png"
        alt="app preview"
        className="px-8 pb-40 md:w-1/2 md:block md:ml-auto md:mr-auto md:pb-10"
      />
      <div className="flex justify-center items-center gap-6">
        <button>
          <img
            src="\images\facebook-f.svg"
            alt="facebook icon"
            className="w-3"
          />
        </button>
        <button>
          <img src="\images\twitter.svg" alt="twitter icon" className="w-5" />
        </button>
        <button>
          <img
            src="\images\instagram.svg"
            alt="instagram icon"
            className="w-5"
          />
        </button>
      </div>
      <p className="text-center pt-5 text-slate-500 text-xs">
        &copy; Copyright Ping. All rights reserved.
      </p>
      <p className="text-center pb-5 text-slate-500 text-xs">
        Coded By Nam Tang alias Wilouricard qui ne bois pas de Ricard
      </p>
    </main>
  );
}

export default App;
