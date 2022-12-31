import bcrypt from "bcryptjs";

const users = [
  {
    name: "Administrador",
    email: "admin@example.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@example.com",
    password: bcrypt.hashSync("password", 10),
  },
];

export default users;
