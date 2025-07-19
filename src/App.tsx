
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TopNavigation from "./components/TopNavigation";
import BottomNavigation from "./components/BottomNavigation";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <TopNavigation />
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
    <BottomNavigation />
  </TooltipProvider>
);

export default App;
