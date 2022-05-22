import gsap from "gsap"
import { closest } from './Helpers'

class Menu {
  constructor() {
    this.menu = document.querySelector('.js-menu')
    this.trigger = document.querySelector('.js-open-menu')
    this.state
    this.listener()
  }
  open() {
    gsap.to(this.menu, {
      x: 0
    })
    this.state = true
  }
  close() {
    gsap.to(this.menu, {
      x: this.menu.getBoundingClientRect().width
    })
    this.state = false
  }
  listener() {
    document.addEventListener('click', (e) => {
      if (!this.state && closest(e.target, this.trigger)) {
        this.open()
      } else if (this.state && !closest(e.target, this.menu)) {
        this.close()
      }
    })
  }
}

export default new Menu()