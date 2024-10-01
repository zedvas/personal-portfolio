import { Card } from "./Card";

export const Projects = () => {
  return (
    <div>
      <Card
        fullStack={true}
        imageSrc={"/holidough.png"}
        title={"HoliDough"}
        description={
          "A full-stack holiday budgeting application that allows users to manage, track, and predict expenses, with graphs for visual budget tracking"
        }
        tools={[
          "React",
          "Redux",
          "Node.js",
          "Express.js",
          "Axios",
          "MySQL",
          "Joi",
          "SASS",
          "Material UI",
        ]}
        githubLink="https://github.com/zedvas/travel-tally"
        githubLinkBackend="https://github.com/zedvas/travel-tally-back-end"
        demoLink="https://holidough.uk/"
      />
      <Card
        imageSrc={"/rentAPet2.png"}
        title={"Rent-A-Pet"}
        description={
          "A mock e-commerce platform in React, featuring sorting and filtering capabilities using JavaScript array methods and dynamic calculations using data held in state"
        }
        tools={["JavaScript", "React"]}
        githubLink="https://github.com/zedvas/shopping-cart"
        demoLink="https://rent-a-pet.netlify.app/"
      />
      <Card
        imageSrc={"/simpsons2.png"}
        title={"Simpsons Quotes"}
        description={
          "A React application that fetches and displays quotes from The Simpsons API, enabling users to search, like, and delete quotes while utilizing React Hooks"
        }
        tools={["React Hooks", "Axios"]}
        githubLink="https://github.com/zedvas/simpsons"
        demoLink="https://simpsons-quotes-zv.netlify.app/"
      />
      <Card
        imageSrc={"/altaloma.png"}
        title={"AltaLoma"}
        description={
          "A React-based tribute app with dynamic component rendering, client-side routing with React Router and custom SASS styling"
        }
        tools={["React", "React Router", "Material UI", "SASS", "Vite"]}
        githubLink="https://github.com/zedvas/altaloma-frontend"
        demoLink="https://altaloma.netlify.app/"
      />
      <Card
        imageSrc={"/weather.png"}
        title={"Weather App"}
        description={
          "A vanilla JavaScript web application utilizing the Fetch and Geolocation APIs to get and display weather data from the OpenWeatherMap API. HTML nodes have been created and injected by dynamic DOM manipulation."
        }
        tools={[
          "Vanilla JavaScript",
          "DOM Manipulation",
          "Geolocation API",
          "Fetch API",
          "SASS",
        ]}
        githubLink="https://github.com/zedvas/weatherApp"
        demoLink="https://weather-zv.netlify.app/"
      />
      <Card
        imageSrc={"/julyliebe.png"}
        title={"JulyLiebe Homage"}
        description={
          "A static tribute webpage utilizing semantic HTML and SASS to create a mobile-first responsive design"
        }
        tools={["HTML", "CSS", "SASS"]}
        githubLink="https://github.com/zedvas/julyliebe2"
        demoLink="https://julyliebe.netlify.app/"
      />
    </div>
  );
};
