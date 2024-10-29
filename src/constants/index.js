const adminMenu = [
  {
    title: "Dashboard",
    path: "/",
  },
  {
    title: "User Management",
    path: "/user-management",
  },
  {
    title: "Invoices",
    path: "/invoices",
  },
];

const usersData = [
  {
    name: "John Doe",
    edit: true,
    delete: true,
    create: true,
    read: true,
  },
  {
    name: "Peter",
    edit: true,
    delete: false,
    create: false,
    read: true,
  },
  {
    name: "John Doe",
    edit: true,
    delete: true,
    create: true,
    read: true,
  },
  {
    name: "John Doe",
    edit: true,
    delete: true,
    create: true,
    read: true,
  },
  {
    name: "John Doe",
    edit: true,
    delete: false,
    create: true,
    read: false,
  },
];

const notificationsData = [
  {
    title: "Welcome to Our Platform!",
    description:
      "Thank you for signing up. We're excited to have you on board!",
  },
  {
    title: "New Feature Alert!",
    description:
      "We've launched a new feature that allows you to customize your dashboard. Check it out now!",
  },
  {
    title: "Account Security Notice",
    description:
      "We detected a new login from a different device. If this wasn't you, please change your password immediately.",
  },
];

const recentInvoiceData = [
  {
    invoiceName: "ABCD-123",
    time: "14:35PM",
    amount: "15232",
  },
  {
    invoiceName: "EFGH-456",
    time: "16:32PM",
    amount: "23545",
  },
  {
    invoiceName: "JKLM-789",
    time: "15:31PM",
    amount: "40123",
  },
];

export { adminMenu, usersData, notificationsData, recentInvoiceData };
