import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { actualDate } from "../utilities";

const FormStudent = (props) => {
    const actualD = actualDate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [genre, setGenre] = useState('');

    const [idStudent, setIdStudent] = useState('');
    const location = useLocation();

    useEffect(() => {
        let name = location.state;
        if (name) {
            console.log('data to edit',name);
            setIdStudent(name._id);
            setFirstName(name.firstName);
            setLastName(name.lastName);
            setBirthdate(name.birthdate);
            setEmail(name.email);
            setAddress(name.address);
            setGenre(name.genre);
        }
        
    }, [location.state])

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleBirthdate = (e) => {
        setBirthdate(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleAddress = (e) => {
        setAddress(e.target.value);
    }
    const handleGenre = (e) => {
        setGenre(e.target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const data = JSON.stringify({
            firstName:firstName,
            lastName:lastName,
            birthdate:birthdate,
            email:email,
            address:address,
            genre:genre
        })
        props.handleFormRequest(data, idStudent);
        handleClearForm();
    }

    const handleClearForm = () => {
        setFirstName('');
        setLastName('');
        setBirthdate('');
        setEmail('');
        setAddress('');
        setGenre('');
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-10 col-md-6 col-lg-4 mt-5">
                <form onSubmit={handleSubmitForm}>
                    <div className="mb-3">
                        <label forhtml="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" required id="firstName" onChange={handleFirstName} value={firstName}></input>
                    </div>
                    <div className="mb-3">
                        <label forhtml="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" onChange={handleLastName} value={lastName} ></input>
                    </div>
                    <div className="mb-3">
                        <label forhtml="birthdate" className="form-label">Birthdate</label>
                        <input type="date" className="form-control" id="birthdate" onChange={handleBirthdate} value={birthdate} max={actualD} ></input>
                    </div>
                    <div className="mb-3">
                        <label forhtml="email" className="form-label">Email</label>
                        <input type="email" className="form-control" required id="email" onChange={handleEmail} value={email}></input>
                    </div>
                    <div className="mb-3">
                        <label forhtml="address" className="form-label">Address</label>
                        <textarea name="address" id="address" cols="30" className="form-control" onChange={handleAddress} value={address} rows="2"></textarea>
                    </div>

                    <div className="d-flex justify-content-start mb-2">
                        <div className="form-check me-2">
                            <input className="form-check-input" type="radio" name="female" value="female" checked={genre === 'female'} 
                                    onChange={handleGenre} id="female"></input>
                            <label className="form-check-label" forhtml="female">
                                Female
                            </label>
                        </div>
                        <div className="form-check mx-2">
                            <input className="form-check-input" type="radio" name="male" value="male" checked={genre === 'male'} 
                                    onChange={handleGenre} id="male"></input>
                            <label className="form-check-label" forhtml="male">
                                Male
                            </label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-secondary w-25 mx-2" onClick={handleClearForm} >Cancel</button>
                    <button type="submit" className="btn btn-success w-25 mx-2">Submit</button>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}
export default FormStudent;