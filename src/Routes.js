import Home from './Containers/Home/Home';
import Contact from './Containers/Contact/Contact';
import Work from './Containers/Work/Work';
import {WorkData} from './Data/WorkData';

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

//Dynamic Routes for Work items
WorkData.forEach(function(work){
  const url = '/' + work.url.toString();
  routes.unshift({path:url, component: Work});
});

export default routes;