import styles from "./form.module.scss";
import { userProfile } from "../user-profile";

const firstName = `
  <li class="${styles.formRow}">
    <label for="firsName">First Name</label>
    <input type="text" id="firsName">
  </li>
`;

export const lastName = `
  <li class="${styles.formRow}">
    <label for="lastName">Last Name</label>
    <input type="text" id="lastName">
  </li>
`;

export const businessName = `
  <li class="${styles.formRow}">
    <label for="businessName">Business Name</label>
    <input type="text" id="businessName">
  </li>
`;

export const clientId = `
  <li class="${styles.formRow}">
  <label for="clientId">Client ID</label>
  <input type="text" id="clientId">
  </li>
`;

export const taxId = `
  <li class="${styles.formRow}">
    <label for="taxId">Tax ID</label>
    <input type="text" id="taxId">
  </li>
`;

export const email = `
  <li class="${styles.formRow}">
    <label for="email">Email Address</label>
    <input type="email" id="email">
  </li>
`;

const formInputCompMap = [
  {
    "id": "1010",
    "composer": firstName
  },
  {
    "id": "1020",
    "composer": lastName
  },
  {
    "id": "1030",
    "composer": businessName
  },
  {
    "id": "1040",
    "composer": clientId
  },
  {
    "id": "1050",
    "composer": taxId
  },
  {
    "id": "1060",
    "composer": email
  }
];

// function findEntitledComponent(compId) {
//   return userProfile.components.find(((id) => id === compId));
// }

// const renderedComponents = formInputCompMap.reduce((html, comp) => {
//   if (findEntitledComponent(comp.id)) {
//     html + comp.composer
//   }
//   else {
//     html + "<br></br>"
//   }
// }, "");

const renderedComponents = userProfile.components.map((compId) => {
  const item = formInputCompMap.find((comp) => comp.id === compId)
  return (item) ? item.composer : "";
}).reduce((html, item) => html + item, "");

export const formInput = `
  <div class=${styles.infoForm}>
    <h3>Info Form</h3>
    <form>
      <ul class="${styles.formWrapper}">
        ${renderedComponents}

        <li class="${styles.formRow}">
          <button type="submit">Submit</button>
        </li>
      </ul>
    </form>
  </div>
`

