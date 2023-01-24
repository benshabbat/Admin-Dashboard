export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cell-with-img">
          <img className="cell-img" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 180,
    renderCell: (params) => {
      return (
        <span className={`status ${params.row.status}`}>
          {params.row.status}
        </span>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Shimon",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "active",
    email: "shimon@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Noa",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "passive",
    email: "noa@gmail.com",
    age: 24,
  },
  {
    id: 3,
    username: "Amnon",
    img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "pending",
    email: "amnon@gmail.com",
    age: 37,
  },
  {
    id: 4,
    username: "Revital",
    img: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "active",
    email: "revital@gmail.com",
    age: 24,
  },
  {
    id: 5,
    username: "Yaakov",
    img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "active",
    email: "yaakov@gmail.com",
    age: 39,
  },
];
