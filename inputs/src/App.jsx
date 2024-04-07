import { useForm } from "./Hooks/useForm";

const inputsData = {
  username: "",
  password: "",
  option: "",
  checkboxOption: []
};

function App() {
  const [values, handleInputChange, inputsReset] = useForm(inputsData);

  const handleSubmit = (e) => {
    e.preventDefault();
    inputsReset();
  };

  const handleReset = () => {
    inputsReset();
  };

  return (
    <div className="text-center">
      <h1>inputs</h1>
      <hr />
      <form onSubmit={(e) => handleSubmit(e)} className="w-50 mx-auto">
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={(event) => handleInputChange(event)}
            id="username"
            name="username"
            type="text"
            value={values.username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            onChange={(event) => handleInputChange(event)}
            id="password"
            name="password"
            type="password"
            value={values.password}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      <hr />
      <div>
        <h6>inicia sesión con las siguientes descripciones</h6>
        <p>Username: {values.username}</p>
        <p>Password: {values.password}</p>
      </div>
      <br />
      <h3>Input Type Radio</h3>
      <hr />
      <p>Elige una opción</p>
      <form className="w-50 mx-auto">
        <div>
          <input
            type="radio"
            id="option1"
            name="option"
            value="option1"
            checked={values.option === "option1"}
            onChange={(event) => handleInputChange(event)}
          />
          <label htmlFor="option1">Opción 1</label>
        </div>
        <div>
          <input
            type="radio"
            id="option2"
            name="option"
            value="option2"
            checked={values.option === "option2"}
            onChange={(event) => handleInputChange(event)}
          />
          <label htmlFor="option2">Opción 2</label>
        </div>
        <div>
          <input
            type="radio"
            id="option3"
            name="option"
            value="option3"
            checked={values.option === "option3"}
            onChange={(event) => handleInputChange(event)}
          />
          <label htmlFor="option3">Opción 3</label>
        </div>
      </form>
      <hr />
      <br />
      <h3>Input Type Checkbox</h3>
      <hr />
      <p>Selecciona uno o más opciones</p>
      <form className="w-50 mx-auto">
        <div>
          <input
            type="checkbox"
            id="checkbox1"
            name="checkboxOption"
            value="checkbox1"
            checked={values.checkboxOption.includes("checkbox1")}
            onChange={(event) => handleInputChange(event)}
          />
          <label htmlFor="checkbox1">Checkbox 1</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="checkbox2"
            name="checkboxOption"
            value="checkbox2"
            checked={values.checkboxOption.includes("checkbox2")}
            onChange={(event) => handleInputChange(event)}
          />
          <label htmlFor="checkbox2">Checkbox 2</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="checkbox3"
            name="checkboxOption"
            value="checkbox3"
            checked={values.checkboxOption.includes("checkbox3")}
            onChange={(event) => handleInputChange(event)}
          />
          <label htmlFor="checkbox3">Checkbox 3</label>
        </div>
      </form>
      <hr />

      <br />
      <h3>Input Type Button</h3>
      <hr />
      <input type="button" onClick={() => alert('Hello World!')} value="Click Me!" />
      <hr />

      <br />
      <h3>Input Type Color</h3>
      <hr />
      <input type="color" id="color" name="color" value="#ff0000" />
      <hr />

      <br />
      <h3>Input Type Date</h3>
      <hr />
      <input type="date" id="date" name="date" />
      <hr />

      <br />
      <h3>Input Type Datetime-local</h3>
      <hr />
      <input type="datetime-local" id="datetime" name="datetime" />
      <hr />

      <br />
      <h3>Input Type Email</h3>
      <hr />
      <form action="/action_page.php">
        <label htmlFor="email">Enter your email:</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Submit</button>
      </form>

      <br /> <br />
      <h3>Input Type Image</h3>
      <hr />
      <input type="image" src="https://via.placeholder.com/150" alt="Submit" />

      <br /> <br />
      <h3>Input Type File</h3>
      <hr />
      <input type="file" id="file" name="file" />

      <br /> <br /> <br />
      <h3>Input Type Hidden</h3>
      <hr />
      <input type="hidden" name="hidden" value="hiddenValue" />

      <br /> <br />
      <h3>Input Type Month</h3>
      <hr />
      <label htmlFor="mes">Su fecha de cumpleaños es: </label>
      <input type="month" id="month" name="month" />

      <br /> <br /> <br />
      <h3>Input Type Number</h3>
      <hr />
      <input type="number" id="number" name="number" />

      <br />      <br /> <br />
      <h3>Input Restrictions</h3>
      <hr />
        <label htmlFor="quantity">Cantidad:</label>
        <input type="number" id="quantity" name="quantity" min="0" max="10" step="2" value="10" />

      <br /> <br /> <br />
      <h3>Input Type Range</h3>
      <hr />
      <label for="vol">Volumen (entre 0 y 50):</label>
      <input type="range" id="vol" name="vol" min="0" max="50" />    
     
      <br /> <br /> <br />
      <h3>Input Type Search</h3>
      <hr />
      <input type="search" id="searchInput" name="search" placeholder="Search" />

      <br /> <br /> <br />
      <h3>Input Type Tel</h3>
      <hr />
      <label for="phone">Enter a phone number:</label><br /> <br />
      <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
    
      <br /> <br /> <br />
      <h3>Input Type Time</h3>
      <hr /> 
     <label for="appt">Select a time:</label>
     <input type="time" id="appt" name="appt" />

     <br /> <br /> <br />
      <h3>Input Type Week</h3>
      <hr /> 
     <label for="week">Selecciona una semana:</label>
    <input type="week" id="week" name="week" />
    <br /><br /><br />
    </div>
  );
}

export default App;
