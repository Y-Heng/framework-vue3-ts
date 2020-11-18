/*
 * @Descripttion:
 * @version:
 * @Author: kurumi
 * @Date: 2020-10-20 10:37:54
 * @LastEditors: kurumi
 * @LastEditTime: 2020-11-18 16:56:35
 */
declare module '*.vue' {
  // eslint-disable-next-line prettier/prettier
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.amr'
declare module 'vue-particles'
