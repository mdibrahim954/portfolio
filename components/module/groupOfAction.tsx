import { ibmPlexSans, info } from "@/lib/settings";
import { faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function GroupOfAction() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
      <Link
        href="#contact"
        className={`${ibmPlexSans.className} inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800`}
      >
        Let&apos;s Talk
      </Link>

      <Link
        href={`https://wa.me/${info.phone}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700">
          <FontAwesomeIcon icon={faMessage} />
        </span>
        WhatsApp
      </Link>

      <Link
        href="mailto:naimbhuiya@gmail.com"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        Email
      </Link>
    </div>
  );
}
