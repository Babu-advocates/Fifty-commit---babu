import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster as HotToaster } from "react-hot-toast";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Index from "./pages/Index";
import AdvocateLogin from "./pages/AdvocateLogin";
import EmployeeLogin from "./pages/EmployeeLogin";
import EmployeeNotifications from "./pages/EmployeeNotifications";
import BankLogin from "./pages/BankLogin";
import BankManagerDashboard from "./pages/BankManagerDashboard";
import DocumentTracking from "./pages/DocumentTracking";
import QueriesMonitoring from "./pages/QueriesMonitoring";
import ReportsAnalytics from "./pages/ReportsAnalytics";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import BankEmployeeDashboard from "./pages/BankEmployeeDashboard";
import LoanApplications from "./pages/LoanApplications";
import LoanRecovery from "./pages/LoanRecovery";
import CreateEmployeeAccount from "./pages/CreateEmployeeAccount";
import CreateBankAccount from "./pages/CreateBankAccount";
import CreateBankAccountList from "./pages/CreateBankAccountList";

import Attendance from "./pages/Attendance";
import PastApplications from "./pages/PastApplications";
import PaymentDetails from "./pages/PaymentDetails";
import BanksDealt from "./pages/BanksDealt";
import RequestToBank from "./pages/RequestToBank";
import ReceivedFromBank from "./pages/ReceivedFromBank";
import EmployeeAttendance from "./pages/EmployeeAttendance";
import CreateApplication from "./pages/CreateApplication";
import MySubmissions from "./pages/MySubmissions";
import BankEmployeeQueries from "./pages/BankEmployeeQueries";
import BankEmployeeCompleted from "./pages/BankEmployeeCompleted";
import BankEmployeePayments from "./pages/BankEmployeePayments";
import BankEmployeeHiringStatus from "./pages/BankEmployeeHiringStatus";

import NotFound from "./pages/NotFound";

// Protected Route Components
import AdminProtectedRoute from "./components/ProtectedRoutes/AdminProtectedRoute";
import EmployeeProtectedRoute from "./components/ProtectedRoutes/EmployeeProtectedRoute";
import BankEmployeeProtectedRoute from "./components/ProtectedRoutes/BankEmployeeProtectedRoute";
import BankManagerProtectedRoute from "./components/ProtectedRoutes/BankManagerProtectedRoute";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Force proper application loading
  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HotToaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#333',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: '500',
            padding: '16px',
            maxWidth: '400px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/advocate-login" element={<AdvocateLogin />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/bank-login" element={<BankLogin />} />
          
          {/* Bank Manager Protected Routes */}
          <Route path="/bank-manager-dashboard" element={
            <BankManagerProtectedRoute>
              <BankManagerDashboard />
            </BankManagerProtectedRoute>
          } />
          <Route path="/bank-manager/document-tracking" element={
            <BankManagerProtectedRoute>
              <DocumentTracking />
            </BankManagerProtectedRoute>
          } />
          <Route path="/bank-manager/queries-monitoring" element={
            <BankManagerProtectedRoute>
              <QueriesMonitoring />
            </BankManagerProtectedRoute>
          } />
          <Route path="/bank-manager/reports-analytics" element={
            <BankManagerProtectedRoute>
              <ReportsAnalytics />
            </BankManagerProtectedRoute>
          } />
          
          {/* Admin Protected Routes */}
          <Route path="/admin-dashboard" element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          } />
          <Route path="/admin/applications" element={
            <AdminProtectedRoute>
              <LoanApplications />
            </AdminProtectedRoute>
          } />
          <Route path="/admin/loan-recovery" element={
            <AdminProtectedRoute>
              <LoanRecovery />
            </AdminProtectedRoute>
          } />
          <Route path="/admin/past-applications" element={
            <AdminProtectedRoute>
              <PastApplications />
            </AdminProtectedRoute>
          } />
          <Route path="/admin/payment-details" element={
            <AdminProtectedRoute>
              <PaymentDetails />
            </AdminProtectedRoute>
          } />
          <Route path="/admin/create-employee-account" element={
            <AdminProtectedRoute>
              <CreateEmployeeAccount />
            </AdminProtectedRoute>
          } />
          <Route path="/admin/create-bank-account" element={
            <AdminProtectedRoute>
              <CreateBankAccount />
            </AdminProtectedRoute>
          } />
          <Route path="/admin/bank-accounts" element={
            <AdminProtectedRoute>
              <CreateBankAccountList />
            </AdminProtectedRoute>
          } />
          
          {/* Employee Protected Routes */}
          <Route path="/employee-dashboard" element={
            <EmployeeProtectedRoute>
              <EmployeeDashboard />
            </EmployeeProtectedRoute>
          } />
          <Route path="/employee/applications" element={
            <EmployeeProtectedRoute>
              <LoanApplications />
            </EmployeeProtectedRoute>
          } />
          <Route path="/employee/notifications" element={
            <EmployeeProtectedRoute>
              <EmployeeNotifications />
            </EmployeeProtectedRoute>
          } />
          <Route path="/employee/past-applications" element={
            <EmployeeProtectedRoute>
              <PastApplications />
            </EmployeeProtectedRoute>
          } />
          <Route path="/employee/request-to-bank" element={
            <EmployeeProtectedRoute>
              <RequestToBank />
            </EmployeeProtectedRoute>
          } />
          <Route path="/employee/received-from-bank" element={
            <EmployeeProtectedRoute>
              <ReceivedFromBank />
            </EmployeeProtectedRoute>
          } />
          <Route path="/employee/attendance" element={
            <EmployeeProtectedRoute>
              <EmployeeAttendance />
            </EmployeeProtectedRoute>
          } />
          
          {/* Bank Employee Protected Routes */}
          <Route path="/bank-employee-dashboard" element={
            <BankEmployeeProtectedRoute>
              <BankEmployeeDashboard />
            </BankEmployeeProtectedRoute>
          } />
          <Route path="/bank-employee/create-application" element={
            <BankEmployeeProtectedRoute>
              <CreateApplication />
            </BankEmployeeProtectedRoute>
          } />
          <Route path="/bank-employee/submissions" element={
            <BankEmployeeProtectedRoute>
              <MySubmissions />
            </BankEmployeeProtectedRoute>
          } />
          <Route path="/bank-employee/queries" element={
            <BankEmployeeProtectedRoute>
              <BankEmployeeQueries />
            </BankEmployeeProtectedRoute>
          } />
          <Route path="/bank-employee/completed" element={
            <BankEmployeeProtectedRoute>
              <BankEmployeeCompleted />
            </BankEmployeeProtectedRoute>
          } />
          <Route path="/bank-employee/payments" element={
            <BankEmployeeProtectedRoute>
              <BankEmployeePayments />
            </BankEmployeeProtectedRoute>
          } />
          <Route path="/bank-employee/hiring-status" element={
            <BankEmployeeProtectedRoute>
              <BankEmployeeHiringStatus />
            </BankEmployeeProtectedRoute>
          } />
          
          {/* Shared Routes */}
          <Route path="/attendance" element={<Attendance />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
