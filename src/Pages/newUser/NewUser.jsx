import "./NewUser.css"

export default function NewUser() {
  return (
    <div className="NewUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john " />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="john Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="john@gamil.com" />
        </div>
        <div className="newUserItem">
          <label>Passord</label>
          <input type="text" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <div className="newUserGender">
            <label>Gender</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">female</label>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">male</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect"name="" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}
