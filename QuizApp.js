import React, { useState, useEffect } from "react";

const QuizApp = () => {
// ---------------- STYLES ----------------
const boxStyle = {
  width: 420,
  padding: 30,
  borderRadius: 10,
  backgroundColor: "rgba(0,0,0,0.85)",
  textAlign: "center",
  boxShadow: "0 0 15px rgba(0,0,0,0.7)",
  color: "white"
};

const inputStyle = {
  width: "95%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginBottom: "12px",
  outline: "none"
};

const menuStyle = {
  width: 200,
  background: "#222",
  color: "white",
  padding: 20,
  cursor: "pointer"
};

const loginPageStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1588072432836-e10032774350')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const buttonStyle = {
  background: "#0b3d91",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold"
};

const dashboardContainer = {
  display: "flex",
  height: "100vh"
};

const sidebarStyle = {
  width: "220px",
  background: "#0b3d91",
  color: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const menuBtn = {
  padding: "12px",
  border: "none",
  background: "white",
  cursor: "pointer",
  fontWeight: "bold",
  borderRadius: "5px"
};

const contentArea = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b')",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const cardBox = {
  background: "white",
  padding: "25px",
  borderRadius: "12px",
  textAlign: "center",
  width: "320px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
};

const welcomeBox = {
  color: "black",
  textAlign: "center",
  fontSize: "33px"
};

const quizBox = {
  width: "400px",
  background: "linear-gradient(135deg,#0b3d91,#000)",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 0 15px rgba(0,0,0,0.5)"
};

const nextBtn = {
  marginTop: "10px",
  padding: "10px 20px",
  border: "none",
  background: "orange",
  fontWeight: "bold",
  cursor: "pointer",
  borderRadius: "5px"
};

const quizContainer = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg,#000,#0b3d91)"
};

const resultContainer = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg,#0b3d91,#000)"
};

const resultBox = {
  width: "500px",
  background: "white",
  padding: "40px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 0 20px rgba(0,0,0,0.5)"
};

const scoreRow = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "30px"
};

const scoreCard = {
  background: "#0b3d91",
  color: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "30%",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
};

const resultBtn = {
  marginTop: "30px",
  padding: "12px 25px",
  border: "none",
  background: "orange",
  fontWeight: "bold",
  borderRadius: "6px",
  cursor: "pointer"
};

  // ---------------- STATES ----------------
  const [page, setPage] = useState("login"); // login | dashboard | quiz | result
  const [menu, setMenu] = useState("");

  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  const [subject, setSubject] = useState("");
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);

  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const [newName,setNewName] = useState("");
  const [newId,setNewId] = useState("");
  const [school,setSchool] = useState("");
  const [className,setClassName] = useState("");
  const [email,setEmail] = useState("");

  const [exName,setExName] = useState("");
  const [exId,setExId] = useState("");
  const [exEmail,setExEmail] = useState("");

  // ---------------- QUESTIONS ----------------
