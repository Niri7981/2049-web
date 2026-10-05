import PermissionSpirit from "@/components/PermissionSpirit";
import AuthoritySection from "@/components/AuthoritySection";
import BoundedAuthoritySection from "@/components/BoundedAuthoritySection";
import ScrollRuler from "@/components/ScrollRuler";
import MembersSection from "@/components/MembersSection";
import ControlSection from "@/components/ControlSection";
import ActivitySection from "@/components/ActivitySection";
import PermissionLayerSection from "@/components/PermissionLayerSection";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#product">Skip to content</a>
      <ScrollRuler />
      <main>
        <section className="first-screen" id="product" aria-label="Economic permission for autonomous agents">
          <div className="editorial-sheet">
            <div className="sheet-mark" aria-label="2049">
              <span className="mark-dot" aria-hidden="true" />
              <span>2049</span>
            </div>

            <h1 className="permission-heading">
              <span>Economic</span>
              <span>permission</span>
              <span>for</span>
              <span>autonomous</span>
              <span>agents</span>
            </h1>

            <div className="intro-copy" id="concept">
              <p>
                2049 is an economic permission layer for autonomous agents — giving
                them bounded authority without exposing your wallet.
              </p>
              <p>
                Define what an agent may spend, where it may act, and when execution
                should stop — before the action ever reaches your wallet.
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
          <ActivitySection />
          <PermissionLayerSection />
          <ClosingSection />
        </div>
      </main>
    </>
  );
}
