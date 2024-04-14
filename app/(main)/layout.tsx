import Sidebar from "@/components/Sidebar";
import ".././globals.css";
import MobileHeader from "@/components/MobileHeader";
import { ClerkProvider } from "@clerk/nextjs";

interface layoutProps {
  children: React.ReactNode;
}
const layout = ({ children }: layoutProps) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <MobileHeader />
          <Sidebar className="hidden lg:flex" />
          <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
            <div className="bg-red-500 h-full">{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default layout;
