// src/pages/auth/login/login.jsx
import { useState, useEffect } from "react";
import { LoginForm } from "@/components/login-form/login-form";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import useAuthService from "../../../services/authservice/authservice";

export default function Login() {
  const { loginUser } = useAuthService();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    type: "default",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (isSubmitting) {
      setProgress(0);
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 90 ? prev : prev + Math.random() * 10));
      }, 300);
    } else {
      setProgress(100);
      const timeout = setTimeout(() => setProgress(0), 500);
      return () => clearTimeout(timeout);
    }
    return () => clearInterval(timer);
  }, [isSubmitting]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!mobile || !password) {
      setAlert({
        show: true,
        type: "destructive",
        message: "Enter mobile and password",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await loginUser(mobile.trim(), password);
      setAlert({ show: true, type: "default", message: "Login successful!" });
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Login failed. Check credentials.";
      setAlert({ show: true, type: "destructive", message: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 relative">
      {isSubmitting && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Progress value={progress} className="h-1 rounded-none" />
        </div>
      )}

      <div className="w-full max-w-sm login-form-container">
        {alert.show && (
          <Alert variant={alert.type} className="mb-4">
            <Terminal className="mr-2 h-4 w-4" />
            <AlertTitle>
              {alert.type === "destructive" ? "Error!" : "Success!"}
            </AlertTitle>
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        )}

        <LoginForm
          mobile={mobile}
          password={password}
          setMobile={setMobile}
          setPassword={setPassword}
          onSubmit={handleLogin}
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
}