const questions = {
  Tamil: [
    { question: "தமிழின் முதல் எழுத்து?", options: ["அ","ஆ","இ","ஈ"], answer: "அ" },
    { question: "திருக்குறள் எழுதியவர்?", options: ["கம்பர்","வள்ளுவர்","இளங்கோ","பாரதி"], answer: "வள்ளுவர்" },
    { question: "தமிழின் கடைசி எழுத்து எது?", options: ["ள்","ன்","ம்","ழ்"], answer: "ள்" },
    { question: "சிலப்பதிகாரம் எழுதியவர் யார்?", options: ["கம்பர்","இளங்கோ","வள்ளுவர்","பாரதி"], answer: "இளங்கோ" },
    { question: "தமிழ் மொழி எந்த குடும்பத்தை சேர்ந்தது?", options: ["ஆரிய","திராவிட","யூரோப்பிய","சமீப"], answer: "திராவிட" },
    { question: "பாரதியார் இயற்பெயர்?", options: ["சுப்பிரமணியன்","ராமன்","முருகன்","அருண்"], answer: "சுப்பிரமணியன்" },
    { question: "குறள் எத்தனை அடிகள் கொண்டது?", options: ["1","2","3","4"], answer: "2" },
    { question: "தமிழ் தாய் வாழ்த்து எழுதியவர்?", options: ["பாரதி","பாரதிதாசன்","வள்ளுவர்","கம்பர்"], answer: "பாரதிதாசன்" },
    { question: "தமிழ் எந்த மாநிலத்தின் மொழி?", options: ["கேரளா","ஆந்திரா","தமிழ்நாடு","கர்நாடகா"], answer: "தமிழ்நாடு" },
    { question: "செம்மொழி என அழைக்கப்படும் மொழி?", options: ["தமிழ்","ஹிந்தி","ஆங்கிலம்","தெலுங்கு"], answer: "தமிழ்" }
  ],

  English: [
    { question: "Plural of Child?", options: ["Childs","Children","Child","Childes"], answer: "Children" },
    { question: "Opposite of Big?", options: ["Large","Huge","Small","Tall"], answer: "Small" },
    { question: "Opposite of Brave?", options: ["Bold","Strong","Coward","Fear"], answer: "Coward" },
    { question: "Past tense of Go?", options: ["Goed","Went","Go","Going"], answer: "Went" },
    { question: "Article before vowel sound?", options: ["a","an","the","no"], answer: "an" },
    { question: "Correct spelling?", options: ["Beautifull","Beautiful","Beautifal","Beutiful"], answer: "Beautiful" },
    { question: "Synonym of Happy?", options: ["Sad","Angry","Joyful","Cry"], answer: "Joyful" },
    { question: "He ___ playing cricket.", options: ["is","are","was","were"], answer: "is" },
    { question: "Antonym of Hot?", options: ["Warm","Cool","Cold","Heat"], answer: "Cold" },
    { question: "Sentence ends with?", options: ["Comma","Colon","Full stop","Slash"], answer: "Full stop" }
  ],

  Maths: [
    { question: "5 + 5 = ?", options: ["8","9","10","11"], answer: "10" },
    { question: "Square of 4?", options: ["8","12","16","20"], answer: "16" },
    { question: "5 + 7 = ?", options: ["10","11","12","13"], answer: "12" },
    { question: "Square of 5?", options: ["10","15","20","25"], answer: "25" },
    { question: "√81 = ?", options: ["7","8","9","10"], answer: "9" },
    { question: "Even number?", options: ["3","5","7","8"], answer: "8" },
    { question: "Cube of 2?", options: ["4","6","8","10"], answer: "8" },
    { question: "10 × 6 = ?", options: ["16","60","106","6"], answer: "60" },
    { question: "100 − 45 = ?", options: ["45","55","65","75"], answer: "55" },
    { question: "Value of π?", options: ["2.14","3.14","4.14","1.14"], answer: "3.14" }
  ],

  Science: [
    { question: "Water formula?", options: ["CO2","H2O","O2","NaCl"], answer: "H2O" },
    { question: "Sun is a?", options: ["Planet","Star","Moon","Asteroid"], answer: "Star" },
    { question: "Largest planet?", options: ["Earth","Mars","Jupiter","Venus"], answer: "Jupiter" },
    { question: "Human heart has ___ chambers?", options: ["2","3","4","5"], answer: "4" },
    { question: "Unit of force?", options: ["Watt","Newton","Joule","Pascal"], answer: "Newton" },
    { question: "Vitamin C rich fruit?", options: ["Apple","Banana","Orange","Grapes"], answer: "Orange" },
    { question: "Plants make food by?", options: ["Respiration","Photosynthesis","Digestion","Excretion"], answer: "Photosynthesis" },
    { question: "Gas used for breathing?", options: ["CO2","Oxygen","Nitrogen","Hydrogen"], answer: "Oxygen" },
    { question: "Boiling point of water?", options: ["50°C","100°C","150°C","200°C"], answer: "100°C" },
    { question: "Which organ helps in breathing?", options: ["Heart","Brain","Lungs","Kidney"], answer: "Lungs" }
  ],

  Social: [
    { question: "Capital of India?", options: ["Mumbai","Delhi","Chennai","Kolkata"], answer: "Delhi" },
    { question: "Father of Nation?", options: ["Nehru","Gandhi","Patel","Ambedkar"], answer: "Gandhi" },
    { question: "Capital of Tamil Nadu?", options: ["Madurai","Trichy","Salem","Chennai"], answer: "Chennai" },
    { question: "Independence year?", options: ["1945","1946","1947","1950"], answer: "1947" },
    { question: "National animal of India?", options: ["Lion","Elephant","Tiger","Horse"], answer: "Tiger" },
    { question: "Largest continent?", options: ["Africa","Europe","Asia","Australia"], answer: "Asia" },
    { question: "Indian national currency?", options: ["Dollar","Euro","Rupee","Yen"], answer: "Rupee" },
    { question: "Who wrote Indian Constitution?", options: ["Gandhi","Ambedkar","Nehru","Patel"], answer: "Ambedkar" },
    { question: "National flag colors count?", options: ["2","3","4","5"], answer: "3" },
    { question: "River Ganga originates from?", options: ["Yamunotri","Gangotri","Kedarnath","Badrinath"], answer: "Gangotri" }
  ]
};

  // ---------------- FUNCTIONS (FOR LOGIN DB) ----------------
