import styles from "./app.module.scss";

export const noAccessPage = () => {
  return `
    <div class=${styles.noAccess}>
      <h3>Sorry, you don't have access to the site.</h3>
    </div>
  `
}

