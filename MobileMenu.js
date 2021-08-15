


var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;

// Turn off/on mobile menu
mobileMenu.addEventListener("click",function(){
    var isClose = header.clientHeight === headerHeight;
    if(isClose){
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
})

// Auto turn off mobile menu when choose

var menuItems = document.querySelectorAll('#nav li a[href*="#"]')

menuItems.forEach(function(element) {
    element.addEventListener("click",function(e){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
        if(isParentMenu){
            e.preventDefault(); // Loại bỏ hành vi mặc định
        }else{
            header.style.height = null;
        }
    })
})