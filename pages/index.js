/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: _____Emiliya Aghayeva_________________ Student ID: _______148398217___________ Date: ______15/06/2023______________
*
*  Netlify: https://gentle-alpaca-452ae4.netlify.app/
********************************************************************************/ 


import React, { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import useSWR from 'swr';
import MovieDetails from "@/components/MovieDetails";
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';


export default function Home() {
  // Adding state values
  let [ page, setPage ] = useState(1);
  let [ pageData, setPageData ] = useState([]);

  // Using SWR to make a request for the data
  const { data, error } = useSWR(`https://dull-frock-cow.cyclic.app/api/movies?page=${page}&perPage=10`);

  // Whenever the "data" has been successfully updated, the screen data is updated in real time
  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);  

  // Decreases the page state value by 1 if it is greater than 1
  const previous = () => {
    (page > 1) && setPage(--page);
  }
  // Increases the page state value by 1
  const next = () => {
    setPage(++page);
  }

  return (
    <>
      <PageHeader text="Film Collection: Sorted by Date"/>
      <Accordion defaultActiveKey="0">
        {/* Loading an accordion for each movie in the pageData array */}
        {
          pageData.map((movie, i) => (
            <Accordion.Item eventKey={movie._id} key={movie._id}>
              <Accordion.Header><strong>{movie.title}</strong><pre> </pre>({movie.year}: Directed By {movie.directors.join(", ")})</Accordion.Header>
              <Accordion.Body>
                <MovieDetails movie={ movie } />
              </Accordion.Body>
            </Accordion.Item>
          ))
        }
      </Accordion>
      <br />
      
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  )
}
