import "./style.css";

const knowledgeDivs: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(
  "outerKnowledgeWrapper"
) as HTMLCollectionOf<HTMLElement>;

const innerKnowledgeDivs: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(
  "innerKnowledgeWrapper"
) as HTMLCollectionOf<HTMLElement>;


/*
for (let i = 0; i < knowledgeDivs.length; i++) {
  const rotateBack = () => {
    innerKnowledgeDivs[i].style.transform = "rotateY(0deg)";
    knowledgeDivs[i].removeEventListener("click", rotateBack);
    knowledgeDivs[i].addEventListener("click", rotateFirst, { passive: true });
    
  };
  const rotateFirst = () => {
    innerKnowledgeDivs[i].style.transform = "rotateY(180deg)";
    knowledgeDivs[i].removeEventListener("click", rotateFirst);
    knowledgeDivs[i].addEventListener("click", rotateBack, { passive: true });
  };


  knowledgeDivs[i].addEventListener("touchstart", rotateFirst, { passive: true });
}
*/