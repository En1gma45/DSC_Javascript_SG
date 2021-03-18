import './App.css';

function App() {
  return (
    <div className="App">
        <div className="logo"></div>

        <div className="container">
          <div className="content">
            <h1 className="container__title">FAQ</h1>

            <div className="list">

              <div onClick = {()=>ShowDropdown("1")}>
                <div id="first_question" className="list__question">How many team members can I invite?<span className="arrow__icon"></span></div>
                <div className="list__answer" id="1">You can invite up to 2 additional users on the Free plan. There is no limit on 
                team members for the Premium plan.</div>
              </div>

              <div onClick = {()=>ShowDropdown("2")}>
                <div id="second_question" className="list__question">What is the maximum file upload size?<span className="arrow__icon"></span></div>
                <div className="list__answer" id="2">No more than 2GB. All files in your account must fit your allotted storage space.</div>
              </div>

              <div onClick = {()=>ShowDropdown("3")}>
                <div id="third_question" className="list__question">How do I reset my password?<span className="arrow__icon"></span></div>
                <div className="list__answer" id="3">Click “Forgot password” from the login page or “Change password” from your profile page.
                A reset link will be emailed to you.</div>
              </div>

              <div onClick = {()=>ShowDropdown("4")}>
                <div id="fourth_question" className="list__question">Can I cancel my subscription?<span className="arrow__icon"></span></div>
                <div id="4">Yes! Send us a message and we’ll process your request no questions asked.</div>
              </div>

              <div onClick = {()=>ShowDropdown("5")}>
                <div id="fifth_question" className="list__question">Do you provide additional support?<span className="arrow__icon"></span></div>
                <div className="list__answer" id="5">Chat and email support is available 24/7. Phone lines are open during normal business hours.</div>
              </div>

            </div>
          </div>
        </div>
        <footer>
            <small>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</small>
            <small>Coded by <a href="#">En1gma45</a>.</small>
        </footer>
    </div>
  );
}

const ShowDropdown = (id) =>{
  let elem = document.getElementById(id)
  let style = getComputedStyle(elem, null)
  return  style.display == "none" ? elem.style.display = "block" : elem.style.display = "none" 
}

export default App;





















/*
          <div className="dropdown">
            <div onClick = {()=>ShowDropdown("1")}>
              <div id="first_question" className="dropdown_item">How many team members can I invite?<img src={Arrow_icon} className="arrow" /></div>
              <div for="first_question" className="dropdown_hiden" id="1">You can invite up to 2 additional users on the Free plan. There is no limit on 
              team members for the Premium plan.</div>
            </div>
            <div onClick = {()=>ShowDropdown("2")}>
              <div id="second_question" className="dropdown_item">What is the maximum file upload size?<img src={Arrow_icon} className="arrow" /></div>
              <div for="second_question" className="dropdown_hiden" id="2">No more than 2GB. All files in your account must fit your allotted storage space.</div>
            </div>
            <div onClick = {()=>ShowDropdown("3")}>
              <div id="third_question" className="dropdown_item">How do I reset my password?<img src={Arrow_icon} className="arrow" /></div>
              <div for="third_question" className="dropdown_hiden" id="3">Click “Forgot password” from the login page or “Change password” from your profile page.
              A reset link will be emailed to you.</div>
            </div>
            <div onClick = {()=>ShowDropdown("4")}>
              <div id="fourth_question" className="dropdown_item">Can I cancel my subscription?<img src={Arrow_icon} className="arrow" /></div>
              <div for="fourth_question" className="dropdown_hiden" id="4">Yes! Send us a message and we’ll process your request no questions asked.</div>
            </div>
            <div onClick = {()=>ShowDropdown("5")}>
              <div id="fifth_question" className="dropdown_item">Do you provide additional support?<img src={Arrow_icon} className="arrow" /></div>
              <div for="fifth_question" className="dropdown_hiden" id="5">Chat and email support is available 24/7. Phone lines are open during normal business hours.</div>
            </div>
          </div>
*/