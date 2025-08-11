<template>
  <v-container>
    <v-row justify="center">
      <v-col md="4">
        <v-card>
          <v-card-title class="text-h5 text-center"> 로그인 </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="email" v-model="email"> </v-text-field>
              <!-- v-model 변수설정 -->
              <v-text-field label="password" v-model="password" type="password"> </v-text-field>

              <v-btn type="text" color="primary" block @click="memberLogin()"
                >로그인</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async memberLogin() {
      const loginData = {
        email: this.email,
        password: this.password,
      };
      // {"email" : "hongildong"}

      const response = await axios.post(
        "http://localhost:8080/member/doLogin",
        loginData
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      window.location.href = "/";
    },
  },
};
</script>
