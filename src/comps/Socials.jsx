import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Mail from "@mui/icons-material/Mail";

export const Socials = () => {
  return (
    <div className="socials">
      <a target="_blank" href="https://www.linkedin.com/in/zahravasanji/">
        <LinkedInIcon />
      </a>
      <a target="_blank" href="https://github.com/zedvas">
        <GitHubIcon />
      </a>
      <a target="_blank" href="https://github.com/zedvas">
        <Mail/>
      </a>
    </div>
  );
};
