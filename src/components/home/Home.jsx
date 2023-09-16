import { useEffect } from "react";
import { useState } from "react";
import Cart from "../cart/Cart";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);

  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectedCourse.find((item) => item.id === course.id);
    if (isExist) {
      alert("This Course is already selected");
    } else {
      setSelectedCourse([...selectedCourse, course]);
    }
    console.log(isExist);
  };
  console.log(selectedCourse);

  return (
    <div className="bg-[#F3F3F3]">
      <h1 className="text-5xl text-center font-bold py-10">
        Course Registration
      </h1>
      <h2>Length:{courses.length} </h2>

      <div className="flex flex-1">
        <div className=" mx-auto grid grid-cols-3 gap-10">
          {courses.map((course) => (
            <div key={course.id}>
              <div className="border-gray-200 border-2 rounded-lg p-2 w-80  ">
                <figure className="flex justify-center mt-2">
                  <img src={course?.img} alt="" />
                </figure>
                <h3 className="font-bold text-2xl text-center mt-2">
                  {course?.course_name}
                </h3>
                <p className="text-center">
                  <small>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </small>
                </p>
                <div className="mt-2 flex  justify-evenly">
                  <img src="../src/assets/dollar-sign 1.png" alt="" />
                  <p>Price: {course?.price}</p>
                  <img src="../src/assets/Frame.png" alt="" />
                  <p>Credit: {course?.credit}hr</p>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => handleSelectCourse(course)}
                    className=" text-center mt-4 bg-blue-500 px-28 py-1 rounded-lg text-white font-medium"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center mr-10">Add Course</h1>
          <Cart selectedCourse={selectedCourse}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
