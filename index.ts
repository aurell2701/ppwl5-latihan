import { Elysia } from "elysia";

/* =========================
   TYPES
========================= */
interface User {
  id: number;
  name: string;
  role: string;
}

/* =========================
   MODEL
========================= */
class UserModel implements User {
  id: number;
  name: string;
  role: string;

  constructor(data: User) {
    this.id = data.id;
    this.name = data.name;
    this.role = data.role;
  }

  get displayName() {
    return `${this.name} (${this.role})`;
  }
}

/* =========================
   REPOSITORY
========================= */
const userRepository = {
  async findAll(): Promise<UserModel[]> {
    const data: User[] = [
      { id: 1, name: "Leo", role: "Admin" },
      { id: 2, name: "Budi", role: "User" },
      { id: 3, name: "Sinta", role: "Editor" }
    ];

    return data.map(user => new UserModel(user));
  }
};

/* =========================
   SERVICE
========================= */
const userService = {
  async getAllUsers(): Promise<UserModel[]> {
    return await userRepository.findAll();
  }
};

/* =========================
   VIEW (SSR TEMPLATE)
========================= */
const userView = (users: UserModel[]) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>User List</title>
  <link href="/css/style.css" rel="stylesheet">
</head>
<body class="bg-gray-100 min-h-screen p-10">

  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold text-blue-600 mb-6">
      User Management (All in One File)
    </h1>

    <div class="grid gap-4">
      ${users.map(user => `
        <div class="bg-white shadow-md rounded-xl p-4">
          <h2 class="text-lg font-semibold">${user.displayName}</h2>
          <p class="text-sm text-gray-500">ID: ${user.id}</p>
        </div>
      `).join("")}
    </div>
  </div>

</body>
</html>
`;

/* =========================
   UTILS
========================= */
const htmlResponse = (html: string, status = 200) => {
  return new Response(html, {
    status,
    headers: {
      "Content-Type": "text/html"
    }
  });
};

/* =========================
   ROUTE + SERVER
========================= */
const app = new Elysia()
  .get("/", async () => {
    const users = await userService.getAllUsers();
    return htmlResponse(userView(users));
  });

app.listen(3000);

console.log("Server running at http://localhost:3000");