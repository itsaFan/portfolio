import "./css/Edu.css"
import  splashRight  from "../assets/img/splash-right.png";

export const Education = () => {

    return (
        <section className="edu" id="skills">
        <div className="container justify-content-center pb-5">
            <div className="row justify-content-center">
                <div className="col-10">
                    <div className="edu-bx wow zoomIn">
                        <h3>Education Qualification</h3>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th>Examination</th>
                                    <th>Institute</th>
                                    <th>Year of Passing</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Diploma in Computing</td>
                                    <td>Lithan Pvt. Ltd</td>
                                    <td>Ongoing</td>
                                </tr>
                                <tr>
                                    <td>Bachelor in Information Systems</td>
                                    <td>ITB-Stikom Bali University</td>
                                    <td>Ongoing</td>
                                </tr>
                                <tr>
                                    <td>Bachelor in Psychology</td>
                                    <td>Pelita Harapan University</td>
                                    <td>2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <img className="background-image-right" src={splashRight} alt="Image" />
        <br></br>
    </section>

    )
}