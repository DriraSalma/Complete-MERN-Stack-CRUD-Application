import React, { useState, useEffect } from "react";
import axios from "axios";
//import Alert from "../components/Alert";
import InputGroup from "../components/InputGroup";
import { useNavigate, useParams } from "react-router-dom";


function Details() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.put(`/api/users/${id}`, form)
      .then(res => {
        navigate('/')
      })
      .catch(err => setErrors(err.response.data))

  }
  useEffect(() => {
    const fetchUsers = async () => {

      const res = await axios.get(`/api/users/${id}`);
      setForm(res.data);

    };

    fetchUsers();
  }, []);
  return (

    <div className=" container mt-4 col-12 col-lg-4">
      <form onSubmit={onSubmitHandler}>
        <InputGroup
          label="Email"
          type="text"
          name="Email"
          onChangeHandler={onChangeHandler}
          errors={errors.Email}
          value={form.Email}
        />
        <InputGroup
          label="LastName"
          type="text"
          name="LastName"
          onChangeHandler={onChangeHandler}
          errors={errors.LastName}
          value={form.LastName}
        />
        <InputGroup
          label="FirstName"
          type="text"
          name="FirstName"
          onChangeHandler={onChangeHandler}
          errors={errors.FirstName}
          value={form.FirstName}
        />
        <InputGroup
          label="Age"
          type="text"
          name="Age"
          onChangeHandler={onChangeHandler}
          errors={errors.Age}
          value={form.Age}

        />
        <button className="btn btn-primary" type="submit">Add user</button>
      </form>
    </div>

  )
}

export default Details
