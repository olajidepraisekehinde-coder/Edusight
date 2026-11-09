// import useData from '../utility/useData'
import courses from '../pages/courses';
import { useParams } from 'react-router-dom';
// import { IoStar } from "react-icons/io5";


export default function CourseDetail() {
    const { id } = useParams()
    const course = courses.find((course) => course.id === Number(id));
    console.log(id)

    if (!course) {
        return ( 
            <>
                <h1>Course not found</h1>
            </>
        )
    } 
    return (
        <div className='max-2-5xl mx-auto p-8 text-white'>
            <div className='flex justify-center'>

            <img src={course.image} alt={course.title} className="w-full md:max-w-3xl rounded-lg" />
            </div>

            <div className="p-4 text-center text-2xl">
                <h1 className="font-bold">{course.title}</h1>
            </div>

            <div className="p-5">
                <p><span className="text-[#8193BD] font-bold text-xl">Instructor:</span> {course.instructor}</p>
                <p><span className="text-[#8193BD] font-bold text-xl">Category:</span> {course.category}</p>
                <p><span className="text-[#8193BD] font-bold text-xl">Duration:</span> {course.duration}</p>
                <p><span className="text-[#8193BD] font-bold text-xl">Students:</span> {course.students}</p>
                <p><span className="text-[#8193BD] font-bold text-xl">Price:</span> {course.price}</p>

                <div className="flex gap-3">
                    {/* <IoStar className="text-yellow-300 text-xl" /> */}
                    <p>{course.rating}</p>
                </div>

            </div>

            <iframe 
            src={course.youtube}
            title={course.title}
            className='w-full h-[500px] rounded-lg'
            allowFullScreen/>

          
        </div>
        
    )

}