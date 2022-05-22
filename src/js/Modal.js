import { closest } from './Helpers'
import gsap from 'gsap'

class Modal {
  constructor() {
    this.btn = document.querySelectorAll('.js-tickets')
    this.modal = document.querySelector('.js-modal')
    this.closeBtn = this.modal.querySelector('.js-close')
    this.state = false
    this.listener()
  }
  open() {
    gsap.to(this.modal, {
      x: 0,
      ease: 'power',
      duration: .8
    })
    this.state = true
  }
  close() {
    gsap.to(this.modal, {
      x: this.modal.getBoundingClientRect().width,
      ease: 'power',
      duration: .8
    })
    this.state = false
  }
  listener() {
    document.addEventListener('click', (e) => {
      this.btn.forEach(el => {
        if (!this.state && closest(e.target, el)) {
          this.open()
        }
        else if (this.state && closest(e.target, this.closeBtn)) {
          this.close()
        }
      })

    })
  }
}

export default new Modal()