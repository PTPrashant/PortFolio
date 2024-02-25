import React from 'react'

function AboutMe() {
  return (
    <div  id="aboutMe">
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='container' style={{textAlign:'center'}}>
    <h3>Academics</h3></div>
    <div className='container' style={{width:'60%'}}>
    <br/>

    <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Degree</th>
      <th scope="col">Board</th>
      <th scope="col">Institute Name</th>
      <th scope="col">Passing year</th>
      <th scope="col">Percentage</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">B.Tech</th>
      <td>A.K.T.U.</td>
      <td>Ajay Kumar Garg Engg College, Ghaziabad</td>
      <td>2017</td>
      <td>66.22% aggregate</td>

    </tr>
    <tr>
      <th scope="row">Intermediate</th>
      <td>C.B.S.E.</td>
      <td>Raj English School, Varanasi</td>
      <td>2012</td>
      <td>68.8%</td>
    </tr>
    <tr>
    <th scope="row">Matriculation</th>
    <td>C.B.S.E.</td>
    <td>Sunbeam Academy, Varanasi</td>
    <td>2010</td>
    <td>84%</td>
    </tr>
  </tbody>
</table>
  </div>
  <br/>
    <br/>
    <br/>

  <div className='container' style={{textAlign:'center'}}>
  <h3>Interests</h3></div>
  <br/>
  <div className='container' style={{width:'60%'}}> 
  <table style={{width:'60%'}} className='container table'>
  <td>Gym Workout</td>
  <td>Bike Ride</td>
  <td>Photography</td>
  <td>Swimming</td>
  </table>
  </div>
  <br/>
  <br/>
  <br/>

    </div>
  )
}

export default AboutMe
