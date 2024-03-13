"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


const TicketForm = () => {

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = () => { 
    console.log("submitted")
  }

    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem",
      };

      const [formData, setFormData] = useState(startingTicketData)
  return (
    <div className="flex justify-center">
        <form className="flex flex-col gap-3 w-1/2" method="post" onsSubmit={handleSubmit}>
            <h3>Create your ticket</h3>
            <label>Title</label>
            <input id="title" name="title" type="text" onChange={handleChange} required={True} value={formData.title} />

            <label>Description</label>
            <input id="description" name="description" onChange={handleChange} required={True} value={formData.description} />

            <label>Category</label>
            <select name="category" onChange={handleChange} value={formData.category} />
            <option value="hardware">hardware</option>
            <option value="project">project</option>

            <option value="software">software</option>

            </form> 
        </div>
  )
}

export default TicketForm
