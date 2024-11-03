import React, { useState } from "react";
import jsPDF from "jspdf";

const CreatePage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experiences: [{ title: "", company: "", years: "" }],
        educations: [{ degree: "", institution: "", years: "" }],
    });

    const handleChange = (data) => {
        setFormData({ ...formData, ...data });
    };

    const addExperience = () => {
        setFormData((prevData) => ({
            ...prevData,
            experiences: [
                ...prevData.experiences,
                { title: "", company: "", years: "" },
            ],
        }));
    };

    const handleDeleteExperience = (index) => {
        const updatedExperiences = formData.experiences.filter(
            (_, i) => i !== index
        );
        setFormData({ ...formData, experiences: updatedExperiences });
    };

    const addEducation = () => {
        setFormData((prevData) => ({
            ...prevData,
            educations: [
                ...prevData.educations,
                { degree: "", institution: "", years: "" },
            ],
        }));
    };

    const handleDeleteEducation = (index) => {
        const updatedEducations = formData.educations.filter(
            (_, i) => i !== index
        );
        setFormData({ ...formData, educations: updatedEducations });
    };

    const handleChangeExperience = (index, event) => {
        const newExperiences = formData.experiences.map((exp, i) =>
            i === index
                ? { ...exp, [event.target.name]: event.target.value }
                : exp
        );
        setFormData({ ...formData, experiences: newExperiences });
    };

    const handleChangeEducation = (index, event) => {
        const newEducations = formData.educations.map((edu, i) =>
            i === index
                ? { ...edu, [event.target.name]: event.target.value }
                : edu
        );
        setFormData({ ...formData, educations: newEducations });
    };

    const handleDownload = () => {
        const doc = new jsPDF();
        doc.text(`CV\n\n`, 10, 10);
        doc.text(`First name: ${formData.firstName}`, 10, 20);
        doc.text(`Last name: ${formData.lastName}`, 10, 30);
        doc.text(`Email: ${formData.email}`, 10, 40);
        doc.text(`Phone number: ${formData.phone}`, 10, 50);

        formData.experiences.forEach((exp, index) => {
            doc.text(
                `Experience ${index + 1}: ${exp.title} at ${exp.company} (${
                    exp.years
                })`,
                10,
                60 + index * 10
            );
        });

        formData.educations.forEach((edu, index) => {
            doc.text(
                `Education ${index + 1}: ${edu.degree} from ${
                    edu.institution
                } (${edu.years})`,
                10,
                100 + index * 10
            );
        });

        doc.save("resume.pdf");
    };

    return (
        <div className="create-page">
            <h1>Create CV</h1>
            <div>
                <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                        handleChange({ firstName: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleChange({ lastName: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleChange({ email: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => handleChange({ phone: e.target.value })}
                />
            </div>
            <h2>Experience</h2>
            {formData.experiences.map((exp, index) => (
                <div key={index} className="education-entry">
                    <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        value={exp.title}
                        onChange={(event) =>
                            handleChangeExperience(index, event)
                        }
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={exp.company}
                        onChange={(event) =>
                            handleChangeExperience(index, event)
                        }
                    />
                    <input
                        type="text"
                        name="years"
                        placeholder="Years"
                        value={exp.years}
                        onChange={(event) =>
                            handleChangeExperience(index, event)
                        }
                    />
                    <button onClick={() => handleDeleteExperience(index)}>
                        Delete
                    </button>
                </div>
            ))}
            <button onClick={addExperience}>Add Experience</button>
            <h2>Education</h2>
            {formData.educations.map((edu, index) => (
                <div key={index} className="education-entry">
                    <input
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(event) =>
                            handleChangeEducation(index, event)
                        }
                    />
                    <input
                        type="text"
                        name="institution"
                        placeholder="Institution"
                        value={edu.institution}
                        onChange={(event) =>
                            handleChangeEducation(index, event)
                        }
                    />
                    <input
                        type="text"
                        name="years"
                        placeholder="Years"
                        value={edu.years}
                        onChange={(event) =>
                            handleChangeEducation(index, event)
                        }
                    />
                    <button onClick={() => handleDeleteEducation(index)}>
                        Delete
                    </button>
                </div>
            ))}
            <button onClick={addEducation}>Add Education</button>
            <button onClick={handleDownload} id="download-button">
                Download CV
            </button>
        </div>
    );
};

export default CreatePage;
