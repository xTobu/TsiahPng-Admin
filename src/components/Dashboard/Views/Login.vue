<template>
    <div class="row">
        <div class="col-lg-4 col-md-4">
            <div class="card">

                <div class="content">
                    <form>
                        <div class="row">
                            <div class="col-md-12">
                                <fg-input type="text" label="帳號" placeholder="Username" v-model="user.username">
                                </fg-input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <fg-input type="text" label="密碼" placeholder="Password" v-model="user.password">
                                </fg-input>
                            </div>
                        </div>
                        <div class="text-left">
                            <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="methodsLogin">
                                登入
                            </button>
                        </div>
                        <div class="clearfix"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import qs from "qs";
import { login } from "@/api/login";
import request from "@/utils/request";

import EditProfileForm from "./AddRestaurant/Form.vue";
export default {
    components: {
        EditProfileForm
    },
    data() {
        return {
            user: {
                username: "admin",
                password: "0000"
            }
        };
    },
    methods: {
        methodsLogin() {
            if (this.user.username === "" || this.user.password === "") {
                return alert("請輸入完整資料");
            }
            /** namespaced: true, */
            this.$store
                .dispatch("auth/actionLogin", {
                    username: this.user.username,
                    password: this.user.password
                })
                .then(
                    response => {
                        console.log(
                            "success"
                        );
                        this.$router.push('data')
                    },
                    error => {
                        console.error(
                            "error"
                        );
                    }
                );
            /**  namespaced: false */

            // this.$store.dispatch(
            //     "actionLogin",
            //     {
            //         username: this.user.username,
            //         password: this.user.password
            //     },
            //     { module: "auth" }
            // );
        }
    }
};
</script>
<style>
</style>
