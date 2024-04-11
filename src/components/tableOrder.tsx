import React from "react";

const TableOrder = ({number}:{number: number}) => {
  return (
    <article className="border-gray-700 bg-gray-800 rounded-xl border p-4">
      <div className="flex items-center gap-4">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="size-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-gray-800 text-lg font-medium">Table 20</h3>

          <div className="flow-root">
            <ul className="-m-1 flex flex-wrap">
              <li className="p-1 leading-none">
                <a href="#" className="text-gray-300 text-xs font-medium">
                  {" "}
                  +91 1234567890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {Array.from({ length: number }).map((_, index) => (
          <li>
            <a
              href="#"
              className="border-gray-700 block h-full rounded-lg border p-4 hover:border-pink-600"
            >
              <strong className="text-gray-800 font-medium">Order {index +1}</strong>
              <p className="text-gray-300 mt-1 text-xs font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                consequuntur deleniti, unde ab ut in!
              </p>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default TableOrder;
