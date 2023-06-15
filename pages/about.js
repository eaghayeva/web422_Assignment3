import React from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

// This function is called at build time
export function getStaticProps() {
  return new Promise((resolve,reject)=>{
      fetch("https://dull-frock-cow.cyclic.app/api/movies/573a1399f29313caabceeb20")
          .then(res => res.json())
          .then(data => {
              // Assign the data to props that we could use in our function
              resolve({ props: { staticPost: data } })
          })
          .catch(err => {
              reject(err);
          })
  })
}

export default function About({ staticPost }) {
  return (
      <>
          <PageHeader text="About the Developer: Emiliya Aghayeva" />
          <Card>
              <Card.Body>
                I am currently a student at Seneca College where I am pursuing a Diploma in Computer Programming. I have keen interest in Computer Science and Software Development and my main goal is work towards the advancement of Information Technology. <br /><br />
                I have a son, who I spend the most of my time with. Despite he is 7 years old I try to involve him to computer programming as it is future.  <br /><br />
                In addition, I am always prepared to learn new things and gain new experiences. I enjoy meeting people, expanding my networking and always eager to acquire new knowledge and experiences, and I approach every opportunity as a chance for personal and professional growth. <br /><br />
                There are a lot of movies that are my favourite and one of them is {' '}
                  <Link href="/movies/The Shawshank Redemption" legacyBehavior>
                      <a>&quot;The Shawshank Redemption&quot;</a>
                  </Link>{' '}
                  (released in 1994). <br /><br />
              </Card.Body>
              <MovieDetails movie={ staticPost } /> 
          </Card>
      </>
  );
}
