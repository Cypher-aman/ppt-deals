import Header from '@/components/layouts/Header';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MarketingLayout;
