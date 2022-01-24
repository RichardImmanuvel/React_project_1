import { Fragment } from "react/cjs/react.production.min";
const Contact = () => {
    return (
        <>
        <fieldset class=" font-serif border-2 border-double rounded-lg border-black mx-[2%] sm:mx-[20%]">
        <legend class="text-lg font-bold text-blue-800">CONTACT</legend>
        <div class="flex flex-col sm:flex-row mx-[5%] sm:mx-5 my-3">
            <div class="mx-[3%] sm:mx-[3%]">
                <section className="text-lg">
                <h3 class="sm:mx-4">Richard Immanuvel</h3>
                <h4 class="sm:mx-4">s/o Mr.A.ARUL JOSEPH</h4>
                <address class="sm:mx-4">49/161/D3, Navanagar Colony, Senthamil Nagar, Pettai,<br></br> Tirunelveli – 627 010</address>
                </section>
            </div>
            <div class="mx-[3%] sm:mx-[3%]">
                <section className="text-lg">
                <h4 class="sm:mx-4">Contact no: +91 9655027743</h4>
                <h4 class="sm:mx-4">Email: <a href="" class="underline text-blue-900">richardimmanuvel1999@gmail.com</a></h4>
                <h4 class="sm:mx-4">linkedin id:<br></br><a href="https://www.linkedin.com/in/richard-immanuvel-a0695117b" target="_blank" class="underline text-blue-900">richard-immanuvel-a0695117b</a></h4>
                </section>
            </div>
        </div>
        </fieldset>
        </>
    )
}

export default Contact
