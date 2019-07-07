import styles from "./app.module.scss";
import { formInput } from "./Forms/input-form";
import { additionalInfo } from "./Forms/additional-input";

export const homePage = () => {
  return `
  <div class=${styles.home}>
    ${formInput}
    ${additionalInfo}
  </div>
  `
}

