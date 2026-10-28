// Import the global CSS. Vite adds it to the page.
import './index.css';
// Import our own components (each one is a file).
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Section from './components/Section.jsx';
import StudentCard from './components/StudentCard.jsx';
// Import the data array (a named import uses { }).
import { students } from './data/students.js';
 
// The App component: the top of our component tree.
function App() {
  // a normal JavaScript variable
  const course = 'Full Stack Web Development Lab';
  const total = students.length; // how many students we have
 
  // A component returns JSX. We need ONE parent element, so we use <> </>
  // (a Fragment).
  return (
    <>
      {/* Props are written like HTML attributes. Text uses "quotes",
          other values use { }. */}
      <Header title="Student Cards" subtitle={course} />
 
      <main className="container">
        {/* Section gets the heading as a prop; everything inside
            becomes its "children". */}
        <Section heading="Our Students">
          <p>Total students: {total}</p>
 
          {/* if / else inside JSX is written with a ternary:  condition
              ? yes : no */}
          {total === 0 ? (
            <p>No students yet.</p>
          ) : (
            <div className="grid">
              {/* map() turns each student object into one StudentCard.
                  key must be unique: React uses it to track each
                  item in the list. */}
              {students.map((s) => (
                <StudentCard
                  key={s.id}
                  name={s.name}
                  program={s.program}
                  cgpa={s.cgpa}
                  email={s.email}
                />
              ))}
            </div>
          )}
        </Section>
      </main>
 
      <Footer name="Raja Faisal Umar" />
    </>
  );
}
 
// Export it so main.jsx can import it.
export default App;
