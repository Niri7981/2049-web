import PermissionSpirit from "@/components/PermissionSpirit";
import AuthoritySection from "@/components/AuthoritySection";
import BoundedAuthoritySection from "@/components/BoundedAuthoritySection";
import ScrollRuler from "@/components/ScrollRuler";
import MembersSection from "@/components/MembersSection";
import ControlSection from "@/components/ControlSection";
import ActivitySection from "@/components/ActivitySection";
import PermissionLayerSection from "@/components/PermissionLayerSection";
import ClosingSection from "@/components/ClosingSection";
import SiteNavigation from "@/components/SiteNavigation";
import HeroContents from "@/components/HeroContents";
import GetStartedSection from "@/components/GetStartedSection";
import SecuritySection from "@/components/SecuritySection";
import DocsSection from "@/components/DocsSection";
import RoadmapSection from "@/components/RoadmapSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <ScrollRuler />
      <main id="content" tabIndex={-1}>
        <section className="first-screen" id="top" aria-label="Economic permission for autonomous agents">
          <div className="editorial-sheet">
            <SiteNavigation />
            <HeroContents />

            <div className="intro-copy" id="concept">
              <p>
                Give agents bounded spending authority without handing over
                unrestricted wallet control.
              </p>
              <p>
                Yosh checks whether a purchase fits the authority you granted
                before payment can begin.
              </p>
            </div>
          </div>
          <PermissionSpirit />
        </section>
        <div className="continuation-sheet">
          <AuthoritySection />
          <BoundedAuthoritySection />
          <MembersSection />
          <ControlSection />
          <GetStartedSection />
          <SecuritySection />
          <ActivitySection />
          <PermissionLayerSection />
          <DocsSection />
          <RoadmapSection />
          <FAQSection />
          <ClosingSection />
        </div>
      </main>
    </>
  );
}
