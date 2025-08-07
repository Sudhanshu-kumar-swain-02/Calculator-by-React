import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({onbuttonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "/",
    "6",
    "5",
    "4",
    "-",
    "0",
    "8",
    "9",
    "+",
    "7",
    "3",
    "*",
    "%",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttonName) => (
      <button
  key={buttonName}
  className={styles.button}
  onClick={() => onbuttonClick(buttonName)}
>
  {buttonName}
</button>

      ))}
    </div>
  );
};
export default ButtonContainer;