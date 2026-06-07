export const metadata = {
  title: "Admin - Prawitech",
  description: "Prawitech Admin Panel",
};

export default function AdminLayout({ children }) {
  return (
    <main className="flex-1">{children}</main>
  );
}
