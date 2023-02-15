<template>
  <form>
    <label>First Name</label>
    <input type="text" required v-model="firstname">

    <label>Last Name</label>
    <input type="text" required v-model="lastname">

    <label>Email:</label>
    <input type="email" required v-model="email">

    <label>Phone</label>
    <input type="number" required v-model="phone">
    
    <label>Address</label>
    <input type="text" required v-model="address">
    
    <textarea name="message" id="message" cols="50" rows="10" required v-model="message">Type your message here..</textarea>
  
  </form>
  <p>First Name: {{ firstname }}</p>
  <p>Last Name: {{ lastname }}</p>
  <p>Email: {{ email }}</p>
  <p>Phone: {{ phone }}</p>
  <p>Address: {{ address }}</p>
  <p>Message: {{ message }}</p>

</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      message:''

    }

  }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
</style>