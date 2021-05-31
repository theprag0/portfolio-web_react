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
    phone: "+91 6374200295",
    skype: "sarangr007",
    cv,
    mainImg,
    roles: [
      "an IT Manager" , 
      1500,
      "an IT Director" ,
      1500, 
      "an Infrastructure Manager" ,
      1500, 
      "a Support Manager" ,
      1500, 
      "an IT Functional Manager" ,
      1500, 
      "a Project Manager" ,
      1500, 
      "a Service Delivery Manager" ,
      1500, 
      "a Service Desk & Incident Manager",
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
    ],
    keySkills: [
      'Project Management, Infrastructure Management, Support Management', 
      'Data Center Management, Triage Incident Management, Problem Management',
      'Change Management, Executive Management, StakeHolder & Communication Management',
      'Budgeting, Contract Negotiations, Procurement, Vendor Relations, Asset Management',
      'Scrum Master',
      'BPO Service',
      'ITSM & Helpdesk, NOC & SOC',
      'Business Review, Solutions, forecast & IT Road map',
    ],
    softSkills: [
      'Scrum Certified, Agile Methodology, Jira Certified',
      'Trello, Kanban',
      'MS Team & MS Planner, MS Office',
      'DMAIC Method, Why-Why Method, Cause & Effect Analysis, Root cause analysis(RCA), Corrective Action Plan(CAP)',
      'Presentation Skill, Time Management, Problem Solving, Self-Motivation',
      'Mentoring, Trusted Adviser, Leadership, Team Building, People growth',
      'Recruitment, Planning, Interpersonal, Networking' 
    ],
    certifications: [
      {
        name: 'ITIL Foundation Certified',
        org: 'Peoplecert'
      },
      {
        name: 'Project Management Professional (PMP)',
        org: 'Skill Logic'
      },
      {
        name: 'Lean Six Sigma Green Belt',
        org: 'Udemy'
      },
      {
        name: 'Microsoft Certified Professional (MCP)',
        org: 'Microsoft'
      },
      {
        name: 'Implementing and managing Microsoft Exchange Server 2000',
        org: 'Microsoft'
      },
      {
        name: 'The Complete Agile Scrum Fundamental',
        org: 'Udemy'
      }
    ]
};
