import { Track, FeeTable } from './types';

export const CONFERENCE_DETAILS = {
  name: "2025 IEEE Flagship International VIIT Conference",
  shortName: "VIIT",
  theme: "Sustainable Development for Innovation and Integration of Engineering and Technology",
  dates: "November 21-22, 2025",
  location: "Vignan's Institute of Information Technology, Visakhapatnam, Andhra Pradesh, India",
};

export const TRACKS: Track[] = [
  {
    id: 1,
    title: "Cutting-Edge Computing and Intelligent Systems",
    topics: [
      "Artificial Intelligence and Machine Learning Applications",
      "Computer Vision and Pattern Recognition Techniques",
      "Big Data Analytics and Data Science",
      "Optimization Technique",
      "Distributed Systems and Cloud Computing",
      "Programming Languages and Software Engineering",
      "Quantum Computing and Its Advancements"
    ]
  },
  {
    id: 2,
    title: "Cybersecurity and Human-Centric Computing",
    topics: [
      "Cybersecurity and Network Protection Technologies",
      "Interaction Design and Human-Computer Interfaces",
      "Forensic Techniques in Cybercrime Investigation",
      "Secure Systems Design and Engineering Practices",
      "Database Security and Access Control Mechanisms"
    ]
  },
  {
    id: 3,
    title: "Communication Networks and Security, Signal Processing, Integrated Technologies, and Future Innovations",
    topics: [
      "Digital Signature Techniques for Enhancing Network Security",
      "Communication and Signal Processing",
      "Satellite Communication and Emerging Technologies",
      "Trends in Semiconductors and VLSI",
      "Secure Routing and Advanced Network Management",
      "Privacy in RFID Systems and Ubiquitous Computing Environments",
      "Integrated Circuits and Electronic Systems",
      "Optoelectronics and Photonics",
      "IoT and Embedded System Technologies"
    ]
  },
  {
    id: 4,
    title: "Power Systems and Renewable Energy",
    topics: [
      "Micro grids, Smart grid and Active Distribution Network Management",
      "Electrical Energy Generation, Transmission and Distribution",
      "Hybrid Renewable Energy Systems",
      "Power Electronics Drives and Electric Vehicles",
      "Electrical Machines Modelling and Simulation",
      "Control system, Automation & applications",
      "HVDC, FACTS devices and Controllers"
    ]
  },
  {
    id: 5,
    title: "Materials Science and Advanced Engineering Solutions",
    topics: [
      "Nanotechnology and Nanomaterials",
      "Functional and Structural Materials",
      "Optical, Magnetic, and Electronic Materials",
      "Biocompatible and Biomedical Materials",
      "Coatings and Thin Film Technologies",
      "Composite Engineering Materials",
      "Renewable and Sustainable Materials"
    ]
  }
];

export const INDIAN_FEES_EARLY: FeeTable = {
  title: "Indian Delegates - Early Bird",
  currency: "INR (₹)",
  fees: [
    { category: "Academicians / Scientists / Industrialists", ieeeMember: "7000", nonIeeeMember: "8000" },
    { category: "Student Author", ieeeMember: "6000", nonIeeeMember: "7000" },
    { category: "Non-author Attendee", ieeeMember: "2000", nonIeeeMember: "3000" }
  ]
};

export const INDIAN_FEES_REGULAR: FeeTable = {
  title: "Indian Delegates - Regular",
  currency: "INR (₹)",
  fees: [
    { category: "Academicians / Scientists / Industrialists", ieeeMember: "7500", nonIeeeMember: "8500" },
    { category: "Student Author", ieeeMember: "6500", nonIeeeMember: "7500" },
    { category: "Non-author Attendee", ieeeMember: "2000", nonIeeeMember: "3000" }
  ]
};

export const FOREIGN_FEES_EARLY: FeeTable = {
  title: "Foreign Delegates - Early Bird",
  currency: "USD ($)",
  fees: [
    { category: "Academicians / Scientists / Industrialists", ieeeMember: "300", nonIeeeMember: "350" },
    { category: "Student Author", ieeeMember: "200", nonIeeeMember: "225" },
    { category: "Non-author Attendee", ieeeMember: "60", nonIeeeMember: "70" }
  ]
};

export const FOREIGN_FEES_REGULAR: FeeTable = {
  title: "Foreign Delegates - Regular",
  currency: "USD ($)",
  fees: [
    { category: "Academicians / Scientists / Industrialists", ieeeMember: "325", nonIeeeMember: "375" },
    { category: "Student Author", ieeeMember: "225", nonIeeeMember: "250" },
    { category: "Non-author Attendee", ieeeMember: "60", nonIeeeMember: "70" }
  ]
};