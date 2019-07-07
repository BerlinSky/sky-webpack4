import styles from "./app.module.scss";
import { formInput } from "./Forms/input-form";
import { additionalInfo } from "./Forms/additional-input";
import { userProfile } from "./user-profile";

const homeCompMap = [
  {
    "id": "1000",
    "composer": formInput
  },
  {
    "id": "2000",
    "composer": additionalInfo
  }
];

const renderedComponents = userProfile.components.map((compId) => {
  const item = homeCompMap.find((comp) => comp.id === compId)
  return item.composer;
}).reduce((html , item) => html + item, "");

export const homePage = () => {
  return `
  <div class=${styles.home}>
    ${renderedComponents}
  </div>
  `
}

