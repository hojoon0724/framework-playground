export default function Snippets({ text }) {
  return (
    <div className="snippets flex flex-col">
      <h1>Snippets</h1>
      <p>
        How to add custom snippets
        <code> cmd + ,</code> ={'>'} {'"'}configure snippets{'"'}{' '}
      </p>
    </div>
  );
}
