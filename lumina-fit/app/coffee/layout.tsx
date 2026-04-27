import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Curator's Library — コーヒーサブスクリプション",
  description:
    '世界中から厳選された最高級の豆を、ご注文に合わせて焙煎。ロースタリーからあなたのお手元へ直接お届けします。',
};

export default function CoffeeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0"
        rel="stylesheet"
      />
      <div
        style={{
          background: '#fcf9f4',
          color: '#1c1c19',
          fontFamily: "'Work Sans', sans-serif",
          fontWeight: 400,
          lineHeight: 1.5,
        }}
      >
        {children}
      </div>
    </>
  );
}
