import { useEffect, useState } from "react";
import { API_URL } from "../Api";
import DataTable from "react-data-table-component";

const StudentsList = () => {

    const [data, setData] = useState([]);

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
        let dataTable = data.map((student, idx) => {
            let obj = {
                id: idx+1, 
                studentName:student.firstName + ' ' + student.lastName,
                edit: <i className="fas fa-edit" value={student._id} />,
                delete: <i className="fas fa-trash-alt" value={student._id} />
            }
            return obj;
        });
        console.log(dataTable);
        setData(dataTable);
    }

    useEffect(() => {
        getStudents();
    }, []);

    return (
        <div className="container d-flex justify-content-center mb-4">
            <div className="col-10 col-md-10 col-lg-10 mt-5">
            <DataTable 
                columns={columns}
                data={data}
            />
            </div>
        </div>
    )
}

export default StudentsList;