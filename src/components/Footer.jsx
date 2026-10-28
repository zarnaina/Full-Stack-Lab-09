// A small component that shows the footer. It needs one prop: name.
function Footer({ name }) {
  // any JavaScript can run BEFORE the return
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      {/* {year} and {name} are JavaScript expressions inside JSX */}
      <p>
        Lab 11 | React Basics | {name} | {year}
      </p>
    </footer>
  );
}
 
export default Footer;
