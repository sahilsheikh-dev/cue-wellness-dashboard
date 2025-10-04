"use client";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "../../components/ui/alert-dialog";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { DummyData } from "../../assets/data/dummydata";

export default function EditCoach() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the coach by id
  const coach = DummyData.find((c) => c.id === id);
  if (!coach) return <div className="text-center mt-10">Coach not found!</div>;

  const [formData, setFormData] = useState({
    name: coach.name,
    number: coach.number,
    email: coach.email,
    status: coach.status,
    date: coach.date,
    address: coach.address,
    coachPrice: coach.coachPrice,
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    const index = DummyData.findIndex((c) => c.id === id);
    if (index !== -1) {
      DummyData[index] = { ...DummyData[index], ...formData };
      navigate("/coaches"); // Navigate back immediately
    }
  };

  return (
    <div className="max-h-screen max-w-screen bg-blue-100 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6 text-center bg-white shadow-lg rounded-lg py-4 px-8">
        Edit Coach
      </h1>

      <form className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto space-y-4">
        {/* Form fields */}
        <div>
          <label className="block font-medium">NAME</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">MOBILE</label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">E-MAIL</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">STATUS</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="Verified">Verified</option>
            <option value="Un-Verified">Un-Verified</option>
            <option value="Semi-Verified">Semi-Verified</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">DATE</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">ADDRESS</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">COACH PRICE</label>
          <input
            type="number"
            name="coachPrice"
            value={formData.coachPrice}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          {/* AlertDialog for Save Changes */}
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
              <Button onClick={() => setOpen(true)}>Save Changes</Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="bg-white rounded-xl shadow-2xl border border-gray-300 p-6">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-xl font-bold text-gray-900">
                  Save Changes?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-sm text-gray-600 mt-2">
                  Are you sure you want to save the changes to{" "}
                  <span className="font-medium">{formData.name}</span>?
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter className="mt-6 flex gap-2 justify-end">
                <AlertDialogCancel className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md px-4 py-2">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className="bg-green-600 hover:bg-green-700 text-white rounded-md px-4 py-2"
                  onClick={handleSave}
                >
                  Save
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Button
            type="button"
            variant="default"
            onClick={() => navigate("/coaches")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
