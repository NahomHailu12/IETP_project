"use client";
import ManageAdmin from "@/components/UI/AdminUI/ManageAdmin/ManageAdmin";
import Orders from "@/components/UI/AdminUI/Order/order";
import Sidebar from "@/components/UI/AdminUI/sidebar";
import React from "react";

const AdminPage = () => {
  const [item, setItem] = React.useState<number>(1);
  return (
    <div className="p-0 w-full bg-white flex flex-col gap-6 min-h-screen font-serif">
      <Sidebar item={item} setItem={setItem} />
      <div className="p-12 mb-12"></div>
      {item == 1 && <ManageAdmin />}
      {item == 2 && <Orders />}
    </div>
  );
};

export default AdminPage;
