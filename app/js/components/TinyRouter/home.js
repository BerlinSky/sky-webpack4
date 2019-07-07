import styles from "./app.module.scss";

export const homePage = () => {
  return `
  <div class=${styles.home}>
    <div class=${styles.infoForm}>
      <h3>Info Form</h3>
    </div>
    <div class=${styles.additionalInfo}>
      <h3>Additional Info</h3>
    </div>
  </div>
  `
}

