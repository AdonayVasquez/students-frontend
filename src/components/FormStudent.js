const FormStudent = (props) => {

    const handleSubmitForm = (e) => {
        e.preventDefault();
        props.handleFormRequest('probando');
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-10 col-md-6 col-lg-4 mt-5">
                <form onSubmit={handleSubmitForm}>
                    <div className="mb-3">
                        <label forhtml="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName"></input>
                    </div>
                    <div className="mb-3">
                        <label forhtml="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName"></input>
                    </div>
                    <div className="mb-3">
                        <label forhtml="birthdate" className="form-label">Birthdate</label>
                        <input type="date" className="form-control" id="birthdate"></input>
                    </div>
                    <div className="mb-3">
                        <label forhtml="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email"></input>
                    </div>
                    <div className="mb-3">
                        <label forhtml="address" className="form-label">Address</label>
                        <textarea name="address" id="address" cols="30" className="form-control" rows="2"></textarea>
                    </div>

                    <div className="d-flex justify-content-start mb-2">
                        <div className="form-check me-2">
                            <input className="form-check-input" type="radio" name="female" id="female"></input>
                            <label className="form-check-label" forhtml="female">
                                Female
                            </label>
                        </div>
                        <div className="form-check mx-2">
                            <input className="form-check-input" type="radio" name="male" id="male"></input>
                            <label className="form-check-label" forhtml="male">
                                Male
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success w-25 d-block m-auto">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default FormStudent;