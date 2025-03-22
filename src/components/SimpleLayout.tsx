
import { ReactNode } from "react";

interface SimpleLayoutProps {
  children: ReactNode;
}

export default function SimpleLayout({ children }: SimpleLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <h1 className="text-xl font-bold text-center">Personal Data Form</h1>
        </div>
      </header>
      <main className="flex-grow pt-6 pb-12">
        {children}
      </main>
      <footer className="bg-white dark:bg-gray-800 border-t py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Simple Data Collection Form
          </p>
        </div>
      </footer>
    </div>
  );
}
