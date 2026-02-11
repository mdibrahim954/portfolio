import { container, section } from "@/lib/settings";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={cn(section, `border-t bg-black py-[40px] text-white`)}>
      <div className={cn(container, `mx-auto px-4 py-0`)}>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">Naim Bhuiya</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Building modern websites with React, Next.js & Tailwind.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Get in touch</h4>
            <p className="text-sm text-muted-foreground">
              Email: hello@yourdomain.com
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Available for freelance projects.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Naim Bhuiya. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="#" className={"hover:text-white"}>
              LinkedIn
            </Link>
            <Link href="#" className={"hover:text-white"}>
              GitHub
            </Link>
            <Link href="#" className={"hover:text-white"}>
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