const handleLogin = async () => {

if (!userName || !userId) {
alert("Enter Username and User ID");
return;
}

try {

const res = await fetch("http://localhost:5000/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name:userName,
id:userId
})
});

const data = await res.text();

console.log("Response:", data);

if(data === "Login Saved"){
setPage("dashboard");
}else{
alert("Login failed");
}

} catch(err){

console.log(err);
alert("Server Error");

}

};
//---- START QUIZ-----

const startQuiz = (sub) => {
  setSubject(sub);
  setCurrentQ(0);
  setScore(0);
  setPage("quiz");
  setSelectedOption("");
  setShowAnswer(false);
};

// HANDLE ANSWER
const handleAnswer = (option) => {

  if (showAnswer) return;

  setSelectedOption(option);
  setShowAnswer(true);

  if (option === questions[subject][currentQ].answer) {
    setScore(score + 1);
  }

};

// NEXT QUESTION
const nextQuestion = () => {

  setSelectedOption("");
  setShowAnswer(false);

  if (currentQ + 1 < questions[subject].length) {
    setCurrentQ(currentQ + 1);
  } else {
    setPage("result");
  }

};

  // ----------------------- REGISTER USER (DB) ----------------------
 
const registerUser = async () => {

try{

await fetch("http://localhost:5000/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name:newName,
id:newId,
school:school,
className:className,
email:email
})
});

alert("User Registered");

}catch(err){

alert("Server Error");

}

};
//-------------------- EXISTING USER(DB)-------------------
 const existingUser = async () => {

await fetch("http://localhost:5000/existingUser",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name:exName,
id:exId,
email:exEmail
})
});

alert("Existing User Verified");

};

 //-----------------QUIZ RESULT PAGE(DB)---------------------

 const saveResult = async () => {

await fetch("http://localhost:5000/saveResult",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
student_id:userId,
subject:subject,
score:score,
total:questions[subject].length,
percentage:Math.round((score / questions[subject].length) * 100)
})
});

};

useEffect(() => {

 if(page === "result"){
console.log("Saving Result...");
saveResult();
} 

}, [page]);
  
   // ---------------- LOGIN PAGE ----------------
