import { JuggleContainer } from "./JuggleContainer";

export const Skills = () => {
    const skills = ["react"]
  return (
    <>
      <p>-	JavaScript.ES6+.AJAX & API’s.REST and GraphQL.Animation (Greensock).Graphing (d3.js).Realtime (websockets and Socket.IO).OAuth.Next.JS
-	React.Material UI.ReduxRedux Toolkit
-	Testing: TypeScript, Cypress, Vitest, Vite
-	Node.js: Vanilla & Express.
-	Databases: SQL - MySQL, NoSQL - MongoDB with Mongoose.js, Redis, Firebase, GraphCMS/Hygraph
-	DevOps: Docker & Kubernetes, Vercel (inc. CI/CD), serverless (inc. Netlify). cPanel, Apache, XAMPP
-	CSS 3: Responsive design, Flexbox & CSS Grid, SASS, CSS frameworks, and Tailwind
-	HTML5: Semantically correct for accessibility and SEO.
</p>
      <JuggleContainer />
    </>
  );
};
