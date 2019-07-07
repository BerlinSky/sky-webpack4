import styles from "./form.module.scss";

export const formInput = `
  <div class=${styles.infoForm}>
    <h3>Info Form</h3>

    <form>
      <ul class="${styles.formWrapper}">
        <li class="${styles.formRow}">
          <label for="firsName">First Name</label>
          <input type="text" id="firsName">
        </li>
        <li class="${styles.formRow}">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName">
        </li>
        <li class="${styles.formRow}">
          <label for="businessName">Business Name</label>
          <input type="text" id="businessName">
        </li>
        <li class="${styles.formRow}">
          <label for="clientId">Client ID</label>
          <input type="text" id="clientId">
        </li>
        <li class="${styles.formRow}">
          <label for="taxId">Tax ID</label>
          <input type="text" id="taxId">
        </li>
        <li class="${styles.formRow}">
          <label for="email">Email Address</label>
          <input type="email" id="email">
        </li>
        <li class="${styles.formRow}">
          <button type="submit">Submit</button>
        </li>
      </ul>
    </form>
  </div>
`
