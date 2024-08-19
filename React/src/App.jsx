import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./page/home";
import Login from "./page/login";
import Footer from "./components/home/footer";
import { NavigationMenuDemo } from "./components/home/navigation";
// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation stays at the top */}
      <Navigation />

      {/* Main content in a container */}
      <main className="flex-grow container mx-auto p-6">
        <RouterProvider router={router} />
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
