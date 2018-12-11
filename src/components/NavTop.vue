<template>
  <div class="nav" >
    <figure>
      <img class="searchGlass" src="../assets/search-solid.svg" alt="LOGO" />
    </figure>
    <input  class="search" type="search" placeholder="Rechercher ...">
    <figure>
      <img  class="img" src="../assets/users-solid.svg" alt="">
    </figure>

    <div  id="selectCommunity">
      <select>
        <option value="">Simplon.co</option>
        <option value="">Aulnay</option>
        <option value="">les bambis</option>
        <option value="">real madrid</option>
      </select>
    </div>
    
    <figure>
      <img  class="img" src="../assets/user-solid.svg" alt="">
    </figure>
    <h2>Nunes-kun</h2>
    <!-- <div id="selectCommunity">
    <select>
        <option>AsyVasy - PSN</option>
        <option>Ninja - PC</option>
      </select> -->
    </div>
</template>


<style lang="scss" scoped>
  .nav {
    // position: absolute;
    // top: 0;
    // left: 0;
    width: 95%;
    border-radius: 0 0px 10px 0;
    height: 100px;
    background-color: rgba(51, 51, 51, 0.99);
    z-index: 1;
    box-shadow: 5px 5px 5px black;
    display: flex;
    justify-content: space-around;
    align-items: center;

    #selectCommunity select {
      border: 0;
      color: black;
      background: transparent;
      font-size: 20px;
      font-weight: bold;
      padding: 2px 10px;
      width: auto;
      *width: auto;
      *background: #58B14C;
      -webkit-appearance: none;
    }

    #selectCommunity  {
      overflow:hidden;
      width:auto;
      -moz-border-radius: 9px 9px 9px 9px;
      -webkit-border-radius: 9px 9px 9px 9px;
      border-radius: 9px 9px 9px 9px;
      box-shadow: 1px 1px 11px #330033;
      background: #FFFFFF url("http://i62.tinypic.com/15xvbd5.png") no-repeat scroll 319px center;
}

    .searchGlass {
      filter: invert(1);
      height: 50px;
      padding-left: 90px;
    }
    .search {
      border: 0px;
      background: rgba(51, 51, 51, 1);
      font-size: 20px;
      color: white;
      height: 50px;
      outline: none
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: white;
      opacity: 1; /* Firefox */
    };

    .img {
      filter: invert(1);
      height: 50px;
    }

    h2 { 
      color: white;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      height: 100px;
      // padding-right: 90px;
      // select {
      //   list-style-type: none;
      //   margin-right: 10px;
      //   transition: .5s
      // }
      // select:hover {
      //   background: rgba(255, 255, 255, 0.3);
      //   cursor: pointer;
      //   border-radius: 10px;
      //   transition: .5s;
      //   padding: 5px 0px 5px 0px
      // }
    }
  }
</style>

