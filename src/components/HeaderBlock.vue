<template>
  
  <header class="l_header u_hide_pc">
    <div class="l_header_logo">
      <router-link to="/">
        <picture>
          <source media="(max-width: 767px)" srcset="../../src/assets/images/common/logo_header.png 1x">
          <img src="../../src/assets/images/common/logo_header.png" alt="Study in Japan">
        </picture>
      </router-link>
    </div>
    <input type="checkbox" id="nav__checkbox" class="nav__checkbox">
    <label for="nav__checkbox" class="nav__toggle" @click="showMenu()">
      <img src="https://img.icons8.com/material-outlined/30/000000/menu--v1.png" class="hamburger" />
      <img src="https://img.icons8.com/plumpy/30/000000/x.png" class="close" />
    </label>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      // document.documentElement.classList.add("MyClass");
      this.showMobileMenu = !this.showMobileMenu;
      // u_hide_pc
    },
  },
}
</script>

<style>
.nav {
  border-bottom: 1px solid grey;
}
.nav__toggle {
  position: absolute;
  cursor: pointer;
  margin: 0rem 1rem;
  right: 0;
}

.close,
input[type="checkbox"] {
  display: none;
}
.hamburger {
  margin-top: 0.2rem;
}
.nav__menu {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin: 1rem;
}
li {
  list-style: none;
  display: none;
}
li:first-child {
  margin-right: auto;
  display: block;
}
.nav__menu a {
  text-decoration: none;
  color: initial;
  font-size: 1.2rem;
}
#nav__checkbox:checked ~ ul.nav__menu li {
  display: block;
}
#nav__checkbox:checked ~ label.nav__toggle .hamburger {
  display: none;
}
#nav__checkbox:checked ~ label.nav__toggle .close {
  display: block;
}

@media only screen and (min-width: 768px) {
  .nav__toggle {
    display: none;
  }
  .nav__menu {
    flex-direction: row;
  }
  .nav__menu li {
    display: block;
  }
}

</style>