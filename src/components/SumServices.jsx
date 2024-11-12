import React from "react";
import styles from "../Styles/SumService.module.css";

// Define an array of services with background colors
const servicesData = [
  {
    title: "Digital Marketing",
    description:
      "Crafting and implementing effective digital marketing strategies to enhance brand visibility, engagement, and conversions across various online platforms.",
    backgroundColor: "#FF5733", // Example: Color for Digital Marketing
  },
  {
    title: "Social Media Management",
    description:
      "Comprehensive management of social media accounts, including content creation, scheduling, community engagement.",
    backgroundColor: "#33FF57", // Example: Color for Social Media Management
  },
  {
    title: "Website Development",
    description:
      "Designing and developing engaging, user-friendly websites tailored to meet specific business objectives.",
    backgroundColor: "#3357FF", // Example: Color for Website Development
  },
  {
    title: "CRM Development",
    description:
      "Customized Customer Relationship Management (CRM) solutions that enable businesses to efficiently manage and nurture customer relationships.",
    backgroundColor: "#F1C40F", // Example: Color for CRM Development
  },
  {
    title: "ERP Development",
    description:
      "Tailored Enterprise Resource Planning (ERP) solutions that integrate and streamline business processes.",
    backgroundColor: "#8E44AD", // Example: Color for ERP Development
  },
  {
    title: "Server Solutions",
    description:
      "Unlock unparalleled performance with our comprehensive range of server services.",
    backgroundColor: "#E74C3C", // Example: Color for Server Solutions
  },
  {
    title: "Training",
    description:
      "Providing training services to enhance skills and knowledge in various domains.",
    backgroundColor: "#2ECC71", // Example: Color for Training
  },
  {
    title: "States Covered",
    description:
      "Our services are available in various states to serve you better.",
    backgroundColor: "#3498DB", // Example: Color for States Covered
  },
];

const Services = () => {
  return (
    <div className={styles.container}>
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={styles.card}
          style={{ backgroundColor: service.backgroundColor }} // Use background color instead
        >
          <h3 className={styles.title}>{service.title}</h3>
          <p className={styles.description}>{service.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Services;