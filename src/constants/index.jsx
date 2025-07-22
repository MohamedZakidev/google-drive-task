import { BiSolidVideos } from "react-icons/bi";
import { BsFileSpreadsheetFill } from "react-icons/bs";
import { FaComputer, FaFilePdf, FaGoogleDrive } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoMdHeadset } from "react-icons/io";
import { MdOutlineDocumentScanner } from "react-icons/md";

export const sidebarItems = [
    {
        icon: <GoHomeFill size={"20px"} />,
        name: 'Home'
    },
    {
        icon: <FaGoogleDrive size={"20px"} />,
        name: 'My Drive'
    },
    {
        icon: <FaComputer size={"20px"} />,
        name: 'Computers'
    }
]

export const typeFilterItems = [
    {
        icon: <MdOutlineDocumentScanner size={"20px"} color="#4285F4" />,
        name: 'Documents',
        value: 'document'
    },
    {
        icon: <BsFileSpreadsheetFill size={"20px"} color="#34A853" />,
        name: 'Spreadsheets',
        value: 'spreadsheet'
    },
    {
        icon: <BiSolidVideos size={"20px"} color="#EA4335" />,
        name: 'Videos',
        value: 'video'
    },
    {
        icon: <FaFilePdf size={"20px"} color="#EA4335" />,
        name: 'PDFs',
        value: 'pdf'
    },
    {
        icon: <IoMdHeadset size={"20px"} color="#EA4335" />,
        name: 'Audio',
        value: 'audio'
    }
]

export const filesData = [
    {
        name: "Project Proposal.pdf",
        owner: "Mohamed Zaki",
        dateModified: "2025-07-15",
        size: "1.2 MB",
        extension: "pdf",
        icon: <MdOutlineDocumentScanner size={"20px"} color="#4285F4" />,
        details: "This document outlines the initial project proposal including objectives, timeline, and scope.",
    },
    {
        name: "Resume.docx",
        owner: "Mohamed Zaki",
        dateModified: "2025-06-25",
        size: "125 KB",
        extension: "document",
        icon: <MdOutlineDocumentScanner size={"20px"} color="#4285F4" />,
        details: "A professional resume with education, experience, and technical skills listed.",
    },
    {
        name: "Budget.xlsx",
        owner: "Ahmed Nour",
        dateModified: "2025-07-01",
        size: "315 KB",
        extension: "spreadsheet",
        icon: <BsFileSpreadsheetFill size={"20px"} color="#34A853" />,
        details: "Monthly budget spreadsheet including income, expenses, and savings projections.",
    },
    {
        name: "Meeting Recording.mp4",
        owner: "Fatma Samir",
        dateModified: "2025-06-30",
        size: "58.3 MB",
        extension: "video",
        icon: <BiSolidVideos size={"20px"} color="#EA4335" />,
        details: "Full video recording of the last team sync-up meeting held over Zoom.",
    },
    {
        name: "Design Mockup.fig",
        owner: "Mohamed Zaki",
        dateModified: "2025-07-17",
        size: "2.8 MB",
        extension: "document",
        icon: <MdOutlineDocumentScanner size={"20px"} color="#4285F4" />,
        details: "Figma design mockup for the new homepage layout and UI improvements.",
    },
    {
        name: "Notes.txt",
        owner: "Ali Hassan",
        dateModified: "2025-07-05",
        size: "5 KB",
        extension: "document",
        icon: <MdOutlineDocumentScanner size={"20px"} color="#4285F4" />,
        details: "Simple text notes collected during brainstorming session.",
    },
    {
        name: "Invoice #1023.pdf",
        owner: "Sara Magdy",
        dateModified: "2025-06-28",
        size: "312 KB",
        extension: "document",
        icon: <FaFilePdf size={"20px"} color="#EA4335" />,
        details: "Invoice for services rendered in June, including itemized billing.",
    },
    {
        name: "Client Presentation.pptx",
        owner: "Mohamed Zaki",
        dateModified: "2025-07-18",
        size: "4.6 MB",
        extension: "document",
        icon: <MdOutlineDocumentScanner size={"20px"} color="#4285F4" />,
        details: "PowerPoint presentation prepared for the upcoming client pitch.",
    },
    {
        name: "Podcast Episode 12.mp3",
        owner: "Omar Youssef",
        dateModified: "2025-07-03",
        size: "18.4 MB",
        extension: "audio",
        icon: <IoMdHeadset size={"20px"} color="#EA4335" />,
        details: "Episode 12 of the team podcast discussing industry trends and updates.",
    }
];

