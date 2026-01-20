"use client";
import React, { useEffect, useState } from "react";
import OrderItem, {
  OrderItemProps,
} from "@/components/UI/AdminUI/Order/OrderItem";
import { OrderMaxAggregateOutputType } from "@/prisma/generated/prisma/models";


const Orders = () => {
  const [status, setStatus] = useState<
    "All" | "pending" | "Completed" | "Cancelled"
  >("All");
  const [items, setItems] = useState<OrderItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/Order");

        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setItems(
          data.map((item: OrderMaxAggregateOutputType) => ({
            id: item.id?.substring(0, 8),
            name: item.name,
            status: item.status,
            date: item.date?.toString()?.substring(0, 11) || "",
            price: item.price,
          }))
        );
      } catch (error) {
          setError(error instanceof Error ? error.message : "An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  // 3. Conditional Rendering
  if (isLoading)
    return <div className="p-10 text-center">Loading products...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
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
      {items
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
