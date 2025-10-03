"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../../components/datatable/datatable";
import { getAllCoaches } from "../../services/coachservice/coachservice";
import { Button } from "../../components/ui/button";
import { ArrowUpDown } from "lucide-react";

export default function Coaches() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const coaches = await getAllCoaches();
      setData(coaches);
    };
    fetchData();
  }, []);

  const statuses = ["Verified", "Pending", "Unverified"];

  const handleView = (coach) => navigate(`/coaches/${coach.id}`);
  const handleEdit = (coach) => navigate(`/coaches/edit/${coach.id}`);
  const handleDelete = (coach) => {
    setData((prev) => prev.filter((c) => c.id !== coach.id));
  };

  const columns = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NAME
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    { accessorKey: "mobile", header: "MOBILE" },
    { accessorKey: "email", header: "E-MAIL" },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          STATUS
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      filterFn: (row, columnId, filterValue) => {
        if (!filterValue || filterValue.length === 0) return true;
        return filterValue.includes(row.getValue(columnId));
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          DATE (DD-MM-YYYY)
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),

      // Filtering: compare only date part (YYYY-MM-DD)
      filterFn: (row, columnId, filterValue) => {
        if (!filterValue) return true;

        const rowValue = row.getValue(columnId); // ISO string from DB
        if (!rowValue) return false;

        const rowDate = new Date(rowValue);
        if (isNaN(rowDate)) return false;

        const localRowDate = rowDate.toLocaleDateString("en-CA"); // yyyy-mm-dd

        return localRowDate === filterValue;
      },

      // Display: show nice readable format
      cell: ({ getValue }) => {
        if (!getValue()) return "-";
        const localDate = new Date(getValue());
        return localDate.toLocaleDateString("en-GB");
      },

      // Sorting: compare actual timestamps
      sortingFn: (a, b) => {
        const aValue = new Date(a.getValue("createdAt"));
        const bValue = new Date(b.getValue("createdAt"));

        if (isNaN(aValue)) return 1;
        if (isNaN(bValue)) return -1;

        return aValue.getTime() - bValue.getTime();
      },
    },
    {
      accessorKey: "country",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          COUNTRY
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      filterFn: (row, columnId, filterValue) => {
        if (!filterValue || filterValue.length === 0) return true;
        return filterValue.includes(row.getValue(columnId));
      },
    },
  ];

  return (
    <div className="min-h-screen bg-blue-100 py-8 px-4 sm:px-6 lg:px-8 rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center bg-white shadow-lg rounded-lg py-4 px-8">
        COACHES
      </h1>

      <DataTable
        columns={columns} // ✅ columns defined in this file
        data={data}
        statuses={statuses}
        actions={{
          view: true,
          edit: false,
          delete: false,
          onView: handleView,
          onEdit: handleEdit,
          onDelete: handleDelete,
        }}
      />
    </div>
  );
}
