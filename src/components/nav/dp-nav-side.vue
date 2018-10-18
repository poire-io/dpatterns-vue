<template>
    <div class="sidebar hidden-xs-down">
        <a href="Javascript:;" id="sidebar-toggle" class="sidebar-toggle" title="Toggle Main Menu"><i class="fa fa-arrow-circle-left"><span class="sr-only sr-focusable">Toggle Menu</span></i></a>
        <div class="row">
            <div class="col-md-12">
                <div class="brand"></div>
                <div class="page-title">{{$route.name}}</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <nav class="left-nav" role="navigation">
                    <ul v-for="item in items" :key="item.id" v-if="item.active">
                        <li> 
                            <router-link :to=item.link>
                                <i class="fa" :class="item.icon"></i><span>{{item.label}}</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="user-menu">
            <div class="row">
                <div class="col-md-12">
                    <nav class="left-nav" role="navigation">
                        <ul>
                            <li><a href="Javascript:;"><i class="fa fa-user-circle-o"></i><span>Corey O'Brien</span></a><a class="user-settings" href="Javascript:;"><i class="fa fa-cog"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        mounted() {
            axios
                .get('menu.json')
                .then((response) => {
                    this.items = response.data;
                    // console.log(this.items);
                })
                .catch((err) => {
                    this.error = err.data;
                });
        },
        data(){
            return{
                items: null
            }
        }
    }
</script>
