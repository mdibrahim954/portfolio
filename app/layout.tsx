// app/layout.tsx ✅ — শুধু HTML shell
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* ❌ এখান থেকে Navbar/Footer সরিয়ে দিন */}
        {children}
      </body>
    </html>
  );
}