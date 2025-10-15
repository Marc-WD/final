<template>
  <div>
    <component
      v-if="userData"
      :is="admin ? 'AdminHomePage' : 'UserHomePage'"
      :userData="userData"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import AdminHomePage from "@/views/admin/AdminHomePage.vue";
import UserHomePage from "@/views/user/UserHomePage.vue";

const userData = ref(null);
const admin = ref(false);
const router = useRouter();

const fetchUserData = async () => {
  try {
    const response = await axios.post("http://localhost:3000/userdata", {
      token: window.localStorage.getItem("token"),
    });

    console.log(response.data, "userData");

    if (response.data.data === "token expired") {
      handleTokenExpiration();
      return;
    }

    userData.value = response.data.data;
    if (userData.value.userType === "admin") {
      admin.value = true;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

const handleTokenExpiration = () => {
  window.localStorage.clear();
  window.localStorage.setItem("loggedin", "false");
  alert("Token Expired. Please log in again.");
  router.push("/sign-in");
};

onMounted(fetchUserData);
</script>
