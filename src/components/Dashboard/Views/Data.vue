<template>
    <div class="row">
        <!-- <div class="col-lg-8 col-md-7">
            <edit-profile-form />
        </div> -->
        <div class="col-md-12">
            <div class="card">
                <paper-table :title="table.title" :sub-title="table.subTitle" :data="dataRestaurantsList" :columns="table.columns">

                </paper-table>
            </div>
        </div>

    </div>
</template>
<script>
import PaperTable from "components/UIComponents/PaperTable.vue";
import EditProfileForm from "./AddRestaurant/Form.vue";
import axios from "axios";
import qs from "qs";
const tableColumns = ["id", "Name", "Price", "Purpose"];

export default {
    components: {
        PaperTable,
        EditProfileForm
    },
    data() {
        return {
            table: {
                title: "餐廳列表",
                subTitle: "Restaurant List",
                columns: [...tableColumns],
               
            }
        };
    },
    computed: {
        dataRestaurantsList(){
            return this.$store.state.data.RestaurantsList;
        }
    },
    created() {
       
        this.$store
            .dispatch("data/actionSetRestaurantsList")
            .then(
                response => {
                },
                error => {
                    // console.error("error");
                }
            );
    },
    mounted() {
        
    }
};
</script>
<style>
</style>
