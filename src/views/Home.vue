<template>
  <section id="app">
      <NavTop class="navTop"></NavTop>
      <NavLeft class="navLeft"></NavLeft>
      <div class="tabs">
      <Community></Community>
      <div class="threeBox">
      <Selected class="select"></Selected>
      <div class="twoBox">
      <Chat class="chat"></Chat>
      <Profil class="profil" ></Profil>
      </div></div>

      </div>

  </section>
</template>


<script>
import NavTop from '@/components/NavTop.vue'
import NavLeft from '@/components/NavLeft.vue'
import Community from '@/components/Community.vue'
import Chat from '@/components/Chat.vue'
import Profil from '@/components/Profil.vue'
import Selected from '@/components/Selected.vue'
export default {
  components: {
    NavTop,
    NavLeft,
    Community,
    Chat,
    Profil,
    Selected,
  }
  
}
</script>



  <style lang="scss">
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
// @media screen and (min-width: 685px) {


// .navLeft {
//     height: 100%;
//   }




//   #app {
//     font-family: 'Open Sans';
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//     color: #2c3e50;
//     background: linear-gradient(rgba(102, 0, 255, 0.9), rgb(204, 0, 255));
//     height: auto;
//     width: 100vw;
//     display: flex;
//     flex-direction: column;
//     .allTab {
//       display: flex;
//       justify-content:space-evenly;
//       flex-wrap: wrap;
//       width: 100%;
//       // height: 87.5vh;
//       // padding-top: 100px;
    
//       .theThree {
//           display: flex;
//           flex-wrap: wrap;
//           flex-direction: column;
//           // height: auto;
//             // margin-top: 150px;
//           .twoTop {
//             flex-wrap: wrap;
//             display: flex;
//             justify-content:space-between;

//           }
//       }
//     }
//   }




// }



@media screen and (min-width: 685px) {







  #app {
    font-family: 'Open Sans';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: linear-gradient(rgba(102, 0, 255, 0.9), rgb(204, 0, 255));
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;

    .navTop {
      position: absolute;
      top: 0
          }
    .navLeft {
      position: absolute;
      top: 0
    }

    

    .tabs {
      position: absolute;
      top: 120px;
      left: 120px;
      display: flex;
      flex-wrap: wrap;

      .select {
        margin-left: 100px;
      }
      .chat {
        margin-right: 50px
      }

      .twoBox {
        display: flex;
        margin: 0 0 0 100px
      }
    }
    

  }




}

// @media screen and (max-width: 685px) {

  
// .navLeft {
// display: none 
//  }




//   #app {
//     font-family: 'Open Sans';
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//     color: #2c3e50;
//     background: blue;
//     // background: linear-gradient(rgba(102, 0, 255, 0.9), rgb(204, 0, 255));
//     height: auto;
//     width: 808pxpx;
//     padding: auto;
    
//     .allTab {
      
//       // width: 100%;
//       min-width: 600px;
//       // height: 87.5vh;
//       // padding-top: 100px;
    
//       .theThree {
         
//           // height: auto;
//             // margin-top: 150px;

//           .select {
//             width: 300px;
//             height: 600px;
//           }
//           .twoTop {
            
//             max-width: 550px;

//             .chat {
//               width: 300px;
//             }
//             .profil {
//               width: 300px;
              
//             }

//           }
//       }
//     }
//   }




// }
  
  

  
</style>
