<template>
    <section class="container gap-5 d-flex flex-column">
        <!-- Contact info -->
        <div class="row g-3">
            <div class="col-12 d-flex justify-content-between">
                <h5 class="pop text-center text-primary text-lg-start">Contact Info</h5>
                <button class="btn btn-sm btn-outline-primary">Save profile</button>
            </div>
            <div class="col-12">
                <img src="https://picsum.photos/200" alt="profile pic" width="70" height="70" class="img-fluid rounded-circle shadow-sm">
                <div class="mt-3">
                    <label for="formFile" class="form-label ps-1 fs-smaller pop">Set new profile pic </label>
                    <input type="file" class="form-control" id="inputGroupFile04" accept="image/png, image/jpg, image/jpeg">
                </div>
            </div>
            
            <div class="col-12 col-lg-6">
                <div class="form-floating">
                    <textarea class="form-control" rows="4" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Your bio</label>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput1" placeholder="name@example.com">
                    <label for="floatingInput1">Email address</label>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput2" placeholder="name@example.com">
                    <label for="floatingInput2">Phone number</label>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput3" placeholder="name@example.com">
                    <label for="floatingInput3">Whatsapp call</label>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput4" placeholder="name@example.com">
                    <label for="floatingInput4">Whatsapp chat</label>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput5" placeholder="name@example.com">
                    <label for="floatingInput5">Whatsapp group</label>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput6" placeholder="name@example.com">
                    <label for="floatingInput6">LinkedIn</label>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput7" placeholder="name@example.com">
                    <label for="floatingInput7">Github</label>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput8" placeholder="name@example.com">
                    <label for="floatingInput8">Youtube</label>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput9" placeholder="name@example.com">
                    <label for="floatingInput9">Stack overflow</label>
                </div>
            </div>
        </div>

        <!-- Adding Links -->
        <div class="row g-3">
            <div class="col-12 d-flex justify-content-between">
                <h5 class="pop text-primary text-center text-lg-start">Custom links</h5>
                <button class="btn btn-sm btn-outline-primary">Add link</button>
                <!-- <span class="material-symbols-outlined fs-3 text-primary point" title="add link">add_link</span> -->
            </div>
            <div class="col-12 col-lg-6">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Link title</label>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Link URL</label>
                </div>
            </div>
        </div>

        <!-- Adding Slides -->
        <div class="row g-3">
            <div class="col-12 d-flex justify-content-between">
                <h5 class="pop text-primary text-center text-lg-start">Image slides</h5>
                <button class="btn btn-sm btn-outline-primary">Add Image</button>
                <!-- <span class="material-symbols-outlined fs-3 text-primary point" title="save image">save</span> -->
            </div>
            <div class="col-12 col-lg-6">
                <div class="mb-3">
                    <label for="formFile" class="form-label ps-1 fs-smaller pop">Alt text</label>
                    <input class="form-control" type="text" id="formFile">
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="mb-3">
                    <label for="formFile" class="form-label ps-1 fs-smaller pop">Select image </label>
                    <input class="form-control" type="file" id="formFile"  accept="image/png, image/jpg, image/jpeg">
                </div>
            </div>
        </div>


    </section>
</template>