import { homePage } from "./components/TinyRouter/home"
import { clients } from "./components/TinyRouter/clients"

const contentDiv = document.getElementById('content');

// const home = `
//   <h3>Home Page</h4>
//  `

const services = () => {`
  <h3>Home Page</h4>
 `
}

const help = () => {`
  <h3>Home Page</h4>
 `
}

const routes = {
  '/': homePage(),
  '/home': homePage(),
  '/clients': clients,
  '/services': services,
  '/help': help,
};

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
}

// const onNavItemClick = (pathName) => {
//   window.history.pushState({}, pathName, window.location.origin + pathName);
//   contentDiv.innerHTML = routes[pathName];
// }

contentDiv.innerHTML = routes[window.location.pathname];
