<template>
  <div id="navigation">
    <div class="logo-container">
      <router-link to="/">
        <h2 class="logo">AnimeWebsite</h2>
      </router-link>
    </div>
    <div class="menu-list">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">Popular</router-link>
        </li>
      </ul>
    </div>
    <div class="user-area-controls">
      <div class="login-register">
        <router-link to="/">
          <button class="login">Login</button>
        </router-link>
        <router-link to="/">
          <button class="register">Register</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navigation-component'
}
</script>
<style lang="scss">
#navigation {
  display: flex;
  background: #000;
  .logo-container {
    margin: auto 15px;
    .logo {
      font-size: 21px;
      color: #984447;
    }
  }
  .menu-list {
    margin: auto 15px;
    ul {
      display: flex;
      padding: 0;
      margin: 0;
      li {
        a {
          display: block;
          padding: 5px 10px;
          color: #999;
          transition: color .3s;
          &.router-link-exact-active,
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
  .user-area-controls {
    margin: auto 15px auto auto;
    .login-register {
      display: flex;

      button {
        border: none;
        background: #984447;
        color: #fff;
        font-size: 16px;
        padding: 8px 20px;
        transition: background-color .1s;
        cursor: pointer;
        margin-left: 15px;
        &.login {
          background: #4d9852;
          &:hover {
            background: #239833;
          }
        }
        &.register {
          background: #98414b;
          &:hover {
            background: #982426;
          }
        }
      }
    }
  }
}
</style>
