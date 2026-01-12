'use client'
import React, { useEffect, useState } from "react";
import EmployeeCard, { Empolyee } from "./employeeCard";
import { UserMaxAggregateOutputType } from "@/prisma/generated/prisma/internal/prismaNamespaceBrowser";

const ManageAdmin = () => {
  const [items, setItems] = useState<Empolyee[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          setIsLoading(true);
          const res = await fetch("/api/User");
  
          if (!res.ok) throw new Error("Failed to fetch products");
  
          const data = await res.json();
          setItems(
            data.map((item: UserMaxAggregateOutputType) => ({
              username: item.username || "N/A",
              email: item.email || "N/A",
              phone: item.phone || "N/A",
              role: item.role as "client" | "admin" | "super-admin" || "client",
              dateJoined: item.datejoined?.toString().substring(0, 10) || "N/A",
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
    <div className="p-6 rounded-2xl border border-gray-100 bg-white">
      <h1 className="my-4 text-3xl  text-gray-500 pl-6 font-bold mb-16"></h1>
      <hr className="border-b-2 mt-12 border-b-gray-100 shadow-md" />
      <div className="grid grid-cols-3">
        {items
          .filter((user) => user.role !== "client")
          .map((user: Empolyee, index: number) => (
            <EmployeeCard key={index} {...user} />
          ))}
      </div>
    </div>
  );
};

export default ManageAdmin;
