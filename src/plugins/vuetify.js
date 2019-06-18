import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
      themes: {
        light: {
          primary: '#42a5f5',
         },
        dark: {
          primary: '#2196F3'
        },
      },
    },
    options: {
      customProperties: true,
    },
    icons: {
      iconfont: 'md', // default is 'mdi'
    }
});
