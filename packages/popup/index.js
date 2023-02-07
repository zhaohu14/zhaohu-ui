import Vue from 'vue'
import Popup from './scr/popup'

const PopupBox = Vue.extend(Popup)
Popup.install = function (data) {
  console.log(data)
  let instance = new PopupBox({
    data
  }).$mount()

  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.isShow = true
  })
}

export default Popup