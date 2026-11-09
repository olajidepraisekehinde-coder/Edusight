import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import Protection from "./protection/protection"
import DashboardHome from "./pages/dashboardHome"
import MyCourses from "./pages/myCourses"
import Certificate from "./pages/certificate"
import UserDashboard from "./pages/userDashboard"
// import { UseTheme } from "./utilis/useTheme"

const Home = lazy(() => import("./pages/home"))
const DashboardLayout = lazy(() => import("./Layout/dashboardLayout"))
const Login = lazy(() => import("./auth/login"))
const Signup = lazy(() => import("./auth/signup"))
const ForgetPassword = lazy(() => import("./password/forgetpassword"))
const ResetPassword = lazy(() => import("./password/resetpassword"))
const Coursecard = lazy(() => import("./component/coursecard"))
const CourseDetail = lazy(() => import("./component/courseDetail"))

function App() {
  // const { darkMode } = UseTheme()
  return (
    <BrowserRouter>
      {/* <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-[#121212] text-white" : "bg-[#FDF6EC] text-[#1C1B1B]"}`}> */}

        <Suspense fallback={
          <div className="flex justify-center items-center h-screen ">
            <AiOutlineLoading3Quarters className="animate-spin text-5xl font-bold text-[#8193BD]" />
          </div>}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path='/home' element={<Protection><Home /></Protection>} />
            <Route path='/course' element={<Protection><Coursecard /></Protection>} />

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="course" element={<MyCourses />} />
              <Route path="certificates" element={<Certificate />} />
              <Route path="profile" element={<UserDashboard />} />
            </Route>

            <Route path='/course/:id' element={<Protection><CourseDetail /></Protection>} />
            {/* <Route path='/profile' element={<Protection><Profile /></Protection>} /> */}
            <Route path='/signup' element={<Signup />} />
            {/* <Route path='*' element={<h1 className="text-white text-3xl font-bold">404 Not Found</h1>} /> */}
            {/* <Route path="/files" element={<Protection><Files /></Protection>} /> */}
          </Routes>
        </Suspense>
      {/* </div> */}

    </BrowserRouter >




  )

}
export default App

