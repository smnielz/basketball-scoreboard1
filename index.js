let homeEl = document.getElementById("home-block")
let home = 0

function homeRun()
{
   if(home > guest)
    {
        homeEl.style.color = "yellow";
        guestEl.style.color = "#F94F6D";
    }
    else if(home < guest)
    {
        homeEl.style.color = "#F94F6D";
        guestEl.style.color = "yellow";
    } 
    else
    {
        homeEl.style.color = "#F94F6D";
        guestEl.style.color = "#F94F6D";
    }
}


function home1()
{
    home += 1
    homeEl.textContent = home    
    homeRun()    
}

function home2()
{
    home += 2
    homeEl.textContent = home
    homeRun()
}

function home3()
{
    home += 3
    homeEl.textContent = home
    homeRun()
}

let guestEl = document.getElementById("guest-block")
let guest = 0
function guest1()
{
    guest += 1
    guestEl.textContent = guest
    homeRun()
}

function guest2()
{
    guest += 2
    guestEl.textContent = guest
    homeRun()
}

function guest3()
{
    guest += 3
    guestEl.textContent = guest
    homeRun()
}