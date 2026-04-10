import Header from '@/components/layout/Header';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import ScrollRevealInit from '@/components/ui/ScrollRevealInit';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-gray-800 bg-white dark:text-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <ScrollRevealInit />
      {children}
      <WhatsAppFloat />
    </div>
  );
}
