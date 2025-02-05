import React from "react";
export default function Faculty() {
  const faculties = [
    {
      id: 1,
      name: "Dr. Gopi sanghani",
      desig: "Dean",
      imgurl:
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg",
    },
    {
      id: 2,
      name: "Dr. Nilesh Gambhva",
      desig: "Professor",
      imgurl:
        "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg",
    },
    // {
    //   id: 3,
    //   name: "Dr. Pradhuymnsinh Jadeja",
    //   desig: "Professor",
    //   imgurl:
    //     "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg",
    // },
    // {
    //   id: 4,
    //   name: "Prof. Maulik Trivedi",
    //   desig: "Asst. Professor",
    //   imgurl:
    //     "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg",
    // },
    // {
    //   id: 5,
    //   name: "Prof. Firoz Sherasiya",
    //   desig: "Asst. Professor",
    //   imgurl:
    //     "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/12---28-04-2023-02-06-51.jpg",
    // },
    // {
    //   id: 6,
    //   name: "Prof. Rupesh Vaishnav",
    //   desig: "Asst. Professor",
    //   imgurl:
    //     "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/10---28-04-2023-02-07-03.jpg",
    // },
    // {
    //   id: 7,
    //   name: "Prof. Arjun Bala",
    //   desig: "Asst. Professor",
    //   imgurl:
    //     "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg",
    // },
    // {
    //   id: 8,
    //   name: "dr. Sharon Mohtra",
    //   desig: "Asst. Professor",
    //   imgurl:
    //     "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/363---29-04-2023-01-46-16.jpg",
    // },
    // {
    //   id: 9,
    //   name: "Dr. Dixita Kagathra",
    //   desig: "Asst. Professor",
    //   imgurl:
    //     "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/9---28-04-2023-02-06-37.jpg",
    // },
    // {
    //   id: 10,
    //   name: "Prof. Swati Sharma",
    //   desig: "Asst. Professor",
    //   imgurl:
    //     "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/11---29-04-2023-01-44-21.jpg",
    // },
    // {
    //   id: 11,
    //   name: "Prof. Mayur Padia",
    //   desig: "Asst. Professor",
    //   imgurl:
    //     "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/13---28-04-2023-02-07-48.jpg",
    // },
    // {
    //   id: 12,
    //   name: "Prof. Twinkle Raithatha",
    //   desig: "Asst. Professor",
    //   imgurl:
    //     "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/453---25-01-2025-12-12-02.jpg",
    // },
    // {
    //   id: 13,
    //   name: "Prof. Devangi Kotak",
    //   desig: "Asst. Professor",
    //   imgurl:
    //     "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/359---29-04-2023-01-45-32.jpg",
    // },
    // {
    //   id: 14,
    //   name: "Prof. Shruti Maniar",
    //   desig: "Asst. Professor",
    //   imgurl:
    //     "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/336---28-04-2023-01-34-37.jpg",
    // },
    // {
    //   id: 15,
    //   name: "Prof. Dharmik Vasiyani",
    //   desig: "Asst. Professor",
    //   imgurl:
    //     "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/335---27-01-2025-09-33-28.jpg",
    // },
  ];

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>Faculty Information</h1>

          {faculties.map((fact) => (
            <div className="card m-5 rounded-2">
              <img src={fact.imgurl} className="card-img-top my-3" />
              <div className="card-body">
                <h5 className="card-title m-3">{fact.name}</h5>
                <hr />
                <p className="card-text fw-bold fs-6">{fact.desig}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
