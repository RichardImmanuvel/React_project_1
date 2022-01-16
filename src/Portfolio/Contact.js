import "./Contact.css";
import { Fragment } from "react/cjs/react.production.min";
const Contact = () => {
    return (
        <>
        <fieldset class="fdc border-2 border-double rounded-lg border-black">
        <legend class="text-lg font-bold text-blue-800">Contact</legend>
        <div class="flex flex-row mx-7 my-3">
            <div class="box11">
                <section className="">
                <h3 class="mx-4">Richard Immanuvel</h3>
                <h4 class="mx-4">s/o Mr.A.ARUL JOSEPH</h4>
                <address class="mx-4">49/161/D3, Navanagar Colony, Senthamil Nagar, Pettai,<br></br> Tirunelveli – 627 010</address>
                </section>
            </div>
            <div class="box22">
                <section className="">
                <h4 class="mx-4">Contact no: 9655027743</h4>
                <h4 class="mx-4">Email: <a href="" class="underline text-blue-900">richardimmanuvel1999@gmail.com</a></h4>
                <h4 class="mx-4">linkedin id:<br></br><a href="https://www.linkedin.com/in/richard-immanuvel-a0695117b" target="_blank" class="underline text-blue-900">richard-immanuvel-a0695117b</a></h4>
                </section>
            </div>
        
        </div>
        </fieldset>
        </>
    )
}

export default Contact
