import Footer from "./footer";
import Header from "./header";

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="m-auto flex flex-col  justify-center">
        
        <Header />

        {children}

        <Footer />
      </main>
    )
  }