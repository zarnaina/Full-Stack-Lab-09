// A functional component is just a JavaScript function that returns JSX.
// The name MUST start with a capital letter (Header, not header).
// "props" are the inputs. We take them apart in the brackets: { title,
// subtitle }.
function Header({ title, subtitle }) {
  return (
    // className is the JSX word for the HTML word "class".
    <header className="header">
      <h1>{title}</h1> {/* {title} puts the value of the prop here */}
      <p>{subtitle}</p> {/* {subtitle} too */}
    </header>
  );
}
 
// "export default" lets other files import this component.
export default Header;
