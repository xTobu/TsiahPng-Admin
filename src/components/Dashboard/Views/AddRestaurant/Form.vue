<template>
    <div class="card">
        <div class="header">
            <h4 class="title">Add Restaurant</h4>
        </div>
        <div class="content">
            <form>
                <div class="row">
                    <div class="col-md-6">
                        <fg-input type="text" label="餐廳名稱" placeholder="Restarant Name" v-model="restaurant.name">
                        </fg-input>
                    </div>
                    <div class="col-md-3">

                        <f-select label="價錢" placeholder="Price" v-model="restaurant.price" :options=options.price>

                        </f-select>
                    </div>
                    <div class="col-md-3">
                        <f-select label="目的" placeholder="Purpose" v-model="restaurant.purpose" :options=options.purpose>
                        </f-select>
                    </div>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateProfile">
                        新增
                    </button>
                </div>
                <div class="clearfix"></div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import qs from "qs";
export default {
    data() {
        return {
            restaurant: {
                name: "",
                price: "便宜",
                purpose: "一般"
            },
            options: {
                price: ["便宜", "普通", "高價"],
                purpose: ["一般", "聚餐", "慶生"]
            }
        };
    },
    methods: {
        updateProfile() {
            console.log(JSON.stringify(this.restaurant));
            if (this.restaurant.name === "") {
                return alert("請輸入餐廳名稱");
            }
            axios({
                method: "POST",
                data: qs.stringify({
                    name: this.restaurant.name,
                    price: this.restaurant.price,
                    purpose: this.restaurant.purpose
                }),
                url: "http://localhost:8080/api/tsiahpng/RestaurantAdd"
            })
                .then(resp => {
                    if (resp.data.result === "success") {
                        alert("新增成功");
                    }
                })
                .catch(err => {});
        }
    }
};
</script>
<style>
</style>
