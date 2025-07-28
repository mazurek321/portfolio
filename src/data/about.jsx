  function calculateAge() {
    const birthDate = new Date('2002-07-11');
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }

export const aboutText = {
  heading: "Description",
  description: `My name is Bartek and I'm a Computer Science student
  at Rzeszów University of Technology. I have completed my third
  year of studies and am currently preparing to defend
  my engineering thesis. I'm passionate about
  programming and actively looking for opportunities
  to grow professionally in the field.`,
};

export const personalInfo = [
  { label: "Name", value: "Bartłomiej Mazurkiewicz" },
  { label: "Age", value: calculateAge()},
  { label: "From", value: "Rzeszów, Poland" },
  { label: "Status", value: "IT student" },
  { label: "Email", value: "mazurek321.93@wp.pl" },
  { label: "Phone", value: "+48 508 232 716" },
];

export const education = [
  {
    years: "2022 - Present",
    school: "Rzeszów University of Technology",
    major: "Information Technology",
  },
  {
    years: "2018 - 2022",
    school: "Technical high school in Leżajsk",
    major: "Information Technology",
  },
  
];

export const certificates = [
  {
    title: "Professional Exam EE.08",
    description: "Certificate confirming the acquisition of skills in the administration and operation of computer systems, peripheral devices, and local area networks."
  },
  {
    title: "Professional Exam EE.09",
    description: "Certificate confirming the acquisition of skills in creating and administering websites, web applications, and databases."
  }
];

export const interests = ["Programming", "Swimming", "Gym", "Books", "Gaming"];




