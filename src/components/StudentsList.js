import { useEffect, useState } from "react";
import { API_URL } from "../Api";
import DataTable from "react-data-table-component";

const StudentsList = () => {

    const [data, setData] = useState([]);
    const [table, setTable] = useState([]);

    const handleDetails = () => {
        console.log('ver detalle');
    }

    const handleEditStudent = () => {
        console.log('edit');
    }

    const handleDeleteStudent = () => {
        console.log('delete');
    }

    const columns = [
        {
            name: "#",
            selector: "id",
            sortable: true
        },
        {
            name: "Student Name",
            selector: "studentName",
            sortable: true
        },
        {
            name: "Edit",
            selector: "edit"
        },
        {
            name: "Delete",
            selector: "delete"
        },
        {
            name: "View Details",
            selector: "viewDetails"
        }
      ];

    const getStudents = async () => {
        let response = await fetch(API_URL);
        let data = await response.json();
        setData(data);
    }

    useEffect(() => {
        getStudents(); // Get students from API at first render
    }, []);

    useEffect(() => {
        let dataTable = data.map((student, idx) => { // Structure the data that will be rendered in the table
            let obj = {
                id: idx+1, 
                studentName:student.firstName + ' ' + student.lastName,
                edit: <i className="fas fa-edit" onClick={handleEditStudent} value={student._id} />,
                delete: <i className="fas fa-trash-alt" onClick={handleDeleteStudent} value={student._id} />,
                viewDetails: <p className="btn-details" onClick={handleDetails}>details</p>
            }
            return obj;
        });
        console.log(dataTable);
        setTable(dataTable);
    }, [data])

    return (
        <div className="container d-flex justify-content-center mb-4">
            <div className="col-10 col-md-10 col-lg-10 mt-5">
            <DataTable 
                columns={columns}
                data={table}
            />
            </div>
        </div>
    )
}

export default StudentsList;