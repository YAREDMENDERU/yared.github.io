const profile = document.getElementById('profile-card-container')
console.log(profile);
profile.addEventListener('click',displayThePage=>{
    profile.style.display = 'block'

})
function onWindowClick(e){
    displayThePage()

}


