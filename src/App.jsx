import AllRoutes from "./routes/allroutes";
import { AuthProvider } from "./context/authProvider";

function App() {
  return (
    <AuthProvider>
      <AllRoutes />
    </AuthProvider>
  );
}

export default App;
