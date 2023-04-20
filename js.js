function toast({ title = '', msg = '', type = 'Info', duration = 1000 }) {
    const main = document.getElementById("toast");
    const icons = {
        Success: 'fa-regular fa-circle-check',
        Info: 'fa-sharp fa-solid  fa-circle-info',
        Error: 'fa-sharp fa-solid fa-circle-exclamation'
    }
    const icon = icons[type]
    const delay_time = (duration / 1000).toFixed(2);

    if (main) {
        const toast = document.createElement("div");

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `ShowAlert ease .8s, CloseAlert linear 1s ${delay_time}s forwards`;
        toast.innerHTML = ` 
            <div class="toast__icon"> <i class="${icon}"></i> </div> 
            
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${msg}</p>
            </div>

            <div class="toast__close"> <i class="fa-sharp fa-solid fa-xmark"></i> </div> `;

        main.appendChild(toast);


        //Remove after few second 
        const autoRemove = setTimeout(function () {
            main.removeChild(toast)
        }, duration + 1000)



        //Remove click
        toast.onclick = function (e) { //target la click vao
            //console.log(e.target)
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemove) //click thi clear Timeout tranh error
            }
        }
    }
}


function showSuc() {
    toast({
        title: 'Success',
        msg: 'Font Awesome is hiring a product designer to help us take Shoelace',
        type: 'Success',
        duration: 5000,
    });
}

function showWar() {  
    toast({
        title: 'Error',
        msg: 'Font Awesome is hiring a product designer to help us take Shoelace',
        type: 'Error',
        duration: 5000,
    });
}