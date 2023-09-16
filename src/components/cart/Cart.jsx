const Cart = ({ selectedCourse }) => {
  //   const { course_name, id } = selectedCourse;
  //   console.log(selectedCourse);
  return (
    <div>
      <h3>I am cart: {selectedCourse.length}</h3>

      {selectedCourse.map((course) => (
        <li key={course.id}>{course.course_name}</li>
      ))}
    </div>
  );
};

export default Cart;
