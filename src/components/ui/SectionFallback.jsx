import Container from "./Container";

function SectionFallback() {
  return (
    <div
      aria-label="Chargement de la section"
      className="section-padding"
      role="status"
    >
      <Container>
        <div
          aria-hidden="true"
          className="glass-panel mx-auto h-32 max-w-3xl animate-pulse bg-[var(--app-surface)]"
        />
      </Container>
    </div>
  );
}

export default SectionFallback;
