const box = document.querySelector('.block')

let position = 0

const moveBox = () =>  {
    position++
    box.style.left = `${position}px`
    if (position <= 40){
        return moveBox()
    }else if(position >= 360){
        position = 0
    }else{
        position += 40
    }
}
box.addEventListener('click', moveBox)
