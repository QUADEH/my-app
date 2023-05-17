import React from 'react'

export default function Page2() {
  return (
    <div style = {{textAlign: "center"}}>
      <h1>My Achievements and Goals</h1>

      <p>Firstly, I have quite a few achievements under my belt, already,
         and I'm happy to talk about them because they keep me going.
      </p>

          <p>I graduated from South Johnston High School in the Top 30 of my class.</p>
          <div style={{ margin: '100px' }}>
            <img src="https://reactjs.org/logo-og.png" alt="react logo" style={{ width: '400px', }}/>
          </div>
        
        
          <p>I graduated from Johnston Community College in both 2017 and 2022, respectively,
            with Associates in Arts,Science, Accounting, and Finance with a 3.8 GPA.
          </p>

          <div style={{ margin: '100px' }}>
            <img src= {require ("./images/profimage.png")}
                 alt="Quaid getting ready for school"
                 style={{ width: '400px', }}/></div>

          <p>I took the Summer of 2022 to study for my Life and Health & Accident Insurance Licenses,
            in order to become a Financial Advisor.
          </p>
          <div style={{ margin: '100px' }}>
            <img src="https://reactjs.org/logo-og.png" alt="react logo" style={{ width: '400px', }}/>
          </div>
        I began my venture into Software Engineering in March of 2023 and am mostly self-taught. I would say
          that I've learned quite a lot thus far and I will keep learning for the foreseeable future.
        
        <div style={{ margin: '100px' }}>
          <img src="https://reactjs.org/logo-og.png" alt="react logo" style={{ width: '400px', }}/>
    </div>
  </div>
  )
}