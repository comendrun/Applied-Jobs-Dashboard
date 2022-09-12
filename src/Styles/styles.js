import work from "../Assets/images/icon-work.svg";
import exercise from "../Assets/images/icon-exercise.svg";
import play from "../Assets/images/icon-play.svg";
import study from "../Assets/images/icon-study.svg";
import social from "../Assets/images/icon-social.svg";
import selfCare from "../Assets/images/icon-self-care.svg";

export const styles = [
  {
    card: {
      backgroundColor: "hsl(15, 100%, 70%)",
    },
    cardHeader: {
      backgroundImage: `url(${work})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundSize: "auto",
    },
  },
  {
    card: {
      backgroundColor: "hsl(195, 74%, 62%)",
    },
    cardHeader: {
      backgroundImage: `url(${play})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundSize: "auto",
    },
  },
  {
    card: {
      backgroundColor: "hsl(348, 100%, 68%)",
    },
    cardHeader: {
      backgroundImage: `url(${study})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundSize: "auto",
    },
  },
  {
    card: {
      backgroundColor: "hsl(145, 58%, 55%)",
    },
    cardHeader: {
      backgroundImage: `url(${exercise})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundSize: "auto",
    },
  },
  {
    card: {
      backgroundColor: "hsl(264, 64%, 52%)",
    },
    cardHeader: {
      backgroundImage: `url(${social})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundSize: "auto",
    },
  },
  {
    card: {
      backgroundColor: "hsl(43, 84%, 65%)",
    },
    cardHeader: {
      backgroundImage: `url(${selfCare})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundSize: "auto",
    },
  },
];

export const randomStyle = () => {
  const randomNum = Math.floor(Math.random() * 6);
  return styles[randomNum];
};

// $primaryLightRedWork: "hsl(15, 100%, 70%)",
// $primarySoftBluePlay: "hsl(195, 74%, 62%)",
// $primaryLightRedStudy: "hsl(348, 100%, 68%)",
// $primaryLimeGreenExercise: "hsl(145, 58%, 55%)",
// $primaryVioletSocial: "hsl(264, 64%, 52%)",
// $primarySoftOrangeSelfCare: "hsl(43, 84%, 65%)",
