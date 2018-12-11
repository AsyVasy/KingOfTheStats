<template>
    <div class="selected">
        <div class="head">
            <h2>{{epic.name}}</h2>
            <ul>
                <li @click="career">Carrièrre</li>
                <li @click="solo">Solo</li>
                <li @click="duo">Duo</li>
                <li @click="squad">Escouade</li>
            </ul>
        </div>

        <div class="stat">
            <ul>
                <li v-for="(stat, i) in stats " :key="i"> <p v-if="stat.key ? userStats = stat.key : userStats = i">{{userStats}} : {{stat.value}} </p> </li>                
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
    
        data() {
    
            return {
    
                stats: {},
                checking: null,
    
                epic: {
                    name: null,
                    platform: null
                }
    
                // soloAllTime: null,
    
                // duoAllTime: null,
    
                // squadAllTime: null,
    
                // lifeTimeStat: null,
    
                // soloCurrentSeason: null,
    
                // duoCurrentSeason: null,
    
                // squadCurrentSeason: null,
    
                // platformResearch: null,
    
                // pseudoReSearch: null,

                // self: this
    
            }
    
        },
        methods: {
            career() {
                this.checking = 1
                this.getStats(this.checking)
            },
            solo() {
                // console.log("coucou")
                this.checking = 2
                this.getStats(this.checking)
            },
            duo() {
                this.checking = 3
                this.getStats(this.checking)
            },
            squad() {
                this.checking = 4
                this.getStats(this.checking)
            },




            getStats(checking) {
                var self = this;
                axios.post('http://localhost:8888/fortnite', {
                    pseudo: this.epic.name ,
                    platform: this.epic.platform
                })
                .then(function(response) {
                    // if (pseudo && platform) {
                        
                    // }
                    if (checking === 1) {
                        self.stats = response.data.lifeTimeStats
                    }
                    else if (checking === 2) {
                        self.stats = response.data.stats.p2
                    }
                    else if (checking === 3) {
                        self.stats = response.data.stats.p10
                    }
                    else if (checking === 4) {
                        self.stats = response.data.stats.p9
                    }
                                        
                    // console.log(response.data.stats.p2.kd)
                    // self.pseudo = response.data.epicUserHandle;
    
                    // self.soloAllTime = response.data.stats.p2;
    
                    // self.duoAllTime = response.data.stats.p10;
    
                    // self.squadAllTime = response.data.stats.p9;
    
                    // self.platform = response.data.platformName;
    
                    // self.lifeTimeStat = response.data.lifeTimeStats;
    
                    // self.soloCurrentSeason = response.data.stats.curr_p2;
    
                    // self.duoCurrentSeason = response.data.stats.curr_p10;
    
                    // self.squadCurrentSeason = response.data.stats.curr_p9;
    
                })

            }
        },
    
        created() {
            this.$ebus.$on("send-user", param => {
            this.epic = param;
            this.getStats(1)
            
        });
            // console.log("store pseudoReSearch is  " + this.$store.state.pseudoReSearch)
    
            // console.log("store platformResearch is  " + this.$store.state.platformResearch)
            this.$store.state.pseudoReSearch = this.pseudoReSearch
            this.$store.state.platformResearch = this.platformResearch

        },
    
        // created() {
    
        //     // this.pseudoReSearch = this.$store.state.pseudoReSearch
    
        //     // this.platformResearch = this.$store.state.platformResearch
    
        //     var self = this;
    
        //     axios.get("http://localhost:8888")
    
        //         .then(function(response ) {
    
        //             console.log(response.data.stats.p9);
    
        //             self.stat = response
    
        //             self.pseudo = response.data.epicUserHandle;
    
        //             self.soloAllTime = response.data.stats.p2;
    
        //             self.duoAllTime = response.data.stats.p10;
    
        //             self.squadAllTime = response.data.stats.p9;
    
        //             self.platform = response.data.platformName;
    
        //             self.lifeTimeStat = response.data.lifeTimeStats;
    
        //             self.soloCurrentSeason = response.data.stats.curr_p2;
    
        //             self.duoCurrentSeason = response.data.stats.curr_p10;
    
        //             self.squadCurrentSeason = response.data.stats.curr_p9;
    
        //         })
    
        //         .catch(function(error) {
    
        //             console.log("err", error);
    
        //         });
    
        // }
    
    }
</script>

<style lang="scss" scoped>
    .selected {
        // margin: 20px 0px 0px 0px;
        border-radius: 10px;
        background-color: rgba(51, 51, 51, 0.839);
        z-index: 100;
        left: 355px;
        width: 660px;
        height: 300px;
        .head {
            margin-top: 5px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            h2 {
                font-size: 35px;
                font-family: 'Burbank Big Condensed';
                color: white;
            }
            ul {
                font-family: 'Burbank Big Condensed';
                font-size: 35px;
                width: 450px;
                color: white;
                list-style: none;
                display: flex;
                justify-content: space-around;
                background:  rgba(255, 255, 255, 0.502);
                border-radius: 10px;
                
                li {
                    width: auto;
                    // padding: 0 10px 0 10px;
                    transition: .5s
                }
                li:hover {
                    cursor: pointer;
                    background:  rgba(51, 51, 51, 0.839);
                    transition: .5s
                }

            }
        }
        .stat {
            ul {
                list-style: none;
                font-family: 'Burbank Big Condensed';
                color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                font-size: 30px;
                height: 220px;;
                background-color: #663366;
                margin: 10px 20px 0 20px;
                
                li {
                    transition: .5s;
                }
                li:hover {
                    color: red;
                    transition: .5s;
                    cursor: pointer;
                }
        
            

            }
        }
    };
</style>

