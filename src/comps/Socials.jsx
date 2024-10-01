import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Mail from "@mui/icons-material/Mail";

export const Socials = () => {
  return (
    <div className="socials">
      <a target="_blank" href="https://www.linkedin.com/in/zahravasanji/">
        <LinkedInIcon sx={{ "&:hover": { color: "#403d39" } }}/>
      </a>
      <a target="_blank" href="https://github.com/zedvas">
        <GitHubIcon sx={{ "&:hover": { color: "#403d39" } }}/>
      </a>
      <a target="_blank" href="mailto:zahravasanji4@hotmail.com">
        <Mail sx={{ "&:hover": { color: "#403d39" } }}/>
      </a>
    </div>
  );
};
