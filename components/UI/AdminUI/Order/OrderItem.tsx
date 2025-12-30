import { AlarmClock } from "lucide-react";
import React from "react";
export interface OrderItemProps {
  id: string;
  name: string;
  status: "pending" | "Completed" | "Cancelled";
  date: string;
  price: number;
}

const statusColor: Record<"pending" | "Completed" | "Cancelled", string> = {
  pending: "text-red-300",
  Completed: "text-green-400",
  Cancelled: "text-gray-400",
} as const;

const OrderItem: React.FC<OrderItemProps> = ({
  id,
  name,
  status,
  date,
  price,
}) => {
  return (
    <div className="px-3 w-full my-4 py-10 text-gray-500 font-serif bg-white  font-semibold text-lg border border-amber-100 shadow-sm rounded-lg flex justify-around">
      <p className="text-center">#{id}</p>
      <p className="text-center">{name}</p>
      <p className={`${statusColor[status]}`}>{status}</p>
      <p className="text-center">
        <AlarmClock className="inline mb-1 mr-2" size={16} />
        {date}
      </p>
      <p className="text-center">${price}</p>
    </div>
  );
};

export default OrderItem;
