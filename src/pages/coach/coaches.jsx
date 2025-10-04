"use client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../../components/datatable/datatable";
import { getAllCoaches } from "../../services/coachservice/coachservice";
import LayoutPage from "../../components/layout/layoutPage";

export default function Coaches() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const coaches = await getAllCoaches();
    setData(coaches);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const statuses = ["Verified", "Pending", "Unverified"];

  const handleView = (coach) => navigate(`/coaches/${coach.id}`);

  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "mobile", header: "Mobile" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "country", header: "Country" },
  ];

  return (
    <LayoutPage title="Coaches" onRefresh={fetchData}>
      <DataTable
        columns={columns}
        data={data}
        statuses={statuses}
        actions={{
          view: true,
          onView: handleView,
        }}
      />
    </LayoutPage>
  );
}
