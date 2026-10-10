import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "News Dashboard",
    description: "A dashboard for the latest news and updates.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
