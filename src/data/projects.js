import inventoryImg from "../assets/projects/inventory.png";
import employeeImg from "../assets/projects/emplooyes.png";
import taskImg from "../assets/projects/task.png";

const projects = [
  {
    id: 1,
    image: inventoryImg,
    title: "Inventory Management Platform",
    description:
      "Full stack inventory system for product control, stock management and REST API integration.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Product CRUD with validation",
      "REST API architecture",
      "Inventory and stock control"
    ],
    github: "https://github.com/IvanD-js/Gestor-de-inventario-de-productos",
    demo: "#",
    status: "Completed"
  },
  {
    id: 2,
    image: employeeImg,
    title: "Employee Management System",
    description:
      "Administrative web application for employee registration, update and management using Java technologies.",
    stack: ["Java", "Spring Boot", "JSP", "MySQL"],
    features: [
      "Employee CRUD",
      "Server-side MVC structure",
      "MySQL persistence"
    ],
    github: "https://github.com/IvanD-js/Sistema-Gestor-De-Empleados.git",
    demo: "#",
    status: "Completed"
  },
  {
    id: 3,
    image: taskImg,
    title: "Task Management System",
    description:
      "Desktop task manager focused on structured task organization and productivity.",
    stack: ["Java", "JavaFX", "Spring Boot", "MySQL"],
    features: [
      "Task creation and edition",
      "Status tracking",
      "Desktop interface with JavaFX"
    ],
    github: "https://github.com/IvanD-js/Sistema-Gestor-De-Tareas.git",
    demo: "#",
    status: "Completed"
  },
   {
    id: 4,
    image: taskImg,
    title: "Auth service Api",
    description:
      "Auth service api.",
    stack: ["Java", "JWT", "Spring Boot", "MySQL", "Spring Security", "PostgreSQL"],
    features: [
      "Register users",
      "Login users",
      "Authentication and authorization",
      "Token generation and validation",
      "Password hashing and security"
    ],
    github: "https://github.com/IvanD-js/auth-service-api.git",
    demo: "#",
    status: "Completed"
  }
];

export default projects;