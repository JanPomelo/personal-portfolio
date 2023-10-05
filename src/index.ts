import "./style.css";

const knowledgeDivs: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(
  "outerKnowledgeWrapper"
) as HTMLCollectionOf<HTMLElement>;

const innerKnowledgeDivs: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(
  "innerKnowledgeWrapper"
) as HTMLCollectionOf<HTMLElement>;

for (let i = 0; i < knowledgeDivs.length; i++) {
  const rotateBack = () => {
    innerKnowledgeDivs[i].style.transform = "rotateY(0deg)";
    knowledgeDivs[i].removeEventListener("touchstart", rotateBack);
    knowledgeDivs[i].addEventListener("touchstart", rotateFirst);
  };

  const rotateFirst = () => {
    innerKnowledgeDivs[i].style.transform = "rotateY(180deg)";
    knowledgeDivs[i].removeEventListener("touchstart", rotateFirst);
    knowledgeDivs[i].addEventListener("touchstart", rotateBack);
  };

  knowledgeDivs[i].addEventListener("touchstart", rotateFirst);
}
