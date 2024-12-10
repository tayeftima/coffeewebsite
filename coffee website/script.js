function openModal(image){
    Modal = document.getElementById("modal");
    Modal_image = document.getElementById("modal-image");

    Modal.style.display="flex"
    Modal_image.src = image.src

    }

    function closeModal(){
        Modal = document.getElementById("modal");

         Modal.style.display="none"

        }