"use client";
import React, { useState } from "react";
import OrderItem, {
  OrderItemProps,
} from "@/components/UI/AdminUI/Order/OrderItem";
const orderitems: OrderItemProps[] = [
  {
    id: "001",
    name: "John Doe",
    status: "pending",
    date: "2023-10-01",
    price: 150.0,
  },
  {
    id: "002",
    name: "Jane Smith",
    status: "Completed",
    date: "2023-09-15",
    price: 250.0,
  },
  {
    id: "003",
    name: "Bob Johnson",
    status: "Cancelled",
    date: "2023-08-20",
    price: 100.0,
  },
  {
    id: "004",
    name: "Alice Williams",
    status: "pending",
    date: "2023-10-05",
    price: 300.0,
  },
];

const Orders = () => {
  const [status, setStatus] = useState<
    "All" | "pending" | "Completed" | "Cancelled"
  >("All");
  return (
    <div className="mx-24 min-h-screen mb-10 p-6 rounded-2xl border border-gray-100 shadow-lg">
      <h1 className="my-4 text-3xl  text-gray-500 pl-6 font-bold mb-16">
        Order History
      </h1>
      <div className="">
        <ul>
          <li
            onClick={() => setStatus("All")}
            className={`${
              status == "All"
                ? "text-red-400 border-b-4 border-b-red-400"
                : "text-gray-200"
            } inline mx-8 text-xl py-4 hover:text-red-400 font-extrabold px-2 cursor-pointer `}
          >
            All Orders
          </li>
          <li
            onClick={() => setStatus("pending")}
            className={`${
              status == "pending"
                ? "text-red-400 border-b-4 border-b-red-400"
                : "text-gray-200"
            } inline mx-8 text-xl py-4 hover:text-red-400 font-extrabold px-2 cursor-pointer `}
          >
            Pending{" "}
          </li>
          <li
            onClick={() => setStatus("Completed")}
            className={`${
              status == "Completed"
                ? "text-red-400 border-b-4 border-b-red-400"
                : "text-gray-200"
            } inline mx-8 text-xl py-4 hover:text-red-400 font-extrabold px-2 cursor-pointer `}
          >
            Completed{" "}
          </li>
          <li
            onClick={() => setStatus("Cancelled")}
            className={`${
              status == "Cancelled"
                ? "text-red-400 border-b-4 border-b-red-400"
                : "text-gray-200"
            } inline mx-8 text-xl py-4 hover:text-red-400 font-extrabold px-2 cursor-pointer `}
          >
            Cancelled{" "}
          </li>
        </ul>
        <hr className="border-b-2 mt-12 border-b-gray-100 shadow-md" />
      </div>
      <div className="w-full my-4 px-4 text-cyan-500 font-semibold text-xl border border-amber-100 shadow-xl bg-white rounded-lg py-3 flex justify-around">
        <p className="item-center">id</p>
        <p className="item-center">Name</p>
        <p className="item-center">Status</p>
        <p className="item-center">Price</p>
        <p className="item-center">Date</p>
      </div>
      {orderitems
        .filter((item) => (status === "All" ? true : item.status === status))
        .map((order: OrderItemProps, item: number) => (
          <div key={item}>
            <OrderItem
              id={order.id}
              name={order.name}
              status={order.status}
              date={order.date}
              price={order.price}
            />
          </div>
        ))}
    </div>
  );
};

export default Orders;
