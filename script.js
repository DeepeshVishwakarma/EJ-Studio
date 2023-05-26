function init() {
  
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
  }
  
init()
  

gsap.to("#page1 #img", {
    width: "100%",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
    //   markers: true,
      start: "top 10%",
      end: "top -40%",
      scrub: true,
      pin: true
    }
  })

  document.addEventListener("mousemove", function (dets) {
    document.querySelector("#cursor").style.left = `${dets.x}px`
    document.querySelector("#cursor").style.top = `${dets.y}px`
  })

var flag = 0
document.querySelector("#nav-prt2").addEventListener("click", function () {
  if (flag == 0) {
    document.querySelector("#nav-prt2").style.height = "24px"
      document.querySelector("#line1").style.rotate = "47deg"
      document.querySelector("#line2").style.rotate = "-48deg"
      document.querySelector("#full-nav").style.top = 0
      gsap.from("#full-nav h1",{
        y:200,
        duration:.5,
        stagger:.5,
        delay:.8,
        opacity:0
      })
      flag = 1
    } else {
      document.querySelector("#nav-prt2").style.height = "12px"
      document.querySelector("#line1").style.rotate = "0deg"
      document.querySelector("#line2").style.rotate = "0deg"
      document.querySelector("#full-nav").style.top = "-100%"
      flag = 0
    }
  
})



var loader = gsap.timeline()

loader.to("#loader h5",{
    y: -55,
    duration:1,
    delay:.5
})
loader.to("#loader #text",{
    y:-50,
    rotateX:-90,
    duration:.8,
    opacity:0
})
loader.to("#loader1",{
    y:"-100%",
    delay:-.6,
    duration:.4
})
loader.to("#loader2",{
    y:"-100%",
    delay:-.3,
    duration:.4
})
loader.to("#loader3",{
    y:"-100%",
    delay:-.5,
    duration:.4
})
loader.to("#loader4",{
    y:"-100%",
    delay:-.2,   
    duration:.4
})
loader.to("#loader",{
    y:"-100vh",
    duration:.1,
})


gsap.from("#page2 h1",{
    rotate: 5,
    y:100,
    opacity:0,
    stagger: 1,
    duration:1,
    scrollTrigger: {
        trigger:"#page2",
        scroller:"#main",
        // markers: true,
        start:"top 60%",
        end: "top 40%",
        scrub:3
    }
})

var page3tl = gsap.timeline({
  scrollTrigger: {
    trigger:"#page3",
    scroller:"#main",
    // markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:2,
    pin:true
}
})

page3tl.from("#page3 h1",{
    scale:1.96,
    lineHeight:"30vw",
}, "anim")
page3tl.from("#page3 h2",{
  scale:1.4,
  lineHeight:"43vw"
}, "anim")
page3tl.to("#page4",{
  y:"-180vh"
}, "anim")

var box = gsap.timeline({
  scrollTrigger: {
    trigger:"#page5",
    scroller:"#main",
    // markers:true,
    // start:"top -10%",
    // end:"top -30%",
    scrub:2,
    pin:true,
  }

})
box.to("#page5 h1",{
    scale:4,
    opacity:0,
    filter: "blur(20px)",
})
box.to("#page5 #box",{
    opacity:1,
})

