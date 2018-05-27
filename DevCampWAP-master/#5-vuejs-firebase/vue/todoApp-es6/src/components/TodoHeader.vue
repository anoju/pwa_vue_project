<template>
  <header id="header">
    <!-- <h1><img src="../assets/logo.png" alt=""><strong>TODO APP!!!</strong></h1> -->
    <h1><img src="../assets/logo.png" alt=""><slot name="pageTilte">page title</slot></h1>    
    <nav>
      <router-link to="/">TO DO</router-link>
      <router-link to="/chart">CHART</router-link>
      <router-link to="/store">STORE</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  
}
</script>

</script>

<style>
body{background:#eee;margin: 0;font:1em/1.3 'Noto Sans KR';}
#header{box-shadow: 0 0 10px #ddd;text-align: center;background:#fff;}
#header h1 {padding-top:15px;margin: 0}
#header h1 img{width: 30px;vertical-align: middle;margin-right:0.5em}
#header p{margin: 0;}
#header nav{margin-top: 15px;border-top: 1px solid #ddd;text-align: center;padding: 0.1em 0;}
#header nav a{text-decoration: none;color: #222;display: inline-block;padding: 0.3em 1em;}
#header nav a.router-link-exact-active{border-bottom: 1px solid #dd0000;color: #dd0000;}
#header nav a:hover{color: #dd0000;}
#container{padding: 20px 15px;}

.blind{display: none}
.shadow {box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)}
</style>