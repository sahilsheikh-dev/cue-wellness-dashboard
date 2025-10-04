import LayoutPage from "../../components/layout/layoutPage";

export default function Dashboard() {
  return (
    <LayoutPage title="Dashboard">
      <div className="flex flex-col items-center justify-center text-center py-10">
        <h2 className="text-xl font-semibold text-gray-700">
          Welcome to Admin Dashboard
        </h2>
        <p className="text-gray-500 mt-2">This is the main content area.</p>
      </div>
    </LayoutPage>
  );
}
