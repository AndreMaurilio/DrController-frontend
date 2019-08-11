import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/pages/Login';
import DashBoard from '@/components/DashBoard';

import FloatCharts from '@/components/charts/FloatCharts';
import MorrisCharts from '@/components/charts/MorrisCharts';

import Forms from '@/components/Forms';
import FormsMaquete from '@/components/FormsMaquete';
import Tables from '@/components/Tables';

import Buttons from '@/components/ui-elements/Buttons';
import Grid from '@/components/ui-elements/Grid';
import Icons from '@/components/ui-elements/Icons';
import Notifications from '@/components/ui-elements/Notifications';
import Panels from '@/components/ui-elements/Panels';
import Typography from '@/components/ui-elements/Typography';

import Blank from '@/components/pages/Blank';
//import Login from '@/components/pages/Login';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        //{ path: '/public/login', name: 'Login', component: Login },

        { path: '/dashboard', name: 'DashBoard', component: DashBoard },

        { path: '/float', name: 'FloatCharts', component: FloatCharts },
        { path: '/morris', name: 'MorrisCharts', component: MorrisCharts },

        { path: '/tables', name: 'Tables', component: Tables },
        { path: '/forms', name: 'Forms', component: Forms },
        {
          path: '/formsMaquete',
          name: 'FormsMaquete',
          component: FormsMaquete
        },

        { path: '/buttons', name: 'Buttons', component: Buttons },
        { path: '/grid', name: 'Grid', component: Grid },
        { path: '/icons', name: 'Icons', component: Icons },
        {
          path: '/notifications',
          name: 'Notifications',
          component: Notifications
        },
        { path: '/panels', name: 'Panels', component: Panels },
        { path: '/typography', name: 'Typography', component: Typography },

        { path: '/blank', name: 'Blank', component: Blank }
      ]
    }
    //
  ]
});

//router.replace({ path: '/dashborad', redirect: '/dashborad' });
//router.replace({ path: '/login', redirect: '/dashboard' });

export default router;
