import inventoryImg from "../assets/projects/inventory.png";
import employeeImg from "../assets/projects/emplooyes.png";
import taskImg from "../assets/projects/task.png";
import { image } from "framer-motion/client";


const projects = [

  {
    id:1,
    image: inventoryImg,
    title:"Inventory Management System",

    description:
      "Full stack inventory platform with CRUD operations and REST API.",

    stack:[
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],

    github:
      "https://github.com/IvanD-js/Gestor-de-inventario-de-productos",

    demo:"#"
  },

  {
    id:2,
    image: employeeImg,
    title:"Employee Management System",

    description:
      "Web application for employee administration using Java and Spring Boot.",

    stack:[
      "Java",
      "Spring Boot",
      "JSP",
      "MySQL"
    ],

    github:
        "https://github.com/IvanD-js/Sistema-Gestor-De-Empleados.git",

    demo:"#"
  },

  {
    id:3,
    image: taskImg,
    title:"Task management system",

    description:
      "System that allows you to manage tasks, using JavaFX and Springboot.",

    stack:[
      "Java",
      "Swing",
      "JavaFX",
      "MySQL"
    ],

    github:
        "https://github.com/IvanD-js/Sistema-Gestor-De-Tareas.git",

    demo:"#"
  }

];

export default projects;