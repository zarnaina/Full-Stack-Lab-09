// A small coloured label. It uses INLINE STYLES: style={{ ... }}.
// The outer { } means "JavaScript here". The inner { } is a JavaScript
// object.
function Badge({ cgpa }) {
  // Decide the text and the colour from the cgpa value.
  let label = 'Average'; // default text
  let color = '#e67e22'; // orange
  if (cgpa >= 3.5) {
    label = 'Excellent'; // high cgpa
    color = '#0e8c4c'; // green
  } else if (cgpa >= 3.0) {
    label = 'Good'; // medium cgpa
    color = '#2f6fd6'; // blue
  }
 
  // CSS names in JSX are camelCase: background-color becomes
  // backgroundColor.
  const style = {
    backgroundColor: color, // the colour we chose above
    color: 'white', // text colour
    padding: '2px 10px', // space inside the badge
    borderRadius: '12px', // round corners
    fontSize: '0.8rem', // small text
    fontWeight: 'bold', // thick text
  };
 
  // show the label with the style
  return <span style={style}>{label}</span>;
}
 
export default Badge;
