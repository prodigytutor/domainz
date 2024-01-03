import  Link  from "next/link";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Manage all your&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>web assets&nbsp;</h1>
				<br />
				<h1 className={title()}>
					in one central location.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Domains, Websites, APIs, CDN, Data Stores		</h2>
			</div>
			<Link href="/dashboard">Take me to my dashboard</Link>
		

			
		</section>
	);
}
