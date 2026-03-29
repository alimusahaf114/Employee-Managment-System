const employees = [
  {
    id: 1,
    firstName: "Ahmed",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix login bug",
        description: "Resolve login issue on mobile devices",
        date: "2026-03-28",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update UI",
        description: "Improve dashboard UI design",
        date: "2026-03-25",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API integration",
        description: "Integrate payment gateway API",
        date: "2026-03-20",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    firstName: "Hassan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create landing page",
        description: "Design responsive landing page",
        date: "2026-03-28",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix navbar",
        description: "Resolve navbar responsiveness issue",
        date: "2026-03-24",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy site",
        description: "Deploy project on server",
        date: "2026-03-22",
        category: "DevOps"
      }
    ]
  },
  {
    id: 3,
    firstName: "Ali",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database schema",
        description: "Design MongoDB schema",
        date: "2026-03-28",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug fixing",
        description: "Fix reported bugs",
        date: "2026-03-23",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Performance optimization",
        description: "Optimize API performance",
        date: "2026-03-21",
        category: "Backend"
      }
    ]
  },
  {
    id: 4,
    firstName: "Bilal",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write tests",
        description: "Create unit tests for APIs",
        date: "2026-03-28",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix UI bugs",
        description: "Resolve styling issues",
        date: "2026-03-24",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Server setup",
        description: "Configure production server",
        date: "2026-03-20",
        category: "DevOps"
      }
    ]
  },
  {
    id: 5,
    firstName: "Zain",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Content writing",
        description: "Write blog content",
        date: "2026-03-28",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "SEO optimization",
        description: "Improve website SEO",
        date: "2026-03-23",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Email campaign",
        description: "Launch email campaign",
        date: "2026-03-21",
        category: "Marketing"
      }
    ]
  }
];

const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123"
};
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};