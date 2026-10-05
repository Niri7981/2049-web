export default function SecuritySection() {
  return (
    <section className="essay-section security-section" id="security" aria-labelledby="security-title">
      <div className="editorial-pair editorial-inset gateway-composition">
        <div className="section-copy">
          <h2 className="editorial-title" id="security-title">Permission<br />stays local.</h2>
          <p className="editorial-body">The agent may request a registered resource. The wallet secret stays in macOS Keychain; the local backend controls validation, authority reservation, signing, and purchase state.</p>
          <p className="section-followup"><a className="text-link" href="#docs">Read the boundaries</a></p>
        </div>
        <div className="security-boundaries">
          <p className="quiet-label">Through MCP, the agent cannot</p>
          <ul><li>Supply an arbitrary transaction.</li><li>Choose arbitrary payment terms.</li><li>Export the wallet key.</li><li>Change spending controls.</li></ul>
          <p className="quiet-note">These are local implementation boundaries, not an independent security audit or protection against every compromised local process.</p>
        </div>
      </div>
    </section>
  );
}
