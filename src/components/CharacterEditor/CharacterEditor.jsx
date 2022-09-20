import React from "react";
import { defaultClothesColor, defaultSkinColor } from "../../../constants";
import Charecter from "../Charecter";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import styles from "./CharacterEditor.module.css";
export default function CharacterEditor() {
  const [body, setBody] = React.useState(0);
  const [head, setHead] = React.useState(0);
  const [face, setFace] = React.useState(0);
  const [accessory, setAccessory] = React.useState(0);
  const [skinColor, setSkinColor] = React.useState(defaultSkinColor);
  const [clothesColor, setClothesColor] = React.useState(defaultClothesColor);

  return (
    <main className={styles.characterEditor}>
      <div className={styles.perspectiveEffect}></div>

      <MaxWidthWrapper className={styles.maxWidthWrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Create your Avatar</h1>
          <p className={styles.description}>
            Customize your character's look and style using the controls below.
            What sort of adventure will you embark on?{" "}
          </p>
        </header>
        <div className={styles.controlColumn}></div>
      </MaxWidthWrapper>
      <div className={styles.characterWrapper}>
        <Charecter
          body={body}
          head={head}
          face={face}
          accessory={accessory}
          skinColor={skinColor}
          clothesColor={clothesColor}
        />
      </div>
    </main>
  );
}
