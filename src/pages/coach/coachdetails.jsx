"use client";

import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  getAllCoaches,
  changeCoachStatus,
  changeCoachBlockStatus,
} from "../../services/coachservice/coachservice";
import ProgressContext from "../../components/progresscontext/progresscontext";
import { Progress } from "../../components/ui/progress";
import LayoutPage from "../../components/layout/layoutPage";
import { ArrowLeft } from "lucide-react";
import InfoCard from "../../components/common/InfoCard";

export default function CoachDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coach, setCoach] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Profile");

  const { progress, isActive, startProgress, completeProgress } =
    useContext(ProgressContext);

  // Fetch coach details
  useEffect(() => {
    async function fetchCoach() {
      const interval = startProgress();
      try {
        const coaches = await getAllCoaches();
        const foundCoach = coaches.find((c) => c.id === id);
        setCoach(foundCoach);
      } catch (error) {
        console.error("Error fetching coaches:", error);
      } finally {
        completeProgress(interval);
        setLoading(false);
      }
    }
    fetchCoach();
  }, [id]);

  if (loading) {
    return (
      <div className="max-h-screen w-screen flex flex-col items-center justify-center bg-blue-50">
        <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin mb-4"></div>
        <p className="text-blue-700 font-semibold text-lg">Loading...</p>
      </div>
    );
  }

  if (!coach)
    return (
      <div className="text-center mt-10 text-lg font-medium text-red-500">
        Coach not found!
      </div>
    );

  const tabs = [
    "Profile",
    "Sessions History",
    "Coach Agreement Terms",
    "Coach Booking Details",
    "Agreements",
  ];

  // Helper to wrap async actions with progress
  const handleAction = async (action) => {
    const interval = startProgress();
    try {
      await action();
    } catch (err) {
      console.error(err);
    } finally {
      completeProgress(interval);
    }
  };

  return (
    <LayoutPage title={"Coach Dashboard"} onRefresh={""}>
      <div className="flex overflow-hidden bg-blue-50 rounded-lg">
        {/* Top Progress Bar */}
        {isActive && (
          <div className="fixed top-0 left-0 w-full z-50">
            <Progress value={progress} className="h-1 bg-blue-500" />
          </div>
        )}

        {/* Sidebar */}
        <div className="w-64 bg-white flex flex-col p-3 rounded-tl-lg">
          {/* Go Back Link */}
          <div className="mb-6">
            <button
              onClick={() => navigate("/coaches")}
              className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go back
            </button>
          </div>

          {/* Tabs Navigation */}
          <nav className="flex flex-col space-y-2 mb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`text-left px-4 py-2 rounded-lg font-medium ${
                  activeTab === tab
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 mb-5">
          {/* Profile Tab */}
          {activeTab === "Profile" && (
            <div className="space-y-6">
              {/* Profile Info */}
              <div className="">
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 justify-end bg-transparent p-4 rounded-xl ">
                  {/* Status Buttons */}
                  {coach.status.toLowerCase() === "unverified" && (
                    <Button
                      className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
                      onClick={() =>
                        handleAction(async () => {
                          await changeCoachStatus(coach.id, "verified");
                          setCoach({ ...coach, status: "Verified" });
                        })
                      }
                    >
                      Verify
                    </Button>
                  )}

                  {coach.status.toLowerCase() === "pending" && (
                    <>
                      <Button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
                        onClick={() =>
                          handleAction(async () => {
                            await changeCoachStatus(coach.id, "unverified");
                            setCoach({ ...coach, status: "Unverified" });
                          })
                        }
                      >
                        Unverify
                      </Button>
                      <Button
                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
                        onClick={() =>
                          handleAction(async () => {
                            await changeCoachStatus(coach.id, "verified");
                            setCoach({ ...coach, status: "Verified" });
                          })
                        }
                      >
                        Verify
                      </Button>
                    </>
                  )}

                  {coach.status.toLowerCase() === "verified" && (
                    <Button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
                      onClick={() =>
                        handleAction(async () => {
                          await changeCoachStatus(coach.id, "unverified");
                          setCoach({ ...coach, status: "Unverified" });
                        })
                      }
                    >
                      Unverify
                    </Button>
                  )}

                  {/* Block / Unblock */}
                  {coach.isBlocked ? (
                    <Button
                      className="bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-800 transition"
                      onClick={() =>
                        handleAction(async () => {
                          await changeCoachBlockStatus(coach.id, false);
                          setCoach({ ...coach, isBlocked: false });
                        })
                      }
                    >
                      Unblock
                    </Button>
                  ) : (
                    <Button
                      className="bg-red-700 text-white px-4 py-2 rounded-lg shadow hover:bg-red-800 transition"
                      onClick={() =>
                        handleAction(async () => {
                          await changeCoachBlockStatus(coach.id, true);
                          setCoach({ ...coach, isBlocked: true });
                        })
                      }
                    >
                      Block
                    </Button>
                  )}
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-start gap-6">
                  <img
                    src={coach.profilePicture || "/placeholder.png"}
                    alt={coach.name || "No Name"}
                    className="w-32 h-32 rounded-full border-4 border-blue-200 object-cover shadow"
                  />

                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-gray-800">
                        {coach.name || "Not Found"}
                      </h2>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold text-white shadow ${
                          coach.status === "Verified"
                            ? "bg-green-500"
                            : coach.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      >
                        {coach.status || "Not Found"}
                      </span>

                      {/* Blocked/Unblocked Badge */}
                      {coach.isBlocked ? (
                        <span className="px-3 py-1 rounded-full text-sm font-semibold text-white shadow bg-red-700">
                          Blocked
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-sm font-semibold text-white shadow bg-green-700">
                          Active
                        </span>
                      )}
                    </div>

                    <div className=" text-gray-700">
                      <p>
                        <span className="font-semibold">📧 Email:</span>{" "}
                        {coach.email || "Not Found"}
                      </p>
                      <p>
                        <span className="font-semibold">📱 Mobile:</span>{" "}
                        {coach.mobile || "Not Found"}
                      </p>
                      <p>
                        <span className="font-semibold">🎂 DOB:</span>{" "}
                        {coach.dob
                          ? new Date(coach.dob).toLocaleDateString()
                          : "Not Found"}
                      </p>
                      <p>
                        <span className="font-semibold">🚻 Gender:</span>{" "}
                        {coach.gender || "Not Found"}
                      </p>
                      <p>
                        <span className="font-semibold">🌍 Country:</span>{" "}
                        {coach.country || "Not Found"}
                      </p>
                      <p className="sm:col-span-2">
                        <span className="font-semibold">🏠 Address:</span>{" "}
                        {coach.address || "Not Found"}
                      </p>
                      <p>
                        <span className="font-semibold">📍 Pincode:</span>{" "}
                        {coach.pincode || "Not Found"}
                      </p>
                      <p>
                        <span className="font-semibold">🔑 SignIn Date:</span>{" "}
                        {coach.createdAt || "Not Found"}
                      </p>
                      <p>
                        <span className="font-semibold">⏱️ Last Update:</span>{" "}
                        {coach.updatedAt || "Not Found"}
                      </p>
                      {coach.deletedAT ? (
                        <p>
                          <span className="font-semibold">
                            ⏱️ Deleted Date:
                          </span>{" "}
                          {coach.deletedAT}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {/* Acceptance Details */}
              <InfoCard title="🕒 Extra Details">
                <p>
                  Genders:{" "}
                  {coach.accepted_genders?.length
                    ? coach.accepted_genders.join(", ")
                    : "Not Found"}
                </p>
                <p>
                  Languages:{" "}
                  {coach.accepted_languages?.length
                    ? coach.accepted_languages.join(", ")
                    : "Not Found"}
                </p>
                <p>
                  Activities:{" "}
                  {coach.my_activities?.length
                    ? coach.my_activities.join(", ")
                    : "Not Found"}
                </p>
              </InfoCard>

              {/* Experience & Story */}
              <InfoCard title="📝 Experience & Story">
                <p>Experience Since: {coach.experience_since_date || "NA"}</p>
                {coach.story ? (
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: coach.story }}
                  />
                ) : (
                  <p>Not Found</p>
                )}
              </InfoCard>

              {/* Certificates */}

              <InfoCard title="🎓 Certificates">
                {coach.certificates?.length > 0 ? (
                  <ul className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-2 gap-4 list-disc pl-6 space-y-2">
                    {coach.certificates.map((cert, index) => {
                      const fileName = cert.path.split("/").pop(); // Extract file name from URL
                      return (
                        <li key={cert._id || cert.index || index}>
                          <a
                            href={cert.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline break-all"
                          >
                            {`Certificate ${index + 1}`}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p>No certificates found</p>
                )}
              </InfoCard>

              {/* Work Portfolio */}
              <InfoCard title="💼 Work Portfolio">
                {coach.workAssets?.length > 0 ? (
                  <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10 list-disc pl-6 space-y-2">
                    {coach.workAssets.map((asset, index) => {
                      const fileName = asset.path?.split("/").pop(); // Extract file name from URL
                      return (
                        <li key={asset.id || asset.index}>
                          <a
                            href={asset.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline break-all"
                          >
                            {`Work Asset ${index + 1}`}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p>No work portfolio found</p>
                )}
              </InfoCard>
            </div>
          )}

          {/* Sessions Tab */}
          {activeTab === "Sessions History" && (
            <InfoCard title="📅 Sessions History">
              {coach.sessions?.length > 0 ? (
                <table className="w-full mt-3 border text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border">Level</th>
                      <th className="p-2 border">Session Mode</th>
                      <th className="p-2 border">Audience Type</th>
                      <th className="p-2 border">Date</th>
                      <th className="p-2 border">Time</th>
                      <th className="p-2 border">Price</th>
                      <th className="p-2 border">Payment Status</th>
                      <th className="p-2 border">Session Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coach.sessions.map((s, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-2 border">
                          {s.client_experties_level || "Not Found"}
                        </td>
                        <td className="p-2 border">
                          {s.client_session_mode || "Not Found"}
                        </td>
                        <td className="p-2 border">
                          {s.session_type || "Not Found"}
                        </td>
                        <td className="p-2 border">
                          {s.slot_date || "Not Found"}
                        </td>
                        <td className="p-2 border">
                          {s.from && s.to ? `${s.from} - ${s.to}` : "Not Found"}
                        </td>
                        <td className="p-2 border">
                          {s.avg_price
                            ? `${s.avg_price} ${s.currency || ""}`
                            : "Not Found"}
                        </td>
                        <td className="p-2 border">
                          {s.payment_status || "Not Found"}
                        </td>
                        <td className="p-2 border">
                          {s.booking_status === "true"
                            ? "Booked"
                            : s.booking_status === "false"
                            ? "Available"
                            : "Not Found"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No sessions found</p>
              )}
            </InfoCard>
          )}

          {/* Coach Agreement Terms tab */}
          {activeTab === "Coach Agreement Terms" && (
            <InfoCard title="📄 Agreement Terms">
              {coach.agreement_terms ? (
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: coach.agreement_terms }}
                />
              ) : (
                <p>No agreement terms found</p>
              )}
            </InfoCard>
          )}

          {/* Agreements Tab */}
          {activeTab === "Agreements" && (
            <div className="space-y-4 p-6">
              <InfoCard title="✅ Agreements">
                <p>
                  Certifications and Licenses:{" "}
                  {coach.agree_certification ? "Yes" : "Not Found"}
                </p>
                <p>
                  Talent and Experience:{" "}
                  {coach.agree_experience ? "Yes" : "Not Found"}
                </p>
                <p>Refund: {coach.agree_refund ? "Yes" : "Not Found"}</p>
                <p>
                  Privacy Policy:{" "}
                  {coach.agree_privacy_policy ? "Yes" : "Not Found"}
                </p>
                <p>
                  Terms & Conditions:{" "}
                  {coach.agree_terms_conditions ? "Yes" : "Not Found"}
                </p>
              </InfoCard>

              <InfoCard title="📖 Guidelines Read Status">
                <ul className="list-disc pl-6 text-gray-700">
                  <li>
                    Awareness Guideline:{" "}
                    {coach.has_read_awareness_guideline ? "Yes" : "No"}
                  </li>
                  <li>
                    Connection Guideline:{" "}
                    {coach.has_read_connection_guideline ? "Yes" : "No"}
                  </li>
                  <li>
                    Reflection Guideline:{" "}
                    {coach.has_read_reflection_guideline ? "Yes" : "No"}
                  </li>
                  <li>
                    Journal Guideline:{" "}
                    {coach.has_read_journal_guideline ? "Yes" : "No"}
                  </li>
                  <li>
                    Client Guideline:{" "}
                    {coach.has_read_client_guideline ? "Yes" : "No"}
                  </li>
                  <li>
                    Coach Guideline:{" "}
                    {coach.has_read_coach_guideline ? "Yes" : "No"}
                  </li>
                  <li>
                    Event Organizer Guideline:{" "}
                    {coach.has_read_event_organizer_guideline ? "Yes" : "No"}
                  </li>
                  <li>
                    Product Company Guideline:{" "}
                    {coach.has_read_product_company_guideline ? "Yes" : "No"}
                  </li>
                </ul>
              </InfoCard>
            </div>
          )}
        </div>
      </div>
    </LayoutPage>
  );
}
