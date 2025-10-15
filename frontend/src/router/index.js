import { createRouter, createWebHistory } from 'vue-router'

// ✅ Use @ instead of src — this works properly once jsconfig.json is set up
import WebHome from '@/components/WebHome/WebHome.vue'
import UserAdminDetails from '@/views/UserAdminDetails.vue'
import Login from '@/views/auth/login.component.vue'
import SignUp from '@/views/auth/signup.component.vue'
import AdminHomePage from '@/views/admin/AdminHomePage.vue'
import AdminBlogManagement from '@/views/admin/AdminBlogManagement.vue'
import QuizManagement from '@/views/admin/AdminQuizManagement.vue'
import TravelCostManagement from '@/views/admin/AdminBudgetPlannerManagement.vue'
import UserHomePage from '@/views/user/UserHomePage.vue'
import EditUserData from '@/views/user/EditUserData.vue'
import AddBlogPost from '@/views/user/AddBlogPost.vue'
import Blog from '@/views/BlogHomePage.vue'
import BlogCardDetails from '@/components/BlogCardDetails.vue'
import ExplorePage from '@/components/WebHome/ExplorePage.vue'
import About from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: WebHome },
    { path: '/sign-in', name: 'login', component: Login },
    { path: '/sign-up', name: 'signup', component: SignUp },
    { path: '/user-admin-details', name: 'UserAdminDetails', component: UserAdminDetails },
    { path: '/admin-home-page', name: 'AdminHomePage', component: AdminHomePage },
    { path: '/admin-blog-management', name: 'AdminBlogManagement', component: AdminBlogManagement },
    { path: '/admin-quiz-management', name: 'AdminQuizManagement', component: QuizManagement },
    { path: '/admin-travel-cost-management', name: 'AdminBudgetPlannerManagement', component: TravelCostManagement },
    { path: '/user-home-page', name: 'UserHomePage', component: UserHomePage },
    { path: '/edit-user-data', name: 'EditUserData', component: EditUserData },
    { path: '/add-blog-post', name: 'AddBlogPost', component: AddBlogPost },
    { path: '/blog-post-home', name: 'BlogHomePage', component: Blog },
    { path: '/blog-details/:id', name: 'BlogDetails', component: BlogCardDetails },
    { path: '/explore', name: 'ExplorePage', component: ExplorePage },
    { path: '/about', name: 'AboutPage', component: About },
  ],
})

export default router
