const course ={
    courseName: 'JavaScript',
    Price: 998,
    CourseInstructer: "Jhankar Mahbub",
}
const {CourseInstructer:instructor}=course
console.log(instructor);

const navbar = (companyName) => {
    console.log(`Welcome !!! ${companyName}`);
}

console.log(navbar("Jatin Joshi"));