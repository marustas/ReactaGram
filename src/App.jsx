import "./GlobalStyles.css";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import AuthLayout from "./pages/AuthLayout";
import RootLayout from "./pages/RootLayout";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="flex h-screen">
      <Routes>
        <Route 
          element={<ProtectedRoute>
                  <RootLayout />
                </ProtectedRoute>
              }
            >
          <Route index element={<Home />} />
        </Route>
        
        <Route index element={<Home />} />
        <Route element={<AuthLayout />} >
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
    <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "20px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        >
          {(t) => (
            <ToastBar toast={t}>
              {({ icon, message }) => (
                <>
                  {icon}
                  {message}
                  {t.type !== "loading" && (
                    <button className="rounded-md border-none h-full" onClick={() => toast.dismiss(t.id)}>
                      <RxCross2 />
                    </button>
                  )}
                </>
              )}
            </ToastBar>
          )}
        </Toaster>
    </QueryClientProvider>
  );
};

export default App;
