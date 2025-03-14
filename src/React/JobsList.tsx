import React, { useState } from "react";



const JobsList = () => {

    const jobs = {
        "Cuerpo de Investigaciones Científicas Penales y Criminalísticas": [
          "2021 - ACTUALIDAD",
          `Diseño, desarrollo y soporte a los sistemas informáticos utilizados por la
            institución y otros ministerios gubernamentales.
             Mis responsabilidades en el desarrollo son full-stack, utilizando en el back-end el
            lenguaje de programación PHP y su framework Laravel, en el front-end el
            desarrollo y el estilizado y funcionalidad lo realizo con CSS (tailwind) y Javascript
            nativo o con Jquery. También manejo lenguaje SQL, bases de datos PostgreSQL y
            MySQL y gestores de bases de datos como phpMyAdmin y pgAdmin.`,
        ],
        "Simple Data Corp (SDC)" : [
          "01-09-2023 - 01-08-2024",
          `Mis tareas consisten en el desarrollo de los requerimientos solicitado por la
            empresa, estos abarcan una amplia gama de tareas en las cuales puedo
            mencionar: Desarrollo de servicios SOAP y servicios REST en php, desarrollo de
            nuevas implementaciones en el sistema web como lo son: filtros, validaciones,
            mejoras en el UI/UX con Bootstrap, nuevos módulos o consumo de API's
            utilizando el framework de codeIgniter, Jquery y AJAX.
            Todo bajo un esquema de MVC, CI/CD, Git flow, entornos locales en Docker y
            metodologías ágiles como SCRUM.`,
    
        ],
      };

      
    return(
        <div className="w-lg h-auto rounded-md bg-gradient-to-r from-[#b3c7ff] to-[#9eb8fe] pt-[0.15rem] pb-[0.10rem]">
          {
            Object.entries(jobs).map(([job, info]) => (
              <div className="p-5 bg-[#121212] w-full h-full">
                <h1 className="text-[var(--white)] text-lg md:text-lg font-semibold md:mb-6"> {job} </h1>
                  {info.map((desc) => (
                    <div>
                      <h2> {desc} </h2>
                      <br />
                    </div>
                  ))}
              </div>
            ))
          }
        </div> 
    )
}

export default JobsList;
