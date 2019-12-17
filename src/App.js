import React, { Component } from 'react';

const news = {
  "title": "Trump News ",
  "news": [
    {
      "id": "1",
      "keywords":"trump",
      "title": "22",
      "snippets": "11"
    },
    
  ]
};
const NewsList = ({ courses }) => (
  <div>
    { news.map(new => <Course course={ course } />) }
  </div>
);

const Course = ({ course }) => (
  <button>
    { getCourseTerm(course) } CS { getCourseNumber(course) }: { course.title }
  </button>
);

class App extends Component {
  render(){
    return(
      <div>

      </div>
  )}}
export default App