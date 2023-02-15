import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import Projects from '../views/projects/Projects.vue'
import ProjectDetails from '../views/projects/ProjectDetails.vue'
import ContactForm from '../views/ContactForm.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/contact-me',
    name: 'contact',
    component: ContactForm
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: true
  },
  {
    path: '/all-projects',
    redirect: '/projects'
  },
  { // catchAll not found in the routes above
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
