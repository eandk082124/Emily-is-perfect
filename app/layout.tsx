export const metadata = {
  title: "For Emily 💕",
  description: "A special message for Emily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
