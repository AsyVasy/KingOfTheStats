<template>
    <div class="commu">
        <h2>{{communityHere.name}}</h2>
        <table>
            <thead>
                <tr>
                    <th>Rang</th>
                    <th>Joueur</th>
                    <th>Victoires</th>
                    <th>Score</th>
                    <th>Platforme</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(user, n) in users" :key="n">
                    <td>#{{n + 1}}</td>
                    <td @click="setUser(user.username)">{{user.username}}</td>
                    <td>259</td>
                    <td>1008</td>
                    <td>pc</td>
                </tr> -->
                <!-- v-if="epic.id_community === communityHere.id_community" -->
                
                
                <tr v-for="(epic, n) in orderedByScore" :key="n" >
                    <td>#{{n + 1}}</td>
                    <td @click="setUser(epic)">{{epic.name}}</td>
                    <td>{{epic.wins}}</td>
                    <td>{{epic.score}}</td>
                    <td>{{epic.platform}}</td>
                </tr>


        <!-- <button @click="test(epic)">test</button> -->
                <!-- <p>{{tabscore}}</p> -->












            </tbody>
        </table>

        <h2>{{compte_associe.name}}</h2>
    </div>
</template>



<script>
    // import axios from "axios"
    export default {
        data() {
            return {
                communityHere : {
                    id_community: 1,
                    name: "Simplon.co",
                },
                tabscore: 2
            }
        },
        methods: {
            test(epic) {
                console.log(this.getStats(epic).stat)
            },
            setUser(user) {
                // console.log(user);
                this.$ebus.$emit("send-user", user)
            },


            // getStats: function(user) {
            //     var stat = {};
            //     return axios.post('http://localhost:8888/fortnite', {
            //         pseudo: user.name,
            //         platform: user.platform
            //     })
            //     .then(function(response) {
            //         // console.log(response.data.lifeTimeStats[8].value);
            //         stat = response.data.lifeTimeStats
            //     })
                                    
            // }
            
            //score ==> response.data.lifeTimeStats[6].value
            // wins ==> response.data.lifeTimeStats[8].value
            
            

            // getStats: function(user) {
            //     const resolver = function resolver(details) {
            //         console.log("detaiiiiiil", details)
            //         return details;
            //     }

            //     return new Promise((resolver, reject) => {
            //         console.log("par làààà")
            //         axios
            //         .get("https://api.fortnitetracker.com/v1/profile/" + user.platform + "/" + user.name, {
            //             headers: {
            //                 "TRN-Api-Key":"5f51cfcb-1ab8-4181-aeb4-7abcb3d554c1"
            //             }
            //         })
            //         .then(function(response) {
            //             return resolver(response.data.lifeTimeStats)
            //         })
            //     })
            // }
        },
        
        computed: {
            users() {
                return this.$store.getters.displayUsers;
            },
            community() {
                return this.$store.getters.displayCommunity;
            },
            compte_associe() {
                return this.$store.getters.displayCompte_associe;
            },
            hashtag() {
                return this.$store.getters.displayHashtag;
            },
            user_registered_community() {
                return this.$store.getters.displayUser_registered;
            },
            community_has_epic() {
                return this.$store.getters.displayCommunity_has_epic;
            },

            // getStats: function() {
            //     this.compte_associe.forEach(element => {
            //         axios.post('http://localhost:8888/user', {
            //             pseudo: element.name,
            //             platform: element.platform
            //         })
            //         .then(function(response) {
            //             this.tabscore.push(response.data.lifeTimeStats)                 
            //         })    
            //     });
                
            // }
             

orderedByScore: function () {
    return _.orderBy(this.compte_associe, 'score')
  }
            

            



        },
        created() {
            this.$store.dispatch("getUsers"),
            this.$store.dispatch("getHashtag"),
            this.$store.dispatch("getcommunity")
            this.$store.dispatch("getCompte_associe")
            this.$store.dispatch("getUser_registered_community") 
            this.$store.dispatch("getCommunity_has_epic")
            

            
        }
    }
</script>












<style lang="scss" scoped>
    .commu {
        color: white;
        // margin: 20px 0px 0px 110px;
        border-radius: 10px;
        background-color: rgba(51, 51, 51, 0.839);
        width: auto;
        height: 620px;
        max-height: 645px;
        overflow: auto;



        
        h2 {
            font-size: 50px;
            margin-bottom: 10px;
            font-family: 'Burbank Big Condensed'
        }




        table {

            margin-top: 25px;
            width: 100%;
            th {
                
                font-family: 'Burbank Big Condensed';
                font-size: 20px

            }
            tr {
                tbody {

                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    width: 100%;

                }
                td {
                    line-height: 40px;
                    padding: 3px;
                    transition: .3s
                    }
                // td:hover {
                //     border: 3px solid #ffff00;
                // border-radius: 10px;
                // padding: 0px;
                // cursor: pointer;
                // }
            }
            

            tbody > tr:nth-child(1) > td:nth-child(1) {
                background: #cc9900;
            }
            tbody > tr:nth-child(2) > td:nth-child(1) {
                background: #993399;
            }
            tbody > tr:nth-child(3) > td:nth-child(1) {
                background: #009999;

            }
            tbody > tr:nth-child(4) > td:nth-child(1) {
                background: #339900;

            }
            tbody > tr:nth-child(n + 5) > td:nth-child(1) {
                background: #999999;

            }
            
            
            tbody > tr:nth-child(n + 1) > td:nth-child(1) {
                font-family: 'Burbank Big Condensed';
                font-size: 30px

            }




            tbody > tr > td:nth-child(n + 3) {
                border-left: 1px solid rgba($color: white, $alpha: 0.5);
            }



            tbody > tr > td:nth-child(2):hover {
                border: 3px solid #ffff00;
                border-radius: 10px;
                padding: 0px;
                cursor: pointer;
                transition: .3s;


            }
                
        }
    };
</style>



