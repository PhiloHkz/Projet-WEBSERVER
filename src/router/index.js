import { createRouter, createWebHistory } from 'vue-router'
import DepartmentList from '../components/departments/DepartmentList.vue'
import AddDepartment from '../components/departments/AddDepartment.vue'
import UpdateDepartment from '../components/departments/UpdateDepartment.vue'
import FacturationList from '../components/facturation/FacturationList.vue'
import AddFacturation from '../components/facturation/AddFacturation.vue'
import UpdateFacturation from '../components/facturation/UpdateFacturation.vue'
import HopitalList from '../components/hospitals/HopitalList.vue'
import AddHopital from '../components/hospitals/AddHopital.vue'
import UpdateHopital from '../components/hospitals/UpdateHopital.vue'
import PrestationList from '../components/prestations/PrestationList.vue'
import AddPrestation from '../components/prestations/AddPrestation.vue'
import UpdatePrestation from '../components/prestations/UpdatePrestation.vue'

import RendezvousList from '../components/rendezvous/RendezvousList.vue'
import AddRendezvous from '../components/rendezvous/AddRendezvous.vue'
import UpdateRendezvous from '../components/rendezvous/UpdateRendezvous.vue'

import RolesList from '../components/roles/RolesList.vue'
import AddRoles from '../components/roles/AddRoles.vue'
import UpdateRoles from '../components/roles/UpdateRoles.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home0',
      component: DepartmentList
    },
    {
      path: '/nouveau-departement',
      name: 'nouveau',
      component: AddDepartment
    },

    {
      path: '/mise-a-jour-departement/:id',
      name: 'mise-a-jour',
      component: UpdateDepartment
    },

    {
      path: '/utilisateurs',
      name: 'utilisateurs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/facturation',
      name: 'home1',
      component: FacturationList
    },
    {
      path: '/nouvelle-facturation',
      name: 'nouvelle',
      component: AddFacturation
    },

    {
      path: '/mise-a-jour-facturation/:id',
      name: 'mise-a-jour',
      component: UpdateFacturation
    },

    {
      path: '/utilisateurs',
      name: 'utilisateurs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/hospitals',
      name: 'home2',
      component: HopitalList
    },
    {
      path: '/nouveau-hopital',
      name: 'nouveau',
      component: AddHopital
    },

    {
      path: '/mise-a-jour-hopital/:id',
      name: 'mise-a-jour',
      component: UpdateHopital
    },

    {
      path: '/utilisateurs',
      name: 'utilisateurs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    } ,
    {
      path: '/prestations',
      name: 'home3',
      component: PrestationList
    },
    {
      path: '/nouvelle-prestation',
      name: 'nouvelle',
      component: AddPrestation
    },

    {
      path: '/mise-a-jour-prestation/:id',
      name: 'mise-a-jour',
      component: UpdatePrestation
    },

    {
      path: '/utilisateurs',
      name: 'utilisateurs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },


    {
      path: '/rendezvous',
      name: 'home1',
      component: RendezvousList
    },

    {
      path: '/nouveau-Rendezvous',
      name: 'nouveau',
      component: AddRendezvous
    },

    {
      path: '/mise-a-jour-rendezvous/:id',
      name: 'mise-a-jour',
      component: UpdateRendezvous
    },

    {
      path: '/role',
      name: 'home2',
      component: RolesList
    },
    
    {
      path: '/nouveau-role',
      name: 'nouveau',
      component: AddRoles
    },

    {
      path: '/mise-a-jour-role/:id',
      name: 'mise-a-jour',
      component: UpdateRoles
    },


 
  ]
})

export default router
