import '../scss/app.scss';
import gsap from 'gsap';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './Modal'
import './Menu'

let dpMin, dpMax;

dpMin = new AirDatepicker('.js-start', {

  onSelect({ date }) {
    dpMax.update({
      minDate: date
    })
  }
})

dpMax = new AirDatepicker('.js-end', {
  onSelect({ date }) {
    dpMin.update({
      maxDate: date
    })
  }
})



console.log(dpMin)
function importAll(r) {
  return r.keys().map(r);
}

importAll(require.context('../images/', true, /\.(png|jpe?g|svg|mp4)$/));


function parallaxIt(e, target, movement) {
  const relX = e.pageX
  gsap.to(target, {
    backgroundPositionX: (relX - window.innerWidth / 2) / window.innerWidth * movement,
  });
}



setTimeout(() => {
  const target = ".js-smoke";
  const tl = gsap.timeline()
  tl.fromTo('.js-title-animated', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1,
    ease: 'ease'
  }, 'Sametime')
  tl.to('.js-content-path', {
    scaleY: 1,
    duration: 1,
    ease: 'back'
  }, 'Sametime')
  tl.to('.js-background', {
    backgroundPositionX: -150,
    duration: 1,
    ease: 'ease in and out',
    onComplete: () => {
      window.addEventListener('mousemove', (e) => {
        parallaxIt(e, ".js-background", -300);
      })
    }
  }, 'Sametime')

  tl.to('.js-content-circle', {
    autoAlpha: 1
  }, '>=')
  tl.to('.js-video-show', {
    autoAlpha: 1
  })
  tl.fromTo('.js-smoke', {
    backgroundPositionX: -150,


  },

    {
      backgroundPositionX: 0,
      duration: 1.4,
    },
    'Sametime')
  tl.to('.js-smoke', {
    opacity: .5,
    duration: 1.5
  }, 'Sametime')
  addTweens(tl);
  tl.call(() => {
    let smoke = gsap.timeline({ repeat: -1 });
    addTweens(smoke);
  })
  function addTweens(tl) {
    tl.to(target, {
      opacity: .5,
      duration: 2
    }).fromTo(target, { backgroundPositionX: 0 }, {
      backgroundPositionX: 100,
      duration: 6,
      ease: "none"
    }, "<").to(target, {
      opacity: 0,
      duration: 2
    }, "-=100%")
  }


}, 1000);


