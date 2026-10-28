// Import the CSS module. "styles" is an object: styles.card, styles.name
// ...
import styles from './StudentCard.module.css';
// Import the Badge component (it uses inline styles).
import Badge from './Badge.jsx';
 
// Props are destructured in the brackets.
// program = 'BSCS' is a DEFAULT value: it is used when no program is
// sent.
function StudentCard({ name, program = 'BSCS', cgpa, email }) {
  return (
    // className={styles.card} uses the class from the CSS module.
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.program}>{program}</p>
      {/* Conditional rendering: if cgpa exists show the Badge,
          otherwise show a message. */}
      {cgpa ? (
        <p>
          CGPA: {cgpa} <Badge cgpa={cgpa} />
        </p>
      ) : (
        <p className={styles.missing}>CGPA not added yet</p>
      )}
      <p className={styles.email}>{email}</p>
    </div>
  );
}
 
export default StudentCard;
