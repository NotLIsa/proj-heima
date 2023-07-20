/*
 * @Author: zhaoshali
 * @Date: 2023-07-19 10:26:54
 * @LastEditTime: 2023-07-20 09:33:26
 * @Description: 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //按需导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle:'sass'
      })],
    }),
    vue(),
    Unocss({
      presets: [
       presetUno(),
       //预设图标
       presetIcons({}),
     ]
     }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css:{
    preprocessorOptions:{
    scss:{
    //自动导入scss文件
    additionalData:`
       @use "@/styles/element/index.scss" as *;
       @use "@/styles/var.scss" as *;
     `,
     }
    }
  },
})
