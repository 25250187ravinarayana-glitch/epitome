import dynamic from "next/dynamic";

// Dynamic imports for better performance
const LandingVideo = dynamic(
  () =>
    import("@/components/landing/landing-video").then(
      (mod) => mod.LandingVideo
    )
);

const EventsSection = dynamic(
  () =>
    import("@/components/events/events-section").then(
      (mod) => mod.EventsSection
    )
);

const RulesSection = dynamic(
  () =>
    import("@/components/rules/rules-section").then(
      (mod) => mod.RulesSection
    )
);

const SponsorsSection = dynamic(
  () =>
    import("@/components/sponsors/sponsors-section").then(
      (mod) => mod.SponsorsSection
    )
);

const MapSection = dynamic(
  () =>
    import("@/components/map/map-section").then((mod) => mod.MapSection)
);

const RegistrationSection = dynamic(
  () =>
    import("@/components/registration/registration-section").then(
      (mod) => mod.RegistrationSection
    )
);

const CoordinatorsSection = dynamic(
  () =>
    import("@/components/coordinators/coordinators-section").then(
      (mod) => mod.CoordinatorsSection
    )
);

export default function Home() {
  return (
    <main className="min-h-screen bg-st-black">
      <LandingVideo />
      <EventsSection />
      <RulesSection />
      {/*<SponsorsSection />*/}
      <MapSection />
      <RegistrationSection />
      <CoordinatorsSection />
      
      {/* Footer */}
      <footer className="bg-st-darker py-8 text-center">
        <p className="font-mono text-sm text-st-text-dim">
          © 2026 EPITOME. All rights reserved.
        </p>
        <p className="mt-2 font-mono text-xs text-st-text-dim">
          Made with 🔥 for strange events
        </p>
      </footer>
    </main>
  );
}
