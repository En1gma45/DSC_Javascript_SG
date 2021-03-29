import './App.css';

function App() {
  return (
    <div>
      
      <div className="App">

        <div className="card">
          <div className="logo">
            
          </div>

          <div className="container">
            <div className="content">
              <h1 className="container__title">FAQ</h1>

              <div className="list">

                <div className="list__item" onClick = {()=>ShowDropdown("1")}>
                  <div id="first_question" className="list__question">How many team members can I invite?<span className="arrow__icon"></span></div>
                  <div className="list__answer" id="1">You can invite up to 2 additional users on the Free plan. There is no limit on 
                  team members for the Premium plan.</div>
                </div>

                <div className="list__item" onClick = {()=>ShowDropdown("2")}>
                  <div id="second_question" className="list__question">What is the maximum file upload size?<span className="arrow__icon"></span></div>
                  <div className="list__answer" id="2">No more than 2GB. All files in your account must fit your allotted storage space.</div>
                </div>

                <div className="list__item" onClick = {()=>ShowDropdown("3")}>
                  <div id="third_question" className="list__question">How do I reset my password?<span className="arrow__icon"></span></div>
                  <div className="list__answer" id="3">Click “Forgot password” from the login page or “Change password” from your profile page.
                  A reset link will be emailed to you.</div>
                </div>

                <div className="list__item" onClick = {()=>ShowDropdown("4")}>
                  <div id="fourth_question" className="list__question">Can I cancel my subscription?<span className="arrow__icon"></span></div>
                  <div className="list__answer" id="4">Yes! Send us a message and we’ll process your request no questions asked.</div>
                </div>

                <div className="list__item" onClick = {()=>ShowDropdown("5")}>
                  <div id="fifth_question" className="list__question">Do you provide additional support?<span className="arrow__icon"></span></div>
                  <div className="list__answer" id="5">Chat and email support is available 24/7. Phone lines are open during normal business hours.</div>
                </div>

              </div>
            </div>
          </div>
          <footer>
              <small>Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.</small>
              <small>Coded by <a href=" ">En1gma45</a>.</small>
          </footer>
        </div>
      </div>
    </div>
  );
}

const ShowDropdown = (id) =>{
  let elem = document.getElementById(id)
  let style = getComputedStyle(elem, null)
  elem.parentElement.classList.toggle("active")
  return  style.display === "none" ? elem.style.display = "block" : elem.style.display = "none" 
}

export default App;
