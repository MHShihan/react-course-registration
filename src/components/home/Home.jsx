import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl p-4 font-bold text-center bg-red-300">
        Course Registration
      </h1>
      <h2>Length:{courses.length} </h2>
      <div className="container mx-auto grid grid-cols-3 gap-10">
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </small>
              </p>
              <div className="mt-2 flex  justify-evenly">
                <img src="../src/assets/dollar-sign 1.png" alt="" />
                <p>Price: {course?.price}</p>
                <img src="../src/assets/Frame.png" alt="" />
                <p>Credit: {course?.credit}hr</p>
              </div>
              <div className="flex justify-center">
                <button className=" text-center mt-4 bg-blue-500 px-28 py-1 rounded-lg text-white font-medium">
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
