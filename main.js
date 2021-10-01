const controller = new ScrollMagic.Controller();

const linuxStagger = TweenMax.staggerFromTo(".linux-letter",20,{
  y:"-200%"
},{
  y:"0%", 
  delay:10,
},5)

const infoSection = new TimelineMax()
.to(".box1",2,{
  x:"0%",
  ease:"power2.out", 
  duration:2,
})

.to(".intro-name",2,{
  opacity:1,
  ease:"power2.out", 
  duration:2
})

.to(".info-wave",2,{
   y:"0%",
   ease:"power2.out"
})

.to(".bottom-header-wave",2,{
  y:"50%",
  ease:"power2.out", 
  duration:2
})

.to(".box2",2,{
  x:"0%",
  ease:"power2.out", 
  duration:2
})

.to(".window-info",2,{
  x:"0%",
  ease:"power2.out", 
  duration:2
})

.to(".box3",2,{
  y:"0%",
  ease:"power2.out", 
  duration:2
})

.to(".box3-wave-top",2,{
  y:"0%", 
  ease:"power2.out", 
  duration:2
})

.to(".games-letter",2,{
  opacity:0,
  height:0,
  width:0
})

.to(".game-controller",2,{
  x:"0%",
  opacity:1, 
  fontSize:"5rem",
  duration:2,
  ease:"power2.out" 
})

const letterProject = TweenMax.staggerFromTo(".project-letter",10,{
  y:"200%",
  opacity:0
},{
  y:"0%",
  opacity:1,
  ease:"power2.out"
},3)

const projectFirst = new TimelineMax()
.to(".first-project-image",2,{
  x:"0%",
  ease:"power2.out", 
  opacity:1,
  duration:2
})

.to(".first-project-link",2,{
  x:"0%",
  duration:2,
  opacity:1,
  ease:"power2.out"
})

const projectSecond = new TimelineMax()
.to(".second-project-image",2,{
  x:"0%",
  duration:2,
  opacity:1,
  ease:"power2.out"
})
.to(".second-project-link",2,{
  x:"0%",
 duration:2,
 opacity:1,
 ease:"power2.out"
})

const projectThird = new TimelineMax()

.to(".third-project-image",2,{
  x:"0%",
  ease:"power2.out", 
  opacity:1,
  duration:2
})

.to(".third-project-link",2,{
  x:"0%",
  duration:2,
  opacity:1,
  ease:"power2.out"
}) 

const projectTween = TweenMax.to(".projects", 2,{
  x:"0%",
  duration:2,
  opacity:1
})

const infoSectionTween = new ScrollMagic.Scene({
  triggerHook:0,
  triggerElement:".info-section-container",
  duration:5500
})
.setTween(infoSection)
.setPin(".info-section-container")
.addTo(controller)
.setClassToggle(".box1","active")

const linuxLetterTween = new ScrollMagic.Scene({
  triggerHook:0,
  triggerElement:".info-section-container", 
  duration:"100%"
})
.setTween(linuxStagger)
.addTo(controller)

const projectLetterTween = new ScrollMagic.Scene({
  triggerHook:1,
  triggerElement:".title-project-section", 
  duration:"100%"
})
.setTween(letterProject)
.addTo(controller)

const firstProjectTween = new ScrollMagic.Scene({
  triggerHook:0.9,
  triggerElement:".first-project", 
  duration:"100%"
})
.setTween(projectFirst)
.addTo(controller)
.setClassToggle(".first-project-link","line")

const secondProjectTween = new ScrollMagic.Scene({
  triggerHook:0.9,
  triggerElement:".second-project", 
 duration:"100%"
})
.setTween(projectSecond)
.addTo(controller)
.setClassToggle(".second-project-link","line")

const thirdProjectTween = new ScrollMagic.Scene({
  triggerHook:0.9,
  triggerElement:".third-project", 
  duration:"100%"
})
.setTween(projectThird)
.addTo(controller)
.setClassToggle(".third-project-link","line")


const projectsTween = new ScrollMagic.Scene({
  triggerHook:1,
  triggerElement:".github-projects-container", 
  duration:"100%"
})
.setTween(projectTween)
.addTo(controller)

gsap.to(".green-line",5,{
  width:"100%",
  ease:"bounce.out", 
  duration:5, 
  repeat:-1, 
  yoyo:true
})