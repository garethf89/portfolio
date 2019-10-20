import Home from './Containers/Home/Home';
import Contact from './Containers/Contact/Contact';
import Work from './Containers/Work/Work';

const routes = [
    {
      path: "/BA",
      component: Work
    },
    {
      path: "/CMC",
      component: Work
    },
    {
      path: "/Arup",
      component: Work
    },
    {
      path: "/J2O",
      component: Work
    },
    {
      path: "/HomeGroup",
      component: Work
    },
    {
      path: "/Happiest",
      component: Work
    },
    {
      path: "/Apps",
      component: Work
    },
    {
      path: "/Anglian",
      component: Work
    },
    {
      path: "/Barspot",
      component: Contact
    },
    {
      path: "/",
      exact: true,
      component: Home
    }
];

//Dynamic Routes for Work items
// WorkData.forEach(function(work){
//   const url = '/' + work.url.toString();
//   routes.unshift({path:url, component: Work});
// });

export default routes;