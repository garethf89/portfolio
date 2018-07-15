import Home from './Containers/Home/Home';
import Contact from './Containers/Contact/Contact';

const routes = [
    {
      path: "/contact",
      component: Contact
    },
    {
      path: "/",
      exact: true,
      component: Home
    }
];

export default routes;