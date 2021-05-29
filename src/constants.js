import cv from './assets/files/saran_cv.pdf';
import mainImg from './assets/images/saran_img.jpeg';
import aw1 from './assets/images/acn award.jpg';
import aw2 from './assets/images/arab tech award.jpg'

export const defaultProps = {
    firstName: "Saravanan",
    lastName: "Rathinam",
    dob: "June 2nd, 1976",
    address: "Madurai, TN, India",
    zipcode: "625007",
    email: "saranvanangr@gmail.com",
    phone: "+91 6374-200-295",
    cv,
    mainImg,
    roles: [
      "IT Manager" , 
      1500,
      "Director" ,
      1500, 
      "Infrastructure Manager" ,
      1500, 
      "Support Manager" ,
      1500, 
      "IT Functional Manager" ,
      1500, 
      "Project Manager" ,
      1500, 
      "Service Delivery Manager" ,
      1500, 
      "Service Desk & Incident Manager",
      1500
    ],
    experience: [
      {
        date: "March 2020 - Till Date",
        role: "IT Infra Support Manager",
        company: "Logix Health Solutions PVT Ltd., India"
      },
      {
        date: "May, 2017 - January, 2020",
        role: "Information Technology Manager",
        company: "Zamil Steel, Vietnam"
      },
      {
        date: "November, 2006 - April, 2017",
        role: "Sr. Network Administrator Cum Division Incharge",
        company: "Zamil Steel, United Arab Emirates"
      },
      {
        date: "August, 2001 - November, 2006",
        role: "Senior Technical Support Engineer",
        company: "Zamil Industries, Saudi Arabia"
      },
      {
        date: "February, 1999 - July, 2001",
        role: "Customer Support Engineer",
        company: "Nexus Computers, India"
      }
    ],
    awards: [
        {
            awardImg: aw1,
            date: 'October 2009 - UAE',
            award: 'ACN Award',
            awardText: 'Energy and Utilities Implementation of the Year: Zamil Industrial',
            dataAos: 'zoom-in-right'
        },
        {
            awardImg: aw2,
            date: 'October 2009 - UAE',
            award: 'Arab Technology Awards',
            awardText: "Arab Tech Award - Recognised as the region's top IT Talent",
            dataAos: 'zoom-in-left'
        }
    ]
};
