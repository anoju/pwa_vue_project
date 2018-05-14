var Login = {
  template: `
    <div>
      <h2>Login Section</h2>
      <router-view></router-view>
    </div>
  `,
};
var LoginForm = {
  template: `
    <form action="/" method="post">
      <div>
          <label for="account">E-mail : </label>
          <input type="email" id="account">
      </div>
      <div>
          <label for="password">Password : </label>
          <input type="password" id="password">
      </div>
    </form>
  `,
};
var List = {
  template: `
    <div>
      <h2>List Section</h2>
      <router-view></router-view>
    </div>
  `,
};
var ListItems = {
  template: `
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  `,
};

// 할일 #2
// Main 컴포넌트와 그 하위 컴포넌트를 아래 등록해보세요.
var Main = {
  template: `
    <div>
      <h2>Main</h2>
      <router-view></router-view>
    </div>
  `,
};
var MainItems = {
  template: `
    <p>메인페이지입니다. <br/>
    <router-link to="/main/sub">Go to 메인서브</router-link></p>
  `,
};
var MainSubItems = {
  template: `
    <p>메인 서브 페이지입니다. <br/>
    <router-link to="/main">Go to 메인</router-link></p>
  `,
};
var routes = [
  {
    path: '/login',
    component: Login,
    children: [
      { path: '', component: LoginForm }
    ]
  },
  {
    path: '/list',
    component: List,
    children: [
      { path: '', component: ListItems }
    ]
  },
  // 할일 #1
  // `/main` URL 에서 동작할 라우터를 하나 등록하고,
  // 해당 라우터에서 동작할 Main 컴포넌트와 하위 컴포넌트를 생성하여 등록합니다.
  {
    path: '/main',
    component: Main,
    children: [
      { path: '', component: MainItems },
      { path: '/main/sub', component: MainSubItems}
    ]
  },
];

var router = new VueRouter({
  mode:'history',
  routes
});

var app = new Vue({
  router
}).$mount('#app');
