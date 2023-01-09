import bcrypt from "bcryptjs";

const users = [
  {
    name: "Administrador",
    email: "admin@example.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
    telefono: "99999999",
    direccion: "direccion de prueba",
    rut: "20.000.000-2",
  },
  {
    name: "User",
    email: "user@example.com",
    password: bcrypt.hashSync("password", 10),
    telefono: "99999999",
    direccion: "direccion de prueba",
    rut: "20.000.000-3",
  },
];

export default users;