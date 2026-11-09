import basicdev from "../assets/basicdev.webp"
import javaImg from "../assets/javascript.webp"
import reactImg from "../assets/ReactTail.webp"
import nodejsImg from "../assets/node&express.webp"
import pythonImg from "../assets/python.webp"
import hackingImg from "../assets/hacking.webp"
import uiImg from "../assets/ui&ux.webp"
import AlImg from "../assets/Al.webp"


const courses = [
  {
    id: 1,
    title: "Complete HTML & CSS Bootcamp",
    instructor: "Sarah Johnson",
    category: "Web Development",
    duration: "8 Weeks",
    students: 1245,
    rating: "⭐⭐⭐⭐⭐ (5.0)",
    price: "$39.99",
    image: basicdev,
    youtube: "https://www.youtube.com/embed/mJgBOIoGihA?si=iyqhamltcLFdKeRY",
  },


  {
    id: 2,
    title: "JavaScript From Zero to Hero",
    instructor: "Mosh",
    category: "Web Development",
    duration: "10 Weeks",
    students: 2134,
    rating: "⭐⭐⭐⭐ (4.9)",
    price: "$49.99",
    image: javaImg,
    youtube: "https://www.youtube.com/embed/W6NZfCO5SIk?si=q4QkboOMHiRdOq85",
  },
  {
    id: 3,
    title: "React & Tailwind CSS Masterclass",
    instructor: "Apna",
    category: "Frontend",
    duration: "12 Weeks",
    students: 1780,
    rating: "⭐⭐⭐⭐ (4.9)",
    price: "$59.99",
    image: reactImg,
    youtube: "https://www.youtube.com/embed/6biMWgD6_JY?si=EbUZcF2TQltBT7Yb",
  },
  {
    id: 4,
    title: "Node.js & Express API Development",
    instructor: "Emily Carter",
    category: "Backend",
    duration: "9 Weeks",
    students: 890,
    rating: "⭐⭐⭐ (4.7)",
    price: "$44.99",
    image: nodejsImg,
    youtube: "https://www.youtube.com/embed/TlB_eWDSMt4?si=8yRhCEtbmp12s-KI"
  },
  {
    id: 5,
    title: "Python Programming Essentials",
    instructor: "James Smith",
    category: "Programming",
    duration: "11 Weeks",
    students: 2640,
    rating: "⭐⭐⭐⭐ (4.8)",
    price: "$54.99",
    image: pythonImg,
    youtube:  "https://www.youtube.com/embed/_uQrJ0TkZlc?si=d0PDWMt0E4Rc1aP-"
  },
  {
    id: 6,
    title: "Ethical Hacking Fundamentals",
    instructor: "Alex Green",
    category: "Cybersecurity",
    duration: "14 Weeks",
    students: 1450,
    rating: "⭐⭐⭐⭐ (4.9)",
    price: "$69.99",
    image: hackingImg,
    youtube: "https://www.youtube.com/embed/fNzpcB7ODxQ?si=pCbPn850zXIrWDgX" 
  },
  {
    id: 7,
    title: "UI/UX Design for Beginners",
    instructor: "Sophia Lee",
    category: "Design",
    duration: "7 Weeks",
    students: 1100,
    rating: "⭐⭐⭐ (4.6)",
    price: "$34.99",
    image: uiImg,
    youtube:"https://www.youtube.com/embed/MBblN98-5lg?si=bOfc2SLn3FBLRBHw" 
  },
  {
    id: 8,
    title: "Introduction to Artificial Intelligence",
    instructor: "Daniel Adams",
    category: "Artificial Intelligence",
    duration: "13 Weeks",
    students: 980,
    rating: "⭐⭐⭐⭐ (4.8)",
    price: "$79.99",
    image: AlImg,
    youtube:"https://www.youtube.com/embed/LGCZ-Fhm48c?si=_iTABydMDqiOn1or" 
  }

];
export default courses
