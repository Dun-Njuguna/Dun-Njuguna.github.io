const links = ["#nav-link-home", "#nav-link-about-me", "#nav-link-skills", "#nav-link-work", "#nav-link-contact-me"]

$('.project').click(() => {
    console.log($(this).children(".project-description"))
    //$(this).children('.project-description')[0].show()
}, () => {
    //$(this).children('.project-description')[0].show()
})

links.forEach(link => {
    $(link).click(() => {
        if (link == '#nav-link-home') {
            markNavLinkActive("#nav-link-home")
            window.scrollTo(0, 0)
            return
        }
        section = $(link.replace("nav-link-", ""))
        //FIXME: This is a temporary solution. Find the best way to do this
        let scrollToY = section.offset().top - $("#nav-bar").height() + 3
        markNavLinkActive(link)
        window.scrollTo(0, scrollToY)
    })
})

function markNavLinkActive(section) {
    $(section).addClass("nav-link-active")
    links.filter((it) => it != section).forEach(it => $(it).removeClass('nav-link-active'))
}

window.onscroll = () => {
    let navBar = $("#nav-bar")
    let header = $("#header")

    navBarHeight = navBar.height()

    // Stick navbar to the top
    if (window.pageYOffset > 0) {
        navBar.addClass("sticky-nav-bar")
        header.css("padding-top", navBarHeight)
    }
    else {
        console.log("Removing")
        navBar.removeClass("sticky-nav-bar")
        header.css("padding-top", 0)
    }

    // Check which section is active at the moment

    let headerVisibile = (header.offset().top - window.pageYOffset) <= 0
    let aboutMeVisible = ($("#about-me").offset().top - window.pageYOffset - navBarHeight) <= 0
    let skillsVisible = ($("#skills").offset().top - window.pageYOffset - navBarHeight) <= 0
    let workVisible = ($("#work").offset().top - window.pageYOffset - navBarHeight) <= 0
    let contactMeVisible = ($("#contact-me").offset().top - window.pageYOffset - navBarHeight) <= 0

    console.log("About me" + aboutMeVisible)
    console.log("skills " + skillsVisible)
    console.log("Work " + workVisible)
    console.log("contact me " + contactMeVisible)

    if (headerVisibile) {
        markNavLinkActive('#nav-link-home')
    }
    if (aboutMeVisible) {
        markNavLinkActive("#nav-link-about-me")
    }
    if (skillsVisible) {
        markNavLinkActive("#nav-link-skills")
    }
    if (workVisible) {
        markNavLinkActive("#nav-link-work")
    }
    if (contactMeVisible) {
        markNavLinkActive("#nav-link-contact-me")
    }

}
