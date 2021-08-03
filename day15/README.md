# day15

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 把 component XXX 加入 App.vue
1. 在 components 下新增 XXX.vue
2. 在 <script> 下 import
3. export default 裡 components 下加入 XXX
4. 最後在 <template> 加入 <XXX />

### router
1. 在 views 下新增 OOO.vue
2. 在 router index.js 裡 import 
   並在 routes 裡寫path、name、component
3. App.vue 下 新增 <router-link>