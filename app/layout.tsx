import "./globals.css";

export const metadata = {
  title: "Knitnet - AI Interview Platform",
  description: "Ace Your Next Interview With AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}