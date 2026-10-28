// A wrapper component. "children" is a special prop:
// it is everything written BETWEEN <Section> and </Section>.
function Section({ heading, children }) {
  return (
    <section>
      <h2>{heading}</h2> {/* the title of the section */}
      {children} {/* the content that the parent put inside */}
    </section>
  );
}
 
export default Section;
