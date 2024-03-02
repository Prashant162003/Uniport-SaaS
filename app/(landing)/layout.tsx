import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="h-full bg-[#111827] overflow-auto">
			<div className="mx-auto max-w-screen-xl h-full w-full">
				{children}
			</div>
        </main>
	);
};

export default LandingLayout;
