"use client";

import PermissionSpirit from "@/components/PermissionSpirit";
import PurchaseFlowSection from "@/components/PurchaseFlowSection";
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
import FAQPreviewSection from "@/components/FAQPreviewSection";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { sourceLinks } from "@/lib/links";
import DirectDownloadBar from "@/components/DirectDownloadBar";

export default function Home() {
  return <LanguageProvider><HomeContent /></LanguageProvider>;
}

function HomeContent() {
  const { t } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#content">{t.accessibility.skip}</a>
      <ScrollRuler />
      <main id="content" tabIndex={-1}>
        <section className="first-screen" id="top" aria-label={t.accessibility.hero}>
          <div className="editorial-sheet">
            <SiteNavigation />
            <HeroContents />

            <div className="intro-copy" id="concept">
              <div className="intro-download">
                <a className="intro-download-button" href={sourceLinks.download}><span aria-hidden="true">↓</span>{t.getStarted.downloadLabel}</a>
                <div className="intro-download-meta">
                  <span>{t.getStarted.downloadVersion}</span>
                  <span>{t.getStarted.downloadPlatform}</span>
                </div>
                <p className="intro-download-caveat">{t.getStarted.downloadCaveat}</p>
              </div>
              <div className="intro-explanation">
                <p>{t.hero.bodySecondary}</p>
                <p>{t.hero.bodyPrimary}</p>
              </div>
              <DirectDownloadBar />
            </div>
          </div>
          <PermissionSpirit />
        </section>
        <div className="continuation-sheet">
          <PurchaseFlowSection />
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
          <FAQPreviewSection />
          <ClosingSection />
        </div>
      </main>
    </>
  );
}
