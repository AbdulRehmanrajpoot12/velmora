import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar, { SidebarItem } from "./Sidebar";
import { FaReceipt, FaRegUserCircle } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { BsBoxes } from "react-icons/bs";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={<TbLayoutDashboardFilled size={20} />}
          text="Dashboard"
          path="/admin"
        />
        <SidebarItem
          icon={<FaRegUserCircle size={20} />}
          text="Users"
          path="/admin/users"
        />
        <SidebarItem
          icon={<GoPackage size={20} />}
          text="Products"
          path="/admin/products"
        />
        <SidebarItem
          icon={<BsBoxes size={20} />}
          text="Inventory"
          path="/admin/inventory"
        />
        <SidebarItem
          icon={<FaReceipt size={20} />}
          text="Orders"
          path="/admin/orders"
        />
      </Sidebar>
      <div className="flex-1">{<Outlet />}</div>
    </div>
  );
};

export default Admin;
