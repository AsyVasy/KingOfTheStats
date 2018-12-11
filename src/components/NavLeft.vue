<template>
    <div class="menu">
    <figure>
      <img class="logo" src="../assets/CouronneV2.png" alt="LOGO" />
    </figure>
   

    </div>
</template>



<style lang="scss" scoped>
  .menu {
    // position: absolute;
    // top: 0;
    // left: 0;
    width: 90px;
    height: 800px;
    background-color:  rgba(51, 51, 51, 0.99);
    box-shadow: 1px 5px 5px black;
    z-index: 2;
    color: white;
    border-radius: 0 0 10px 0;

    .logo {
      width: 100%;
      filter: invert(1);
      padding-top: 20px
    };

    .user {
      filter: invert(1);
      padding-top: 150px
    }
  }
</style>
