"use client";
import Footer from "../components/layout/footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page content */}
      <main className="flex-1 pb-20">
        {children}
      </main>

      {/*  Footer */}
      <Footer />
    </div>
  );
}