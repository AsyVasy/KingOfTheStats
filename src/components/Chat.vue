<template>
    <div class="chat">
        <h2>Chat</h2>
        <div class="conversation">
            <ul v-for="(message, p) in messages" :key="p">
                <li class="message" v-if="message.id_community === 1">{{message.message}}</li>
                <li class="sender" v-if="message.id_community === 1">{{message.id_user}}</li>
            </ul>
        </div>
            <form action="/search">
                <input type="text">
                <button type="submit" @click.stop.prevent="submit()">Envoyer</button>
            </form>
    </div>
</template>

<script>
export default {
    computed: {
        messages() {
                return this.$store.getters.displayMessages;
            },
        
    },
    created() {
        this.$store.dispatch("getMessages")
    }
}
</script>


<style lang="scss" scoped>
        /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    .chat {
        margin: 20px 0px 0px 0px;
        border-radius: 10px;
        background-color: rgba(51, 51, 51, 0.839);
        left: 355px;
        width: 300px;
        height: 300px;
        font-family: 'Burbank Big Condensed';
        color: white;
        // overflow: auto;
        .conversation {
            overflow: auto;
            height: 200px;
            background-color: #663366;
        }
        h2 {
                font-size: 35px;
            }
        ul {
            list-style: none;
            cursor: pointer;
            .message {
                background: #999999;
                border-radius: 10px;
                margin: 0 15px 0 15px;
                height: auto;
                padding: 5px 0 5px 0;
            font-size: 20px
            }
            .sender {
                font-size: 10px;
                height: auto;
                width: 100px;
                margin: 2px 0 15px 15px
            }
        }
        input {
            border-radius: 10px;
                background:white ;
                font-family: 'Burbank Big Condensed';
                font-size: 25px;
                width: 150px;
                margin: 10px
        }
            button {
                border-radius: 10px;
                background:white ;
                font-family: 'Burbank Big Condensed';
                font-size: 25px;
                margin: 10px;
                transition: .5s
            }
            button:hover {
                background: rgba(0, 0, 0, 0.5);
                color: white;
                transition: .5s
            }
    };
</style>

