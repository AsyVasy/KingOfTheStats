<template>
    <div class="profil">
        <h2>Profil</h2>
        <ul>
            <li>Récupérer un nouveau profil EpicGame</li>
            <li>Retirer un profil EpicGame</li>
            <li>--------------------------</li>
            <li>Créer une communauté </li>
            <li>Gérer une communauté</li>
            <li>Quitter une communauté</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .profil {
        margin: 20px 0px 0px 0px;
        border-radius: 10px;
        background-color: rgba(51, 51, 51, 0.839);
        left: 355px;
        width: auto;
        max-width: 300px;
        height: 300px;
        font-family: 'Burbank Big Condensed';
        color: white;

        h2 {
            font-size: 35px;
        }

        ul {
            list-style: none;
            background-color: #663366;
            height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            
            li {
                margin: 0 10px 0 10px;
                padding: 5px 0 5px 0;
                border-radius: 10px;
                transition: .2s
            }

            li:hover {

                background: rgba(#999999, 0.3);
                transition: .2s;
                cursor: pointer;
            }
        }
    };
</style>