if (page === "login") {
  return (
    <div style={loginPageStyle}>
      <div style={boxStyle}>
        <h2>Student Assessment Test</h2>
    <h1 style={{color:"white", marginBottom:"20px"}}>
Student Login
</h1>

<input
  style={inputStyle}
  placeholder="Student Name"
  onChange={(e) => setUserName(e.target.value)}
/> <br /><br />

<input
  style={inputStyle}
  placeholder="Student ID"
  onChange={(e) => setUserId(e.target.value)}
/> <br /><br />

       <button style={buttonStyle} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
  // ---------------- DASHBOARD ----------------
 if (page === "dashboard") {
  return (
    <div style={dashboardContainer}>

      {/* LEFT SIDEBAR */}
      <div style={sidebarStyle}>
        <h2>Quiz Menu</h2>

        <button style={menuBtn} onClick={() => setMenu("new")}>New User</button>
        <button style={menuBtn} onClick={() => setMenu("existing")}>Existing User</button>
        <button style={menuBtn} onClick={() => setMenu("weekly")}>Weekly Test</button>
        <button style={menuBtn} onClick={() => setMenu("subjects")}>Subjects</button>

      </div>

      {/* RIGHT CONTENT AREA */}
      <div style={contentArea}>

        {!menu && (
          <div style={welcomeBox}>
            <h2>Welcome {userName}</h2>
            <p>Select any option from the left menu to start.</p>
          </div>
        )}

    {menu === "new" && (
  <div style={cardBox}>
    <h2>New User Registration</h2>

    <input style={inputStyle} placeholder="Name"
      onChange={(e)=>setNewName(e.target.value)} />

    <input style={inputStyle} placeholder="ID"
      onChange={(e)=>setNewId(e.target.value)} />

    <input style={inputStyle} placeholder="School"
      onChange={(e)=>setSchool(e.target.value)} />

    <input style={inputStyle} placeholder="Class"
      onChange={(e)=>setClassName(e.target.value)} />

    <input style={inputStyle} placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)} />

    <br />
    <button style={buttonStyle} onClick={registerUser}>Submit</button>
  </div>
)}  
        
       {menu === "existing" && (
  <div style={cardBox}>
    <h2>Existing User</h2>

    <input style={inputStyle} placeholder="Name"
      onChange={(e)=>setExName(e.target.value)} />

    <input style={inputStyle} placeholder="ID"
      onChange={(e)=>setExId(e.target.value)} />

    <input style={inputStyle} placeholder="Email"
      onChange={(e)=>setExEmail(e.target.value)} />

    <br />
    <button style={buttonStyle} onClick={existingUser}>Submit</button>
  </div>
)}

        {menu === "weekly" && (
          <div style={cardBox}>
            <h2>Weekly Test Register</h2>

            <select>
              <option>Select Subject</option>
              <option>Tamil</option>
              <option>English</option>
              <option>Maths</option>
              <option>Science</option>
              <option>Social</option>
            </select>

            <br /><br />
            <button>Register</button>
          </div>
        )}

        {menu === "subjects" && (
          <div style={cardBox}>
            <h2>Select Subject</h2>

            {Object.keys(questions).map((sub) => (
              <button
                key={sub}
                style={{
                margin:"10px",
                padding:"12px 25px",
                background:"#0b3d91",
                color:"white",
                border:"none",
                borderRadius:"6px",
                cursor:"pointer"
}} 
                onClick={() => startQuiz(sub)}
              >
                {sub}
              </button>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

// ---------------- QUIZ PAGE ----------------

if (page === "quiz") {
  const q = questions[subject][currentQ];

  return (
    <div style={quizContainer}>
      <div style={boxStyle}>

        <h2 style={{marginBottom:"10px"}}>{subject} Quiz</h2>

        <p style={{marginBottom:"20px"}}>
          Question {currentQ + 1} / {questions[subject].length}
        </p>

        <h3 style={{marginBottom:"20px"}}>{q.question}</h3>

        {q.options.map((opt, i) => {
          let bg = "";

          if (showAnswer) {
            if (opt === q.answer) bg = "green";
            else if (opt === selectedOption) bg = "red";
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              style={{
                display: "block",
                width: "100%",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                backgroundColor: bg || "#1e90ff",
                color: "white"
              }}
            >
              {opt}
            </button>
          );
        })}

        {showAnswer && (
          <>
            <p style={{marginTop:"10px"}}>            
      {selectedOption === q.answer
       ? "✅ Correct Answer"
       : `❌ Wrong Answer (Correct: ${q.answer})`}           
 </p>

            <button
              onClick={nextQuestion}
              style={{
                marginTop:"15px",
                padding:"10px 20px",
                borderRadius:"5px",
                border:"none",
                background:"#0b3d91",
                color:"white",
                cursor:"pointer"
              }}
            >
              Next
            </button>
          </>
        )}

      </div>
    </div>
  );
}

   // ---------------- RESULT PAGE ----------------
if (page === "result") {

  const total = questions[subject].length;
  const percent = Math.round((score / total) * 100);

  let emoji = "🙂";

  if (percent >= 80) emoji = "🏆";
  else if (percent >= 60) emoji = "🎉";
  else if (percent >= 40) emoji = "👍";
  else emoji = "📚";

  return (
    <div style={resultContainer}>

      <div style={resultBox}>

        <h1>Quiz Result {emoji}</h1>

        <h2>{subject} Test Completed</h2>

        <div style={scoreRow}>

          <div style={scoreCard}>
            <h3>Your Score</h3>
            <p style={{fontSize:"28px", fontWeight:"bold"}}>{score}</p>
          </div>

          <div style={scoreCard}>
            <h3>Total Questions</h3>
            <p style={{fontSize:"28px", fontWeight:"bold"}}>{total}</p>
          </div>

          <div style={scoreCard}>
            <h3>Percentage</h3>
            <p style={{fontSize:"28px", fontWeight:"bold"}}>{percent}%</p>
          </div>

        </div>

        {/* Performance Message */}
        <h2 style={{marginTop:"25px", color:"#0b3d91"}}>

        {percent >= 80
          ? "Excellent Performance 🎉"
          : percent >= 60
          ? "Good Job 👍"
          : percent >= 40
          ? "Keep Practicing 📚"
          : "Try Again 💪"}

        </h2>

        <button
          style={resultBtn}
          onClick={() => setPage("dashboard")}
        >
          Back to Dashboard
        </button>

      </div>

    </div>
  );
}

}

export default QuizApp;