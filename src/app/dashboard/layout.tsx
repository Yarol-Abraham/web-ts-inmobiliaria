import Footer from "./footer";
import Header from "./header";

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main>
        
        <Header />

        {children}

        <Footer />
      </main>
    )
  }