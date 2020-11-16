const CreateClass = (props) => {
    const [classes, setclasses] = useState({
      name: "",
      type: "",
      time: "",
      duration: "",
      location: "",
      intensity:"",
    });
  
    const submitHandler = (e) => {
      e.preventDefault();
      props.postclasses(classes);
      document.getElementById("classesForm").reset();
    };
  
    const inputHandler = (e) => {
      e.preventDefault();
      setclasses({ ...classes, [e.target.name]: e.target.value });
    };
  
    return (
      <div>
        <form onSubmit={submitHandler} id="classesForm">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={props.name}
              placeholder="Name"
              onChange={inputHandler}
            />
          </label>
          <label>
            type:
            <input
              type="text"
              name="type"
              value={props.type}
              placeholder="type"
              onChange={inputHandler}
            />
          </label>
          <label>
            Start Time:
            <input
              type="text"
              name="time"
              value={props.time}
              placeholder="time"
              onChange={inputHandler}
            />
          </label>
          <label>
            Duration
            <input
              type="text"
              name="duration"
              value={props.duration}
              placeholder="duration"
              onChange={inputHandler}
            />
          </label>
          <label>
           Location:
            <input
              type="text"
              name="location"
              value={props.location}
              placeholder="location"
              onChange={inputHandler}
            />
          </label>
          <label htmlFor = 'intensity'>
                <select 
                type= 'text'
                id= 'intensity'
                name= 'intensity'
                value= {values.intensity}
                onChange= {onChange}
                >
                    <option value= ''>Choose Workout Intensity</option>
                    <option value= 'beginner'>Beginner</option>
                    <option value= 'intermediate'>Intermediate</option>
                    <option value= 'expert'>Expert</option>
                </select>
            </label>
         
          <button>Add a Classes</button>
        </form>
      </div>
    );
  };
  
  //unsure about this being complete
  const mapStateToProps = (state) => {
    return {
      classes: state.classes,
      error: state.errors,
    };
  };
  
  export default connect(mapStateToProps, { postClasses })(CreateClass);